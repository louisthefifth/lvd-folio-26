import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

// Case study pages - add new imports here as you create them
import Carv from './pages/projects/Carv'

/**
 * Project data - edit this to add/modify projects on the homepage
 * 
 * Each project needs:
 * - id: Unique number
 * - title: Full project name
 * - shortTitle: Short name for cards
 * - description: Brief description for homepage
 * - tech: Array of tags
 * - link: Internal route (e.g., '/projects/carv') or external URL
 * - icon: Emoji icon
 * - isInternal: Set to true for case studies hosted on this site
 */
const projects = [
  {
    id: 1,
    title: 'Carv (GetCarv)',
    shortTitle: 'Carv',
    description:
      'Delivering value and encouragement to skiers, with a focus on off-snow activity.',
    tech: ['Wearable Tech', 'Skiing', 'Mobile App', 'User Engagement'],
    link: '/projects/carv',
    icon: '⛷️',
    isInternal: true
  },
  {
    id: 2,
    title: 'Prevayl',
    shortTitle: 'Prevayl',
    description:
      'Leveraging medical-grade tracking analysis and insight for fitness wearable technology.',
    tech: ['Wearable Tech', 'Fitness', 'Medical-Grade Data', 'Insight Platform'],
    link: 'https://louisv.co.uk/prevayl',
    icon: '🏃‍♂️',
    isInternal: false
  },
  {
    id: 3,
    title: 'X-Lab (X-Lab Systems)',
    shortTitle: 'X-Lab',
    description:
      'A portal enabling marginalised users from remote organisations to request lab tests and review results.',
    tech: ['Healthcare', 'Remote Access', 'Lab Portal', 'Accessibility'],
    link: 'https://louisv.co.uk/x-lab',
    icon: '🧪',
    isInternal: false
  },
  {
    id: 4,
    title: 'Healthspan',
    shortTitle: 'Healthspan',
    description:
      'Comprehensive health-tech website audit and review to drive sales.',
    tech: ['Health-Tech', 'E-commerce', 'UX Audit', 'Conversion Optimisation'],
    link: 'https://louisv.co.uk/healthspan',
    icon: '🩺',
    isInternal: false
  },
  {
    id: 5,
    title: 'Tesco DDL',
    shortTitle: 'Tesco DDL',
    description:
      'Consolidating and correcting years of inconsistency to deliver a cohesive customer experience.',
    tech: ['Retail', 'Design System', 'Enterprise UX', 'Customer Experience'],
    link: 'https://louisv.co.uk/tesco-ddl',
    icon: '🛒',
    isInternal: false
  },
  {
    id: 6,
    title: 'WIREWAX',
    shortTitle: 'WIREWAX',
    description:
      'Ushering the renowned cloud-based video editor into a new era of aesthetics and features.',
    tech: ['Video SaaS', 'Product Design', 'Visual Design', 'Feature Evolution'],
    link: 'https://louisv.co.uk/wirewax',
    icon: '🎬',
    isInternal: false
  }
]

/**
 * Homepage component - the main landing page
 */
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
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

/**
 * Main App with routing
 * 
 * To add a new case study:
 * 1. Create a new file in /src/pages/projects/ (copy Carv.jsx as a template)
 * 2. Import it at the top of this file
 * 3. Add a new Route below
 * 4. Update the project in the projects array above (set isInternal: true, update link)
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />
        
        {/* Case study pages - add new routes here */}
        <Route path="/projects/carv" element={<Carv />} />
        
        {/* 
          Template for adding new case studies:
          <Route path="/projects/project-name" element={<ProjectName />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
