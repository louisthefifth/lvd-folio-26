const Projects = () => {
  // This structure makes it easy to add new projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard built with modern technologies.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      year: '2024',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team features, and intuitive drag-and-drop interface.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      year: '2024',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualisation with forecasts, historical trends, and interactive maps powered by modern APIs.',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      year: '2023',
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Headless CMS for managing portfolio content with markdown support, media library, and custom content types.',
      tech: ['Next.js', 'Sanity', 'TypeScript'],
      year: '2023',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-[#1b1b1b] border-b border-gray-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of recent work showcasing different technologies and approaches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#2b2b2b] rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all"></div>
                <div className="relative text-6xl">💼</div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-satoshi text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-base font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

