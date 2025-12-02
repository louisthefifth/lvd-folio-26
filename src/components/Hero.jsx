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
    <section id="home" className="relative bg-[#27282c] overflow-hidden border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="mb-12 sm:mb-20">
          <h1 className="font-satoshi text-5xl sm:text-6xl lg:text-8xl font-normal text-white mb-0 leading-tight">
            Hey, I am Louis
          </h1>
          <br></br>
          <br></br>
          <p className="font-satoshi text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
            Nice to meet you:
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl mb-12">
          <div className="border-b border-gray-700 bg-gray-700 px-4 py-3">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
            <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-2 min-w-max">
                {audiences.map((audience) => (
                  <button
                    key={audience.id}
                    onClick={() => setActiveAudience(audience.id)}
                    className={`px-4 sm:px-4 py-2 sm:py-1.5 text-sm sm:text-sm rounded transition-all whitespace-nowrap ${activeAudience === audience.id
                        ? 'bg-white text-black font-medium'
                        : 'bg-transparent text-gray-300 hover:text-white hover:bg-gray-600'
                      }`}
                  >
                    {audience.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] text-gray-100 p-6 sm:p-8 min-h-[280px] flex items-start">
            {activeAudience === 'antiremote' ? (
              <p className="text-base sm:text-lg leading-relaxed w-full">
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
              <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line w-full">
                {audienceContent[activeAudience].text}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

