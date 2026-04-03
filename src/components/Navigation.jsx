import { useEffect, useState, useRef } from 'react'
import Logo from './Logo'

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'clients', label: 'Clients' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' }
]

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update during manual scroll
        if (isScrollingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setActiveSection(id)
    
    // Disable intersection observer during scroll
    isScrollingRef.current = true
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    // Re-enable intersection observer after scroll completes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? 'space-y-6' : 'space-y-6'}>
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`group font-satoshi text-lg transition-all cursor-pointer ${
              activeSection === item.id 
                ? 'text-[#313131] font-bold' 
                : 'text-gray-500 hover:text-[#313131] font-normal'
            }`}
          >
            <span className="whitespace-nowrap">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="lg:w-64 xl:w-72 flex-shrink-0">
      <div className="lg:hidden mb-6 flex items-center justify-between">
        {/* Logo for mobile */}
        <div className="h-10 w-10 flex items-center justify-center">
          <Logo className="w-10 h-10" />
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-gray-500 hover:text-[#313131] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-colors">
          <div className="border-t border-b border-gray-200 py-6">{renderNavLinks(true)}</div>
          <div className="mt-6 space-y-2">
            <a href="mailto:hello@louisv.co.uk" className="text-[#313131] font-satoshi text-sm hover:text-gray-600 transition-colors">
              hello@louisv.co.uk
            </a>
          </div>
        </div>
      )}

      <aside className="hidden lg:block lg:w-64 xl:w-72">
        {/* Logo - Fixed at top */}
        <div className="fixed top-10 lg:w-64 xl:w-72">
          <div className="h-[65px] w-[65px] flex items-center justify-center">
            <Logo className="w-[65px] h-[65px]" />
          </div>
        </div>

        {/* Navigation - Scrollable middle section */}
        <nav className="fixed top-32 bottom-32 lg:w-64 xl:w-72 overflow-y-auto scrollbar-hide">
          {renderNavLinks()}
        </nav>

      </aside>
    </div>
  )
}

export default Navigation
