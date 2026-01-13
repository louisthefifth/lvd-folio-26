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
      className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
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
      <div className="sticky top-0 z-40 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-[250px] sm:pb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          {title}
        </h1>

        {subtitle && externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            {subtitle}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          {description}
        </p>

        {/* Hero Images */}
        {project.heroImages && project.heroImages.length > 0 && (
          <div className={`mb-12 ${project.heroImagesFullWidth ? '-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8' : ''}`}
            style={project.heroImagesFullWidth ? { width: 'calc(100% + 2rem)', maxWidth: '100vw' } : {}}>
            <div className={`grid gap-4 ${project.heroImages.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
                project.heroImages.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                  'grid-cols-1'
              } ${project.heroImagesFullWidth ? 'max-w-7xl mx-auto' : ''}`}>
              {project.heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full border border-gray-300 rounded"
                  style={{ borderWidth: '0.5px', margin: '0 auto', ...img.style }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Meta */}
        {(project.role || project.challenge || project.setup || project.results) && (
          <div className="space-y-12">
            {project.role && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(97, 97, 97)' }}>Role</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.role}
                </p>
              </div>
            )}

            {project.challenge && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(97, 97, 97)' }}>The challenge</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.setup && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgb(97, 97, 97)' }}>Set up</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.setup}
                </p>
              </div>
            )}

            {project.results && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgb(97, 97, 97)' }}>Results</p>
                <div className={`grid gap-6 ${project.results?.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {Array.isArray(project.results) && project.results.map((result, i) => (
                    <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                      <p className="text-4xl font-bold mb-2">{result.value}</p>
                      <p className="text-sm uppercase tracking-widest text-gray-500">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Content sections */}
      <div className="space-y-24 sm:space-y-[100px] pb-24">
        {sections.map((section, index) => (
          <div key={index} style={section.spacingTop ? { marginTop: section.spacingTop } : {}}>
            <Section section={section} />
          </div>
        ))}
      </div>

      {/* Outcome */}
      {outcome && (
        <div className="bg-gray-100 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Outcome</h2>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              {outcome}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
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
              section.headerSize === 'sm' ? "text-lg font-medium text-gray-900 mb-2" :
                section.headerSize === 'md' ? "text-xl font-medium text-gray-900 mb-6" :
                  "text-2xl sm:text-3xl font-bold mb-3"
            }>
              {section.title}
            </h2>
          )}
          {Array.isArray(section.content) ? (
            <div className="space-y-4">
              {section.content.map((para, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed">
                  {Array.isArray(para) ? (
                    para.map((item, j) => {
                      if (typeof item === 'string') {
                        return item
                      } else if (item.link) {
                        return (
                          <a
                            key={j}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {item.text}
                          </a>
                        )
                      }
                      return null
                    })
                  ) : para}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600 leading-relaxed">
              {section.content}
            </p>
          )}
        </section>
      )

    case 'image':
      return (
        <figure className={section.fullWidth ? "w-full" : "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"}>
          <img
            src={section.src}
            alt={section.alt}
            loading="lazy"
            className={`w-full ${section.noBorder ? '' : 'border border-gray-300 rounded'}`}
            style={{
              ...(section.noBorder ? {} : { borderWidth: '0.5px' }),
              ...section.style
            }}
          />
          {section.caption && (
            <figcaption className="mt-4 text-sm text-gray-500 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'image-grid':
      // Calculate gap in pixels - negative values for tighter spacing
      const getGapValue = (gap) => {
        if (gap === undefined) return '16px' // default
        if (gap === -10) return '0px'
        if (gap === -9) return '4px'
        if (gap === -8) return '8px'
        if (gap === -7) return '12px'
        if (gap === -6) return '16px'
        if (gap === -5) return '20px'
        if (gap === -4) return '24px'
        if (gap === -3) return '28px'
        if (gap === -2) return '32px'
        if (gap === -1) return '36px'
        if (gap === 1) return '4px'
        if (gap === 2) return '8px'
        if (gap === 3) return '12px'
        if (gap === 6) return '24px'
        if (gap === 8) return '32px'
        if (gap >= 0) return `${gap}px` // positive numbers as-is
        return '16px'
      }

      const rowGapValue = getGapValue(section.rowGap !== undefined ? section.rowGap : section.gap)
      const columnGapValue = getGapValue(section.columnGap !== undefined ? section.columnGap : section.gap)
      console.log('Image Grid - Row gap:', section.rowGap || section.gap, '→', rowGapValue, '| Column gap:', section.columnGap || section.gap, '→', columnGapValue)

      // For tight grids with constrained images, use max-content columns
      const useFitContent = section.gap <= -5
      const gridTemplateColumns = useFitContent
        ? (section.columns === 4 ? 'repeat(4, max-content)' :
          section.columns === 3 ? 'repeat(3, max-content)' :
            'repeat(2, max-content)')
        : null

      const gridCols = section.columns === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : section.columns === 3
          ? 'grid-cols-1 sm:grid-cols-3'
          : 'grid-cols-1 sm:grid-cols-2'

      return (
        <div>
          {section.content && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <h3 className={`${section.headerSize === 'md' ? 'text-xl' :
                section.headerSize === 'lg' ? 'text-2xl' :
                  'text-lg'
                } font-medium text-gray-900 ${section.description ? 'mb-4' : ''}`}>
                {section.content}
              </h3>
              {section.description && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>
          )}
          <div className={section.fullWidth ? "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"}>
            <div
              className={`grid ${useFitContent ? 'justify-center' : gridCols}`}
              style={{
                rowGap: rowGapValue,
                columnGap: columnGapValue,
                ...(useFitContent ? { gridTemplateColumns } : {})
              }}
            >
              {section.images?.map((img, i) => (
                <figure
                  key={i}
                  className={`${img.breakout ? 'col-span-full flex justify-center' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`${img.breakout ? '' : 'w-full'} ${img.noBorder ? '' : 'border border-gray-300 rounded'}`}
                    style={{
                      ...(img.noBorder ? {} : { borderWidth: '0.5px' }),
                      ...img.style
                    }}
                  />
                  {img.caption && (
                    <figcaption className="mt-2 text-sm text-gray-500 text-center">
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
            className="border border-gray-300 rounded overflow-hidden"
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
            <figcaption className="mt-4 text-sm text-gray-500 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      )

    case 'insight-cards':
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {section.cards?.map((card, i) => (
              <div
                key={i}
                className="border border-gray-300 p-6 space-y-6 rounded bg-white"
                style={{ borderWidth: '0.5px', backgroundColor: '#ffffff', ...card.style }}
              >
                <div>
                  <h5 className="text-sm font-medium uppercase tracking-widest font-jetbrains mb-3" style={{ color: '#2b2b2b' }}>
                    INSIGHT
                  </h5>
                  <p className="text-base text-gray-700 leading-relaxed font-satoshi">
                    {card.insight}
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-medium uppercase tracking-widest font-jetbrains mb-3" style={{ color: '#2b2b2b' }}>
                    OPPORTUNITY
                  </h5>
                  <p className="text-base text-gray-700 leading-relaxed font-satoshi">
                    {card.opportunity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'cards':
      // Calculate gap for cards section
      const getCardGap = (gap) => {
        if (gap === undefined) return '16px' // default (gap-4)
        if (gap === -10) return '0px'
        if (gap === -9) return '4px'
        if (gap === -8) return '8px'
        if (gap === -7) return '12px'
        if (gap === -6) return '16px'
        if (gap === -5) return '20px'
        if (gap === -4) return '24px'
        if (gap === -3) return '28px'
        if (gap === -2) return '32px'
        if (gap === -1) return '36px'
        if (gap >= 0) return `${gap}px` // positive numbers as-is
        return '16px'
      }

      const cardRowGap = getCardGap(section.rowGap !== undefined ? section.rowGap : section.gap)
      const cardColumnGap = getCardGap(section.columnGap !== undefined ? section.columnGap : section.gap)

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 ${section.columns === 2 ? 'sm:grid-cols-2' :
                section.columns === 3 ? 'sm:grid-cols-3' :
                  section.columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' :
                    'sm:grid-cols-3'
              }`}
            style={{ rowGap: cardRowGap, columnGap: cardColumnGap }}
          >
            {section.cards?.map((card, i) => (
              <div
                key={i}
                className="border border-gray-300 p-6 space-y-6 rounded bg-white"
                style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}
              >
                {card.title && (
                  <h5 className="text-sm font-medium uppercase tracking-widest font-jetbrains mb-3" style={{ color: '#2b2b2b' }}>
                    {card.title}
                  </h5>
                )}
                <p className="text-base text-gray-700 leading-relaxed font-satoshi">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'journey-table':
      // Calculate gap for journey-table section
      const getTableGap = (gap) => {
        if (gap === undefined) return '16px' // default (gap-4)
        if (gap === -10) return '0px'
        if (gap === -9) return '4px'
        if (gap === -8) return '8px'
        if (gap === -7) return '12px'
        if (gap === -6) return '16px'
        if (gap === -5) return '20px'
        if (gap === -4) return '24px'
        if (gap === -3) return '28px'
        if (gap === -2) return '32px'
        if (gap === -1) return '36px'
        if (gap >= 0) return `${gap}px` // positive numbers as-is
        return '16px'
      }

      const tableRowGap = getTableGap(section.rowGap !== undefined ? section.rowGap : section.gap)
      const tableColumnGap = getTableGap(section.columnGap !== undefined ? section.columnGap : section.gap)

      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Header row */}
              <div
                className="grid grid-cols-7 mb-4"
                style={{ rowGap: tableRowGap, columnGap: tableColumnGap }}
              >
                {section.columns?.map((col, i) => (
                  <div
                    key={i}
                    className={`${i === 0 ? 'flex items-center justify-center' : 'border border-gray-300 rounded p-4 bg-white'}`}
                    style={i !== 0 ? { borderWidth: '0.5px', backgroundColor: '#ffffff' } : {}}
                  >
                    <p className="text-sm font-semibold text-gray-700 font-satoshi whitespace-pre-line">
                      {col.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {section.rows?.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-7 mb-4"
                  style={{ rowGap: tableRowGap, columnGap: tableColumnGap }}
                >
                  {/* Row label */}
                  <div className="flex items-center justify-center">
                    <p className="text-sm font-semibold text-gray-700 font-satoshi">
                      {row.label}
                    </p>
                  </div>

                  {/* Row cells */}
                  {row.cells?.map((cell, cellIndex) => (
                    <div
                      key={cellIndex}
                      className="border border-gray-300 rounded p-4 bg-white"
                      style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed font-satoshi">
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
              <div key={colIndex} className="border border-gray-300 rounded p-6 space-y-4 bg-white" style={{ borderWidth: '0.5px', backgroundColor: '#ffffff' }}>
                <h5 className="text-sm font-bold text-gray-700 font-satoshi mb-4">
                  {col.label}
                </h5>
                {section.rows?.map((row, rowIndex) => (
                  <div key={rowIndex}>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-jetbrains mb-2">
                      {row.label}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed font-satoshi">
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
        <blockquote className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-gray-900 pl-6">
            <p className="text-base sm:text-lg italic text-gray-700 leading-relaxed">
              {section.text}
            </p>
            {section.author && (
              <cite className="text-sm text-gray-500 not-italic mt-2 block">
                — {section.author}
              </cite>
            )}
          </div>
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
              <li key={i} className="flex items-start gap-3 text-lg text-gray-600">
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
          <div className="bg-gray-100 rounded-xl p-6 sm:p-8">
            {section.title && (
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
            )}
            <p className="text-lg text-gray-600 leading-relaxed">
              {Array.isArray(section.content) ? (
                section.content.map((item, i) => {
                  if (typeof item === 'string') {
                    return item
                  } else if (item.link) {
                    return (
                      <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.text}
                      </a>
                    )
                  }
                  return null
                })
              ) : section.content}
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
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <p className="text-4xl font-bold mb-2">{metric.value}</p>
                <p className="text-sm uppercase tracking-widest text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'divider':
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-gray-200" />
        </div>
      )

    default:
      return null
  }
}
