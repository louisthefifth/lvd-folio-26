import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

const tescoProject = {
  title: 'TESCO',
  subtitle: 'tesco.com',
  description: "Standardising design across one of the UK's largest retailers — 25 million monthly digital visitors, dozens of isolated teams, and years of accumulated inconsistency.",
  externalLink: 'https://www.tesco.com',
  challenge: 'Standardise design output to improve existing and future product quality, eliminate inconsistency across sites and apps, and unite teams that had previously worked on design in complete isolation.',
  results: [
    { value: '100%', label: 'Design consistency achieved across the company' },
    { value: '↓', label: 'Reduction in customer service queries post-unification' },
    { value: '1', label: 'Design tool adopted company-wide — Figma' }
  ],
  sections: [
    {
      type: 'text',
      title: 'Role & setup',
      content: 'Product Designer — part of a small cross-departmental team with one other designer and two developers. Responsible for ensuring the system was easy to use and properly documented for all teams.'
    },
    {
      type: 'highlight',
      title: 'Consistently inconsistent',
      content: 'Customers had been consistently reporting that they struggle doing things differently on each Tesco site and app — they see Tesco as "just one place". The reality inside was very different: Groceries used Axure, F&F used Sketch, Bank was in Figma, Recipes in Axure, Photo in Sketch, Magazine in Figma, Internal tooling in Storybook. No shared language. No shared components. No shared ownership.'
    },
    {
      type: 'text',
      title: 'Mapping what existed',
      content: 'Audited all Tesco digital properties — sites and apps — to establish which had a style guide or design system, which tool it lived in, and which team owned it. This audit made the scale of the problem visible and provided the evidence needed to make the case for change.'
    },
    {
      type: 'text',
      title: 'Bringing everyone together',
      content: "While the project was led by the UX web and app team, findings were presented back to every team affected. Their concerns, workflows and reservations were incorporated into the framework — ensuring this wasn't a top-down vanity project but something teams would actually adopt and maintain."
    },
    {
      type: 'highlight',
      title: 'The outcome',
      content: 'Collectively agreed to adopt Figma as the single design tool across all teams — chosen for its cloud-based collaboration. Pure branding assets (logo creation, etc.) remained Adobe-specific. Instead of creating a Figma page per site, 6 key library areas were established, covering everything needed for consistent design across all of Tesco.'
    },
    {
      type: 'text',
      title: 'The platform',
      content: 'The new design system was accessible via a single shared link — eliminating the classic enterprise headache of requesting access to individual platforms. Content was discipline-agnostic: design guidance, developer implementation notes, marketing and content practices all in one place. A sandbox and live interaction mode allowed users to test components directly, keeping the system alive rather than just documented.'
    }
  ]
}

export default function Tesco() {
  return <CaseStudyLayout project={tescoProject} />
}
