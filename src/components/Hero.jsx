import { useState } from 'react'

const Hero = () => {
  const [activeAudience, setActiveAudience] = useState('everyone')

  const audienceContent = {
    everyone: {
      text: 'I create purposeful experiences. Good design, in my view, should make life easier and more seamless.'
    },
    designers: {
      text: "Whether you label your layers or not, we'll create something great together."
    },
    recruiters: {
      text: `8+ years experience.

60:40 split mobile web (respectively).

100% remote & async since 2019.

Previous lives; Content Strategist, Copywriter, Data Planner, Marketer.`
    },
    engineers: {
      text: 'I know my way around a codebase && frameworks && design-to-dev nuances.'
    },
    antiremote: {
      text: 'Sorry, I am not the designer for you, but I am sure you have a great office.'
    }
  }

  const audiences = [
    { id: 'everyone', name: 'Everyone' },
    { id: 'designers', name: 'Designers' },
    { id: 'recruiters', name: 'Recruiters & Founders' },
    { id: 'engineers', name: 'Engineers' },
    { id: 'antiremote', name: 'Anti-remote work' }
  ]

  return (
    <section id="intro" className="scroll-mt-24">
      <div className="space-y-6">
        <p className="section-label">Intro</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
          Hey, I’m Louis — a product designer partnering with founders and product teams to build purposeful experiences.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400">
          Over the last 8+ years I’ve helped launch and evolve digital products across health, retail, fintech and AI. I work best embedded with ambitious teams that want design to unlock measurable outcomes.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">For</p>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActiveAudience(audience.id)}
                className={`group relative pb-3 text-sm font-medium tracking-wide transition-colors ${
                  activeAudience === audience.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {audience.name}
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-px h-[2px] transition-colors duration-200 ${
                    activeAudience === audience.id ? 'bg-[#3da8ff]' : 'bg-transparent group-hover:bg-gray-500'
                  }`}
                ></span>
              </button>
            ))}
          </div>
          <div className="h-px bg-gray-800" aria-hidden="true"></div>
        </div>
        <div className="pt-6 text-gray-100 min-h-[170px]">
          {activeAudience === 'antiremote' ? (
            <p className="text-base sm:text-lg leading-relaxed">
              {audienceContent[activeAudience].text.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-1">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block"
                      style={{
                        animation: `wave 1s ease-in-out infinite`,
                        animationDelay: `${(wordIndex * 10 + charIndex) * 0.05}s`
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          ) : (
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {audienceContent[activeAudience].text}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero

