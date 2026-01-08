import { Link } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

/**
 * CaseStudyLayout - Template for case study pages
 * 
 * Section types available:
 * - 'text': { type: 'text', title: 'Title', content: 'Text...' or ['Para 1', 'Para 2'] }
 * - 'image': { type: 'image', src: '/images/...', alt: '...', caption: '...' }
 * - 'image-grid': { type: 'image-grid', columns: 2|3, images: [{src, alt}] }
 * - 'video': { type: 'video', src: '/videos/...', caption: '...' }
 * - 'quote': { type: 'quote', text: '...', author: '...' }
 * - 'list': { type: 'list', title: '...', items: ['...'] }
 * - 'highlight': { type: 'highlight', title: '...', content: '...' }
 * - 'metrics': { type: 'metrics', metrics: [{value: '50%', label: '...'}] }
 * - 'divider': { type: 'divider' }
 */

function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-white origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default function CaseStudyLayout({ project }) {
  const { 
    title, 
    subtitle, 
    description, 
    tags = [], 
    sections = [], 
    externalLink,
    outcome
  } = project

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ReadingProgress />
      
      {/* Back navigation */}
      <div className="sticky top-0 z-40 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        
        {subtitle && externalLink && (
          <a 
            href={externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            {subtitle}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Meta */}
        {project.challenge && (
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">The challenge</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}
      </header>

      {/* Content sections */}
      <div className="space-y-16 sm:space-y-24 pb-24">
        {sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>

      {/* Outcome */}
      {outcome && (
        <div className="bg-gray-100 dark:bg-gray-900 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Outcome</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
              {outcome}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </footer>
    </div>
  )
}

function Section({ section }) {
  if (!section || !section.type) return null

  switch (section.type) {
    case 'text':
      return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {section.title && (
            <h2 className={
              section.headerSize === 'sm' ? "text-lg font-medium text-gray-900 dark:text-gray-100 mb-6" :
              section.headerSize === 'md' ? "text-xl font-medium text-gray-900 dark:text-gray-100 mb-6" :
              "text-2xl sm:text-3xl font-bold mb-6"
            }>
              {section.title}
            </h2>
          )}
          {Array.isArray(section.content) ? (
            <div className="space-y-4">
              {section.content.map((para, i) => (
                <p key={i} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          )}
        </section>
      )

    case 'image':
      return (
        <figure className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={section.src} 
            alt={section.alt}
            loading="lazy"
            className={`w-full ${section.noBorder ? '' : 'border border-gray-300 dark:border-gray-600 rounded'}`}
            style={{ 
              ...(section.noBorder ? {} : { borderWidth: '0.5px' }), 
              ...section.style 
            }}
          />
          {section.caption && (
            <figcaption className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'image-grid':
      return (
        <div>
          {section.content && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <h3 className={`${
                section.headerSize === 'md' ? 'text-xl' : 
                section.headerSize === 'lg' ? 'text-2xl' : 
                'text-lg'
              } font-medium text-gray-900 dark:text-gray-100 ${section.description ? 'mb-4' : ''}`}>
                {section.content}
              </h3>
              {section.description && (
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>
          )}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: Grid | Mobile: Horizontal scroll carousel */}
          <div className={`
            ${section.columns === 4 
              ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${section.gap === 2 ? 'gap-2' : section.gap === 3 ? 'gap-3' : section.gap === 6 ? 'gap-6' : section.gap === 8 ? 'gap-8' : 'gap-4'}` 
              : section.columns === 3 
              ? `grid grid-cols-1 sm:grid-cols-3 ${section.gap === 2 ? 'gap-2' : section.gap === 3 ? 'gap-3' : section.gap === 6 ? 'gap-6' : section.gap === 8 ? 'gap-8' : 'gap-4'}` 
              : `grid grid-cols-1 sm:grid-cols-2 ${section.gap === 2 ? 'gap-2' : section.gap === 3 ? 'gap-3' : section.gap === 6 ? 'gap-6' : section.gap === 8 ? 'gap-8' : 'gap-4'}`
            }
            sm:grid
            flex sm:flex-none gap-12 sm:gap-0
            overflow-x-auto sm:overflow-visible
            snap-x snap-mandatory
            scrollbar-hide
            -mx-4 px-4 sm:mx-0 sm:px-0
          `}>
            {section.images?.map((img, i) => (
              <figure 
                key={i}
                className={`snap-center flex-shrink-0 w-[85vw] sm:w-auto ${img.breakout ? 'sm:col-span-full sm:flex sm:justify-center' : ''}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  className={`${img.breakout ? '' : 'w-full'} ${img.noBorder ? '' : 'border border-gray-300 dark:border-gray-600 rounded'}`}
                  style={{ 
                    ...(img.noBorder ? {} : { borderWidth: '0.5px' }), 
                    ...img.style 
                  }}
                />
                {img.caption && (
                  <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          </div>
        </div>
      )

    case 'video':
      return (
        <figure className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden"
            style={{ borderWidth: '0.5px', ...section.style }}
          >
            <video 
              src={section.src} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full block"
              style={section.cropTop ? { 
                marginTop: `-${section.cropTop}px`
              } : {}}
            />
          </div>
          {section.caption && (
            <figcaption className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'insight-cards':
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {section.cards?.map((card, i) => (
              <div 
                key={i}
                className="border border-gray-300 dark:border-gray-600 p-6 space-y-6 rounded bg-white"
                style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}
              >
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-teal-500 dark:text-teal-400 font-jetbrains mb-3">
                    INSIGHT
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-satoshi">
                    {card.insight}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-green-500 dark:text-green-400 font-jetbrains mb-3">
                    OPPORTUNITY
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-satoshi">
                    {card.opportunity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'journey-table':
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Header row */}
              <div className="grid grid-cols-7 gap-4 mb-4">
                {section.columns?.map((col, i) => (
                  <div 
                    key={i}
                    className={`${i === 0 ? 'flex items-center justify-center' : 'border border-gray-300 dark:border-gray-600 rounded p-4 bg-white'}`}
                    style={i !== 0 ? { borderWidth: '0.5px', backgroundColor: '#ffffff' } : {}}
                  >
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-satoshi whitespace-pre-line">
                      {col.label}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Data rows */}
              {section.rows?.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-7 gap-4 mb-4">
                  {/* Row label */}
                  <div className="flex items-center justify-center">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-satoshi">
                      {row.label}
                    </p>
                  </div>
                  
                  {/* Row cells */}
                  {row.cells?.map((cell, cellIndex) => (
                    <div 
                      key={cellIndex}
                      className="border border-gray-300 dark:border-gray-600 rounded p-4 bg-white"
                      style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-satoshi">
                        {cell}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile: Stack cards */}
          <div className="lg:hidden space-y-6">
            {section.columns?.slice(1).map((col, colIndex) => (
              <div key={colIndex} className="border border-gray-300 dark:border-gray-600 rounded p-6 space-y-4 bg-white" style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}>
                <h5 className="text-sm font-bold text-gray-700 dark:text-gray-300 font-satoshi mb-4">
                  {col.label}
                </h5>
                {section.rows?.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-jetbrains mb-2">
                      {row.label}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-satoshi">
                      {row.cells[colIndex]}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )

    case 'quote':
      return (
        <blockquote className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl sm:text-2xl italic text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            "{section.text}"
          </p>
          {section.author && (
            <cite className="text-sm text-gray-500 dark:text-gray-400 not-italic">
              — {section.author}
            </cite>
          )}
        </blockquote>
      )

    case 'list':
      return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {section.title && (
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{section.title}</h2>
          )}
          <ul className="space-y-3">
            {section.items?.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-600 dark:text-gray-300">
                <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )

    case 'highlight':
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 sm:p-8">
            {section.title && (
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
            )}
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {section.content}
            </p>
          </div>
        </div>
      )

    case 'metrics':
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {section.title && (
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{section.title}</h2>
          )}
          <div className={`grid gap-6 ${section.metrics?.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
            {section.metrics?.map((metric, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                <p className="text-4xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'divider':
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-200 dark:border-gray-700" />
        </div>
      )

    default:
      return null
  }
}
