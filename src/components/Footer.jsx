const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="scroll-mt-24 pb-10">
      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
          <span>© {currentYear} Louis Valenzuela</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@louisv.co.uk"
              className="hover:text-[#141413] transition-colors"
            >
              hello@louisv.co.uk
            </a>
            <a
              href="https://www.linkedin.com/in/louisvalenzuela/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
