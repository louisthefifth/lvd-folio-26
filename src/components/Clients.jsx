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
          if (client.url) {
            return (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-600 transition-all duration-300 hover:border-gray-300 hover:text-[#141413]"
              >
                <span>{client.name}</span>
                <span className="client-arrow ml-2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
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
