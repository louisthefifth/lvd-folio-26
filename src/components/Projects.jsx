import React from "react";
import { Link } from "react-router-dom";

export default function Projects({ projects }) {
  return (
    <section id="work" className="space-y-20 scroll-mt-24">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className={`group px-4 py-10 sm:px-8 lg:px-12 ${
            index !== projects.length - 1 ? 'border-b border-gray-200 dark:border-gray-800 pb-20' : ''
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* LEFT: giant outlined project title */}
            <div className="flex-1">
              <h2
                className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white hover:text-[#313131] dark:text-white dark:hover:text-[#f8f8f8] transition-colors duration-300"
                style={{
                  WebkitTextStroke: "1px rgba(156,163,175,0.5)",
                }}
              >
                {project.shortTitle || project.title}
              </h2>
            </div>
            {/* RIGHT: tags + CTA */}
            <div className="flex flex-1 flex-col items-start gap-6 md:items-end">
              {/* Tech tags */}
              <div className="flex flex-wrap justify-start gap-3 md:justify-end">
                {project.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-gray-300 bg-gray-100 text-gray-600 dark:border-white/10 dark:bg-white/5 px-4 py-1.5 text-xs tracking-[0.16em] uppercase dark:text-gray-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* CTA - uses Link for internal routes, <a> for external */}
              {project.isInternal ? (
                <Link
                  to={project.link}
                  className="inline-flex items-center rounded-md bg-gray-100 px-5 py-3 text-sm font-medium text-[#313131] transition-all duration-300 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  View case study
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-100 px-5 py-3 text-sm font-medium text-[#313131] transition-all duration-300 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  View case study
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
