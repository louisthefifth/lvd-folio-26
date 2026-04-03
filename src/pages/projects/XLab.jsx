import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

const xlabProject = {
  title: 'X-LAB SYSTEMS',
  subtitle: 'x-labsystems.com',
  description: 'Electronic lab test requesting — taken from a few internal presentation slides to a functional MVP serving occupational health practitioners across the UK.',
  externalLink: 'https://x-labsystems.com',
  challenge: 'Transform an internal presentation into a functional MVP enabling occupational health practitioners to order lab tests, review results, and search for patients — with a pilot phase goal and a long-term aim of nationwide UK rollout.',
  results: [
    { value: '10', label: 'Pilot users secured across healthcare institutions' },
    { value: '15 min', label: 'Reduction in manual test order time' },
    { value: '100%', label: 'Elimination of manual request errors' }
  ],
  sections: [
    {
      type: 'text',
      title: 'Role & setup',
      content: 'Freelance Senior Product Designer — solo designer, working in close collaboration with a Product Manager, Developers and Healthtech specialists.'
    },
    {
      type: 'metrics',
      title: 'The scale of the problem',
      metrics: [
        { value: '4.4%', label: 'Diagnostic errors occurring in all consultations' },
        { value: '~52 min', label: 'Average time spent on manual test request forms' },
        { value: '37%', label: 'Of UK test requests contained patient misidentification' }
      ]
    },
    {
      type: 'text',
      title: 'What is the problem exactly?',
      content: 'Electronic lab testing requests in the UK were limited to hospitals and general practices only. Occupational health — covering everything from sports team physicians to remote organisation clinicians — was excluded entirely, forced to rely on paper-based requests. The result: inefficient, error-prone, and at times unsafe processes. (Source: Cheraghi-Sohi et al., 2018, 2021; Litchfield et al., 2015)'
    },
    {
      type: 'highlight',
      title: 'Mapping the flow before building it',
      content: 'Started by mapping the test ordering flow with technical considerations in collaboration with the PM and Engineering Lead — ensuring designs would be robust enough to accommodate future changes. The goal was to balance user input with automation: enough friction to prompt confidence, not so much as to slow practitioners down.'
    },
    {
      type: 'text',
      title: 'Fine-tuning the flow',
      content: [
        'After testing various prototypes internally and externally, two critical steps were found to be missing.',
        '1. Order date — allowing tests to be requested immediately or scheduled for a future date, specified right at the start of the process.',
        '2. Clinical details — an additional information layer to help prevent errors between the requester and the testing lab.'
      ]
    },
    {
      type: 'text',
      title: 'Selecting tests',
      content: 'Test selection went through several iterations — from simple search, to grouping tests by type (e.g. full blood count with associated specimen details). The final approach subtly combined both: select a test, then specify specimen types if needed. Clean and unambiguous.'
    },
    {
      type: 'text',
      title: 'Specimen details & order summary',
      content: 'The specimen step was critical for accuracy: type and associated tests carried over from the selection step, with options to generate a barcode, view required container type (colour-coded), and set collection time. A summary step before submission verified all details — nothing overlooked, nothing assumed.'
    },
    {
      type: 'text',
      title: 'Viewing patients & orders',
      content: 'Early designs had separate "home" and "orders" sections. Testing revealed this was unnecessary friction. Replaced with a single, powerful search view with order filtering — one place for everything.'
    },
    {
      type: 'highlight',
      title: 'Reviewing test results — the colour problem',
      content: 'Original design used colour to indicate good vs bad results. User testing flagged this immediately: a result "above range" is not always a bad thing. Results were redesigned to appear neutral — analytical, not editorial. A legal requirement also meant requesters had to formally acknowledge results, triggering an internal record auditable by both parties.'
    }
  ]
}

export default function XLab() {
  return <CaseStudyLayout project={xlabProject} />
}
