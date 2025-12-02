import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1b1b1b]">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App

