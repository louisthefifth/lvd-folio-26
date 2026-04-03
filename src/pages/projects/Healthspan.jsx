import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

const healthspanProject = {
  title: 'HEALTHSPAN',
  subtitle: 'healthspan.co.uk',
  description: "A deep UX audit and content strategy for the UK's largest mail-order supplements brand — uncovering what was stopping casual visitors from becoming loyal customers.",
  externalLink: 'https://www.healthspan.co.uk',
  challenge: '1. Audit and evaluate the current site to identify audience pain points and disengagement areas. 2. Identify and demonstrate quick wins and longer-term improvements across navigation, language, imagery and key landing pages.',
  results: [
    { value: '15%', label: 'Rise in converting casual browsers into repeat customers' },
    { value: '1', label: 'Comprehensive recommendations guide integrated into roadmap' },
    { value: '4', label: 'Distinct audience personas defined and mapped' }
  ],
  sections: [
    {
      type: 'text',
      title: 'Role & setup',
      content: 'UX Consultant — working directly with Healthspan as a solo consultant.'
    },
    {
      type: 'metrics',
      title: 'What makes customers tick',
      metrics: [
        { value: '53%', label: 'Want to make specific health improvements' },
        { value: '24%', label: 'Experience diet deficiencies' },
        { value: '13%', label: 'Want to improve mental wellbeing' },
        { value: '10%', label: 'See supplements recommended on TV or media' }
      ]
    },
    {
      type: 'text',
      title: 'Understanding triggers',
      content: 'Used a research agency to gather test participants actively managing their health. A survey identified the primary triggers driving visits and purchases — the starting point for every recommendation that followed.'
    },
    {
      type: 'text',
      title: 'Journey to product selection',
      content: 'Analysed a combination of web traffic and email clickthroughs to identify the top entry points (landing pages) and understand user sentiment around navigating the site.'
    },
    {
      type: 'highlight',
      title: 'Defining the audience',
      content: "Buying vitamins and supplements spans a wide audience, but clear engagement levels exist. Defined a core segment: 'Health Conscious Realists' — split into two types. Minimisers: just want a quick solution, other things to worry about. Maintainers: proactive and genuinely interested in bettering their health. Personas Fred & Ella were created to represent each type and kept every recommendation grounded."
    },
    {
      type: 'text',
      title: 'Navigation review',
      content: 'Navigation was the biggest sticking point. Conducted a thorough review and mapped out the site structure, highlighting specific focus areas. Page design reviews were deliberately kept basic — wireframe-level — to keep attention on function and flow, not aesthetics.'
    },
    {
      type: 'highlight',
      title: 'Focusing on True Believers',
      content: "Research indicated that nudging customers toward 'True Believer' behaviour was the highest-leverage opportunity. True Believers are Healthspan's most loyal customers — more likely to recommend the brand than any metric achievable through traditional conversion tactics. Annotated existing product pages with specific, practical changes to encourage this shift."
    }
  ]
}

export default function Healthspan() {
  return <CaseStudyLayout project={healthspanProject} />
}
