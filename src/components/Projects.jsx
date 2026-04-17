import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'

function ScrambledTitle({ children }) {
  const [display, setDisplay] = useState(children)
  const frameRef = useRef()

  useEffect(() => {
    let frame = 0
    const duration = 16
    const text = children

    const animate = () => {
      if (frame >= duration) {
        setDisplay(text)
        return
      }

      const scrambled = text.split('').map((char, i) => {
        if (char === ' ') return ' '
        if (frame > (i / text.length) * duration) return char
        return CHARS[Math.floor(Math.random() * CHARS.length)]
      }).join('')

      setDisplay(scrambled)
      frame++
      frameRef.current = requestAnimationFrame(animate)
    }

    // Stagger each title slightly for a cascading reveal
    const delay = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(delay)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [children])

  return <>{display}</>
}

export default function Projects({ projects }) {
  return (
    <section id="work" className="space-y-20 scroll-mt-24">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className={`group px-4 py-10 sm:px-8 lg:px-12 ${
            index !== projects.length - 1 ? 'border-b border-gray-200 pb-20' : ''
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {/* LEFT: giant outlined project title as a link */}
            <div className="flex-1">
              {project.isInternal ? (
                <Link to={project.link} className="block">
                  <h2
                    className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent transition-colors duration-300 hover:text-[#141413]"
                    style={{ WebkitTextStroke: '1px rgba(20,20,19,0.25)' }}
                  >
                    <ScrambledTitle>{project.shortTitle || project.title}</ScrambledTitle>
                  </h2>
                </Link>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <h2
                    className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent transition-colors duration-300 hover:text-[#141413]"
                    style={{ WebkitTextStroke: '1px rgba(20,20,19,0.25)' }}
                  >
                    <ScrambledTitle>{project.shortTitle || project.title}</ScrambledTitle>
                  </h2>
                </a>
              )}
            </div>

            {/* RIGHT: description + tags */}
            <div className="flex flex-1 flex-col justify-between gap-8 md:items-end min-h-[120px]">
              {project.description && (
                <p className="text-base text-gray-500 leading-relaxed md:text-right max-w-sm">
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap justify-start gap-3 md:justify-end mt-auto">
                {project.tech?.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-300 bg-gray-100 text-gray-600 px-4 py-1.5 text-xs tracking-[0.16em] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
