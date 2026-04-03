const posts = [
  {
    title: "The curious case of WhatsApp's search functionality",
    description: "And how it became the worst possible feature for an app used by billions.",
    date: "23 Mar 2026",
    url: "https://lvdesigns.substack.com/p/the-curious-case-of-whatsapps-search"
  }
]

const Writing = () => {
  return (
    <section id="writing" className="scroll-mt-24">
      <div className="space-y-5 mb-10">
        <p className="section-label">Writing</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[#313131]">
          Thinking out loud.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-500 leading-relaxed">
          Design thinking, sharp takes, and the occasional tangent — published on Substack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {posts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">{post.date}</p>
            <h3 className="text-base sm:text-lg font-semibold text-[#313131] leading-snug mb-2 group-hover:text-[#046055] transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
            <span className="inline-block mt-4 text-sm text-[#046055] font-medium">
              Read →
            </span>
          </a>
        ))}
      </div>

      <a
        href="https://lvdesigns.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-[#313131] hover:text-[#046055] transition-colors"
      >
        All writing on Substack →
      </a>
    </section>
  )
}

export default Writing
