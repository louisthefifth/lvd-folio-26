const Features = () => {
  const features = [
    {
      number: '1',
      title: 'Increased height for better reading',
      description: 'Characters remain standard in width, but the height of lowercase is maximised. This approach keeps code lines to the expected length and helps improve rendering.',
      link: 'Explore letter construction'
    },
    {
      number: '2',
      title: 'Adapted to reading code',
      description: 'The shape of ovals approaches rectangular symbols making the text pattern clearer. Simple forms mean faster eye perception and less brain processing.',
      link: 'Explore design'
    },
    {
      number: '3',
      title: 'Code-specific ligatures',
      description: 'Ligatures merge symbols to reduce noise and balance whitespace. Making code easier to scan and understand at a glance.',
      link: 'Explore ligatures'
    },
    {
      number: '4',
      title: '148 languages supported',
      description: 'From Latin to Cyrillic, comprehensive language coverage ensures your code looks great regardless of the language or framework you use.',
      link: 'See full list'
    },
    {
      number: '5',
      title: '8 weights with italics',
      description: 'From Thin to ExtraBold, each weight includes matching italics with a 9° angle for optimal contrast and minimal eye strain.',
      link: 'Explore font family'
    },
    {
      number: '6',
      title: 'Free & open source',
      description: 'JetBrains Mono is available under the SIL Open Font License 1.1 and can be used free of charge for both commercial and non-commercial purposes.',
      link: 'Read licence'
    }
  ]

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-32 bg-[#1b1b1b] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="text-5xl font-bold text-white/10 mb-4">
                {feature.number}
              </div>
              <h3 className="font-satoshi text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-base">
                {feature.description}
              </p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors inline-flex items-center text-sm font-medium">
                {feature.link}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

