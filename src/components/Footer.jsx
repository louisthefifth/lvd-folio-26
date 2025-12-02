const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="scroll-mt-24 pb-10">
      <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-[#1c1c1c] to-[#151515] p-8 sm:p-10">
        <p className="section-label">Contact</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-white">
          Let’s design what’s next.
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
          I work with founders and product teams looking to launch, sharpen or scale digital experiences. Share a challenge, and I’ll put together an approach.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:hello@louisv.co.uk"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            <span>✉️</span>
            hello@louisv.co.uk
          </a>
          <a
            href="https://cal.com"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-5 py-2.5 font-medium text-gray-200 transition-colors hover:border-white/60 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📅</span>
            Book a 30 min call
          </a>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-xs uppercase tracking-[0.2em] text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span>© {currentYear} Louis Valenzuela</span>
          <span>Based in London · Working remotely since 2019</span>
          <span>Design inspired by real partnerships</span>
        </div>
      </div>
    </section>
  )
}

export default Footer

