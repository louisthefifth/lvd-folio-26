import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Writing from './components/Writing'
import Footer from './components/Footer'

// Case study pages
import Carv from './pages/projects/Carv'
import Prevayl from './pages/projects/Prevayl'
import XLab from './pages/projects/XLab'
import Healthspan from './pages/projects/Healthspan'
import Tesco from './pages/projects/Tesco'

const projects = [
  {
    id: 1,
    title: 'Carv (GetCarv)',
    shortTitle: 'Carv',
    description: 'Coaching skiers with live audio feedback and off-snow engagement strategies.',
    tech: ['Wearable Tech', 'B2C', 'UX/UI Design'],
    link: '/projects/carv',
    isInternal: true
  },
  {
    id: 2,
    title: 'Prevayl',
    shortTitle: 'Prevayl',
    description: 'Turning medical-grade biometric data into meaningful, actionable insight.',
    tech: ['Health Tech', 'B2C', 'UX/UI Design'],
    link: '/projects/prevayl',
    isInternal: true
  },
  {
    id: 3,
    title: 'X-Lab Systems',
    shortTitle: 'X-Lab',
    description: 'Designing a lab test portal from scratch for occupational health practitioners.',
    tech: ['Health Tech', 'B2B', 'UX/UI Design'],
    link: '/projects/x-lab',
    isInternal: true
  },
  {
    id: 4,
    title: 'Healthspan',
    shortTitle: 'Healthspan',
    description: 'A UX audit and content strategy that turned browsers into repeat customers.',
    tech: ['E-commerce', 'B2C', 'UX Strategy'],
    link: '/projects/healthspan',
    isInternal: true
  },
  {
    id: 5,
    title: 'Tesco',
    shortTitle: 'Tesco',
    description: 'Consolidating years of design inconsistency into one cohesive system.',
    tech: ['Retail', 'B2C', 'Design Systems'],
    link: '/projects/tesco',
    isInternal: true
  },
]

function Homepage() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:pt-10 lg:pb-20">
        <div className="lg:flex lg:gap-16 xl:gap-24">
          <Navigation />
          <main className="flex-1 space-y-96 sm:space-y-[32rem] lg:space-y-[48rem]">
            <Hero />
            <Projects projects={projects} />
            <Clients />
            <Testimonials />
            <Writing />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/carv" element={<Carv />} />
        <Route path="/projects/prevayl" element={<Prevayl />} />
        <Route path="/projects/x-lab" element={<XLab />} />
        <Route path="/projects/healthspan" element={<Healthspan />} />
        <Route path="/projects/tesco" element={<Tesco />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
