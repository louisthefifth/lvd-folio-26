const clients = [
  'Test Partnership',
  'OpenCures',
  'Quanta AI',
  'Node Guardians',
  'X-Lab Systems',
  'Healthspan',
  'Tractable AI',
  'Carv',
  'Prevayl',
  'UEFA',
  'NewMotion',
  'TAINA Technology',
  'Tesco',
  'Nurvv',
  'Wirewax',
]

const Clients = () => {
  return (
    <section id="clients" className="scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {clients.map((client) => (
          <div
            key={client}
            className="rounded-xl border border-gray-200 bg-white px-5 py-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 transition-colors duration-300"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
