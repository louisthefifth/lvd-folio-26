import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

const testPartnershipProject = {
  title: 'TEST PARTNERSHIP',
  subtitle: 'testpartnership.com',
  description: 'A professional UI reskin of six game-based cognitive assessments — transforming a casual gaming aesthetic into one that earns trust in enterprise recruitment.',
  externalLink: 'https://www.testpartnership.com',
  challenge: 'Test Partnership\'s MindmetriQ™ assessments look and feel like games — but enterprise hiring teams in finance, law and accountancy needed to see scientific credibility, not entertainment. The challenge: reskin the entire UI without touching gameplay mechanics, deliver a cohesive design system across all six GBAs, and meet WCAG 2.1 AA accessibility standards.',
  results: [
    { value: '6', label: 'GBAs fully redesigned in one consistent system' },
    { value: '100%', label: 'WCAG 2.1 AA compliance achieved' },
    { value: '2', label: 'Themes explored (dark and light) before final direction' }
  ],
  sections: [
    {
      type: 'text',
      title: 'The brief',
      content: [
        'Six game-based assessments (GBAs) used by hiring teams for recruitment — numerical reasoning, verbal reasoning, and logical reasoning tests. The existing UI leant too heavily into casual gaming aesthetics, undermining the scientific credibility that enterprise clients in finance, accountancy, and law required.',
        'The scope covered start pages, instruction screens, transitions, and end screens — a full reskin with no changes to gameplay mechanics or core layouts. The deliverable included high-fidelity mockups, spritemaps, and a lightweight UI design guide to ensure consistency across all six GBAs and supporting materials.'
      ]
    },
    {
      type: 'text',
      title: 'Starting point',
      content: 'The existing product had a distinctly gamified look — heavy colour reliance, playful iconography, and a UI language borrowed from casual mobile games. For enterprise hiring, this created an immediate credibility gap. Hiring managers in professional services needed to trust the science behind the assessment, not be distracted by the interface looking like something you\'d find in an app store.'
    },
    {
      type: 'highlight',
      title: 'Exploration: finding the right direction',
      content: 'The design process began with broad exploration — mood boarding, competitive analysis, and mapping the space between "too casual" and "too corporate". Multiple directions were explored before converging on a solution: starting with black and white wireframes mapped against the existing product, then introducing colour gradually, iterating toward something that felt both serious and approachable.'
    },
    {
      type: 'image-grid',
      columns: 2,
      images: [
        { src: '/images/test-partnership/splash-loaded.png', alt: 'Splash/start screen — light pastel theme, clean and minimal', caption: 'Start screen — the first impression that sets the tone' },
        { src: '/images/test-partnership/instructions-2.png', alt: 'Instructions screen showing game rules', caption: 'Clear instruction screens — critical for candidate confidence' }
      ]
    },
    {
      type: 'highlight',
      title: 'Colour direction: the evolution',
      content: 'Early explorations used heavy colour to differentiate game states. These were gradually reduced — through muted pastels, then through darker, more scientific-feeling palettes — before finally arriving at the light pastel direction. The final direction emerged as the cleanest and most universally appropriate: light, spacious, confident, and immediately legible across the full audience range.'
    },
    {
      type: 'image-pair',
      label1: 'Practice mode',
      image1: { src: '/images/test-partnership/practice-default.png', alt: 'Practice mode — familiarises candidates with the format before real assessment' },
      label2: 'Assessment mode',
      image2: { src: '/images/test-partnership/assessment-default.png', alt: 'Assessment mode — clean, focused, no distractions' }
    },
    {
      type: 'text',
      title: 'Accessibility as a first principle',
      content: [
        'WCAG 2.1 AA compliance was a hard requirement, not an afterthought. The assessments are used by anyone — across age groups, abilities, and contexts. This shaped decisions throughout: sufficient colour contrast ratios, legible typography at all sizes, and never relying on colour alone to convey meaning.',
        'Every screen was reviewed against accessibility criteria during design, not after. This included ensuring interactive elements had clear focus states, text had sufficient contrast against backgrounds, and instruction screens used both text and icons to communicate information.'
      ]
    },
    {
      type: 'text',
      title: 'Building the design system',
      content: 'With six GBAs to redesign in a short project timeline, consistency was non-negotiable. A lightweight UI design guide was delivered alongside the mockups — covering colour palette, typography hierarchy, component styles, and spacing rules. This ensured the six assessments felt like one coherent product family, not six individually designed screens that happened to share a colour.'
    },
    {
      type: 'image',
      src: '/images/test-partnership/finish.png',
      alt: 'End screen — clean completion state with clear next steps',
      caption: 'The end screen — a clear, confident finish that reinforces the professional tone throughout.',
      fullWidth: true
    },
    {
      type: 'text',
      title: 'The outcome',
      content: 'A light pastel design system across all six MindmetriQ™ assessments — clean, accessible, and credible for enterprise recruitment contexts. The redesign preserved all gameplay mechanics and core layouts while completely transforming the visual language. Delivered alongside a lightweight design guide to ensure consistency as the product continues to evolve.'
    }
  ]
}

export default function TestPartnership() {
  return <CaseStudyLayout project={testPartnershipProject} />
}