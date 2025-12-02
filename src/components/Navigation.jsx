import { useEffect, useState } from 'react'

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'clients', label: 'Clients' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px'
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

  const renderNavLinks = (isMobile = false) => (
    <ul className={isMobile ? 'space-y-4' : 'space-y-4'}>
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`group flex items-center gap-4 text-[0.75rem] uppercase tracking-[0.38em] transition-colors ${
              activeSection === item.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <span
              className={`h-px w-14 transition-colors duration-200 ${
                activeSection === item.id ? 'bg-white' : 'bg-gray-700 group-hover:bg-gray-500'
              }`}
            ></span>
            <span className="whitespace-nowrap">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="lg:w-64 xl:w-72 flex-shrink-0">
      <div className="lg:hidden mb-6 flex items-center justify-between">
        <div>
          <a href="#intro" className="text-lg font-semibold text-white">
            Louis Valenzuela
          </a>
          <p className="text-xs text-gray-500">Product designer & strategic partner</p>
        </div>
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-gray-400 hover:text-white"
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

      {mobileMenuOpen && (
        <div className="lg:hidden mb-8 rounded-2xl border border-gray-800 bg-[#151515] p-6">
          <div className="border-t border-b border-gray-800 py-4">{renderNavLinks(true)}</div>
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>Based in London · Remote first</p>
            <a href="mailto:hello@louisv.co.uk" className="text-white">
              hello@louisv.co.uk
            </a>
          </div>
        </div>
      )}

      <aside className="hidden lg:flex lg:h-[calc(100vh-6rem)] lg:flex-col lg:justify-between lg:sticky lg:top-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-600">Louis Valenzuela</p>
            <p className="text-sm text-gray-500">Product designer & strategic partner</p>
          </div>

          <nav className="pt-4">
            <div className="h-px bg-gray-800"></div>
            <div className="py-6">{renderNavLinks()}</div>
            <div className="h-px bg-gray-800"></div>
          </nav>
        </div>

        <div className="space-y-2 text-xs tracking-[0.2em] uppercase text-gray-500">
          <a href="mailto:hello@louisv.co.uk" className="text-white tracking-[0.25em]">
            hello@louisv.co.uk
          </a>
          <p>London · GMT</p>
        </div>
      </aside>
    </div>
  )
}

export default Navigation

