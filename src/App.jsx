import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20">
        <div className="lg:flex lg:gap-16 xl:gap-24">
          <Navigation />
          <main className="flex-1 space-y-20 sm:space-y-24 lg:space-y-32">
            <Hero />
            <Projects />
            <Clients />
            <Testimonials />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

