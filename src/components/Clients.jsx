const clients = [
  'Carv',
  'Prevayl',
  'X-Lab Systems',
  'Healthspan',
  'Tesco DDL',
  'WIREWAX',
  'TAINA Technology',
  'Brandwidth',
  'Tractable',
  'Financial Times',
  'shipshape.vc'
]

const Clients = () => {
  return (
    <section id="clients" className="scroll-mt-24">
      <div className="space-y-5 mb-10">
        <p className="section-label">Clients</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
          Trusted by teams scaling bold ideas.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
          From category-creating startups to established brands, I partner with teams who value design as a strategic lever.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="rounded-xl border border-gray-800 bg-[#161616] px-5 py-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-200"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients

