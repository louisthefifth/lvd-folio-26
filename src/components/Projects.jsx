const Projects = () => {
  // This structure makes it easy to add new projects
  const projects = [
    {
      id: 1,
      title: 'Carv (GetCarv)',
      description:
        'Delivering value and encouragement to skiers, with a focus on off-snow activity.',
      tech: ['Wearable Tech', 'Skiing', 'Mobile App', 'User Engagement'],
      link: 'https://louisv.co.uk/carv',
      icon: '⛷️'
    },
    {
      id: 2,
      title: 'Prevayl',
      description:
        'Leveraging medical-grade tracking analysis and insight for fitness wearable technology.',
      tech: ['Wearable Tech', 'Fitness', 'Medical-Grade Data', 'Insight Platform'],
      link: 'https://louisv.co.uk/prevayl',
      icon: '🏃‍♂️'
    },
    {
      id: 3,
      title: 'X-Lab (X-Lab Systems)',
      description:
        'A portal enabling marginalised users from remote organisations to request lab tests and review results.',
      tech: ['Healthcare', 'Remote Access', 'Lab Portal', 'Accessibility'],
      link: 'https://louisv.co.uk/x-lab',
      icon: '🧪'
    },
    {
      id: 4,
      title: 'Healthspan',
      description:
        'Comprehensive health-tech website audit and review to drive sales.',
      tech: ['Health-Tech', 'E-commerce', 'UX Audit', 'Conversion Optimisation'],
      link: 'https://louisv.co.uk/healthspan',
      icon: '🩺'
    },
    {
      id: 5,
      title: 'Tesco DDL',
      description:
        'Consolidating and correcting years of inconsistency to deliver a cohesive customer experience.',
      tech: ['Retail', 'Design System', 'Enterprise UX', 'Customer Experience'],
      link: 'https://louisv.co.uk/tesco-ddl',
      icon: '🛒'
    },
    {
      id: 6,
      title: 'WIREWAX',
      description:
        'Ushering the renowned cloud-based video editor into a new era of aesthetics and features.',
      tech: ['Video SaaS', 'Product Design', 'Visual Design', 'Feature Evolution'],
      link: 'https://louisv.co.uk/wirewax',
      icon: '🎬'
    }
  ]

  return (
    <section id="work" className="scroll-mt-24">
      <div className="space-y-5 mb-12">
        <p className="section-label">Work</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          Selected collaborations across health, retail, media and emerging tech.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
          A snapshot of recent product and service design engagements — from shaping brand-new ventures to strengthening existing platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-gray-800 bg-[#1a1a1a] p-6 sm:p-7 transition-all duration-300 hover:border-gray-600"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="text-2xl">{project.icon ?? '💼'}</span>
              <span>{project.tech[0]}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-6 inline-flex items-center text-sm font-medium text-white transition-colors hover:text-gray-200"
            >
              View case study
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

