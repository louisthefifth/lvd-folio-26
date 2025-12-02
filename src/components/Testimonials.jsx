const testimonials = [
  {
    quote:
      'It was an absolute pleasure having Louis in my team. He stood up for quality and demonstrated a passion for great design and understanding of the UX craft.',
    author: 'Jasper Law',
    role: 'Senior Product Manager, Carv'
  },
  {
    quote:
      'Louis is an expert, highly accessible, and friendly. His enthusiasm when devising tactics and delivering outcomes is infectious. I would endorse Louis to any prospective clients seeking outstanding work.',
    author: 'Ed Fairman',
    role: 'Lead Product Designer, Financial Times'
  },
  {
    quote:
      "I enjoyed working with Louis and appreciated his focus and drive in developing a re-brand for an ambitious new mobile app. He's a true strategic thinker who really gets the business problems his clients are facing.",
    author: 'Franziska Kirschner',
    role: 'Head of AI & Product, Tractable'
  },
  {
    quote:
      'Louis is the kind of professional you’d want on any team; he’s dedicated, willing to learn, and very easy to get along with. One of the best designers I had the pleasure to work with.',
    author: 'Alex Carvalho',
    role: 'Creative Director, Brandwidth'
  },
  {
    quote:
      'Louis revolutionised our product in a very short space of time. Quite simply one of the best designers I have worked with in a very long time.',
    author: 'Richard Kent',
    role: 'Chief Technology Officer, TAINA Technology'
  },
  {
    quote:
      'Louis demonstrates remarkable professionalism. His collaborative attitude and communication skills played a crucial role in elevating our products and bringing them to market.',
    author: 'Daniel Sawko',
    role: 'CEO & Co-Founder, shipshape.vc'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-24">
      <div className="space-y-5 mb-10">
        <p className="section-label">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
          Partners say nice things.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
          A few words from the people I’ve collaborated with while crafting or scaling products.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-2xl border border-gray-800 bg-[#161616] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-white">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

