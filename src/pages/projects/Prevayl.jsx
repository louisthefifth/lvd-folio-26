import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

const prevaylProject = {
  title: 'PREVAYL',
  subtitle: 'prevayl.com',
  description: 'In a relatively saturated consumer health-tech market, Prevayl had a significant advantage — medical-grade sensors delivering 4x more accurate tracking than anything else on the market.',
  externalLink: 'https://www.prevayl.com/smartwear',
  challenge: 'Communicate rich biometric data back to users in a way that is genuinely insightful and valuable — and encourage adoption of BodyCheck™, a unique feature providing personalised training advice based on resting heart rate and variability.',
  results: [
    { value: '12%', label: 'Increase in user engagement' },
    { value: '+5 min', label: 'Average session length increase' },
    { value: '4 → 4.8', label: 'App Store rating improvement' }
  ],
  sections: [
    {
      type: 'text',
      title: 'Role & setup',
      content: 'Freelance Senior Product Designer, working alongside another Senior Product Designer in collaboration with the Product Manager, Developers and Data Scientists.'
    },
    {
      type: 'text',
      title: 'The existing problems',
      content: [
        'The existing insights page had three specific issues that needed resolving.',
        'Training Zone: the chart looked visually appealing but offered no explanation of what the zones meant — users were left guessing.',
        'Daily Advice: the intensity icon provided little to no context without digging deeper into the app.',
        'Overview: limited to this week vs the previous week, with no ability to sort or filter data.'
      ]
    },
    {
      type: 'highlight',
      title: 'Giving users the "why" with Training Zone',
      content: 'Before: the Training Zone chart looked nice but zones were unexplained. After: added a duration-per-zone table showing exactly how long users spent in each zone, plus a deeper info panel accessible via an icon — explaining what training zones are and how they work.'
    },
    {
      type: 'text',
      title: 'Exploring Daily Advice',
      content: [
        'Daily Advice underwent multiple iterations. A button CTA, a weekly plan, a workout intensity variant — none of them resonated with users in testing.',
        "Rather than force a feature that wasn't working, the decision was made to pivot entirely to BodyCheck™ — a more meaningful and technically differentiated feature."
      ]
    },
    {
      type: 'highlight',
      title: 'Incorporating BodyCheck™',
      content: "A BodyCheck™ measures resting heart rate and variability to detect under-recovery and overtraining, providing genuinely personalised advice. Instead of daily advice, BodyCheck™ became the first thing users saw on opening the app — supported by a push notification. If already completed that day, users were greeted with their results and guided straight to tailored advice."
    },
    {
      type: 'text',
      title: 'Tailored advice',
      content: [
        'Tailored advice was an opportunity to communicate with users like a personal trainer — monitoring progress and making specific recommendations based on their data.',
        "Following user feedback, the module was redesigned to provide standalone tailored advice without needing a BodyCheck™ first, with BodyCheck™ data enhancing it when available.",
        'One detail that mattered: the rest indicator colour was changed from red to blue. Red felt negative — rest is not a bad thing.'
      ]
    },
    {
      type: 'text',
      title: 'Enabling users to scan their performance',
      content: [
        'A key focus was allowing users to look at past data with freedom and flexibility — without drowning them in numbers.',
        "Mapped what to show vs what to withhold (avoiding data for data's sake). Added daily/weekly/monthly/all-time toggle controls. Designed clean, visually scannable charts with the ability to dive deeper into specific metrics. Users could also create their own comparison metrics for more advanced analysis."
      ]
    }
  ]
}

export default function Prevayl() {
  return <CaseStudyLayout project={prevaylProject} />
}
