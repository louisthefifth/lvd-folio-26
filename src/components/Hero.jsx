import { useState } from 'react'

const Hero = () => {
  const [activeAudience, setActiveAudience] = useState('everyone')

  const audienceContent = {
    everyone: {
      text: 'I create purposeful experiences. Good design, in my view, should make life easier and more seamless.'
    },
    designers: {
      text: 'Whether you label your layers or not, we will create something great together.'
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
    { id: 'everyone', name: 'For everyone' },
    { id: 'designers', name: 'Designers' },
    { id: 'recruiters', name: 'Recruiters & Founders' },
    { id: 'engineers', name: 'Engineers' },
    { id: 'antiremote', name: 'Anti-remote work' }
  ]

  return (
    <section id="intro" className="scroll-mt-24 lg:pt-[6.5rem]">
      <div>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 justify-start">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActiveAudience(audience.id)}
                className={`group relative pb-3 font-satoshi text-sm font-medium tracking-wide transition-colors text-left whitespace-nowrap ${
                  activeAudience === audience.id 
                    ? 'text-[#313131] dark:text-[#f8f8f8]' 
                    : 'text-gray-500 hover:text-[#313131] dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {audience.name}
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-px h-[2px] transition-colors duration-200 ${
                    activeAudience === audience.id ? 'bg-[#046055]' : 'bg-transparent group-hover:bg-gray-400 dark:group-hover:bg-gray-500'
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className="pt-6 text-[#313131] dark:text-gray-100 h-[250px]">
          {activeAudience === 'antiremote' ? (
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed">
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
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed whitespace-pre-line">
              {audienceContent[activeAudience].text}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
