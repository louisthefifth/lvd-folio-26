const clients = [
  { name: 'Test Partnership', url: 'https://testpartnership.com' },
  { name: 'OpenCures', url: 'https://opencures.org' },
  { name: 'Quanta AI', url: null },
  { name: 'Node Guardians', url: 'https://nodeguardians.io' },
  { name: 'X-Lab Systems', url: 'https://x-labsystems.com' },
  { name: 'Healthspan', url: 'https://www.healthspan.co.uk' },
  { name: 'Tractable AI', url: 'https://tractable.ai' },
  { name: 'Carv', url: 'https://getcarv.com' },
  { name: 'Prevayl', url: 'https://www.prevayl.com' },
  { name: 'UEFA', url: 'https://www.uefa.com' },
  { name: 'NewMotion', url: 'https://newmotion.com' },
  { name: 'TAINA Technology', url: 'https://tainatech.com' },
  { name: 'Tesco', url: 'https://www.tesco.com' },
  { name: 'Nurvv', url: 'https://www.nurvv.com' },
  { name: 'Wirewax', url: 'https://www.wirewax.com' },
]

const Clients = () => {
  return (
    <section id="clients" className="scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {clients.map((client) => {
          const inner = (
            <>
              <span>{client.name}</span>
              {client.url && (
                <span className="hidden group-hover:inline ml-2 transition-opacity">→</span>
              )}
            </>
          )

          if (client.url) {
            return (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 transition-all duration-300 hover:border-gray-300 hover:text-[#141413]"
              >
                {inner}
              </a>
            )
          }

          return (
            <div
              key={client.name}
              className="flex items-center rounded-xl border border-gray-200 bg-white px-5 py-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-600"
            >
              <span>{client.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Clients
