import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

/**
 * PREVAYL Case Study
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * HOW TO ADD YOUR IMAGES FROM FIGMA
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * 1. EXPORT FROM FIGMA:
 *    - Select your frame/image in Figma
 *    - Right-click → "Export" or use Ctrl/Cmd + Shift + E
 *    - Choose format: PNG for UI screens, JPG for photos, SVG for icons
 *    - Export at 2x for retina displays
 *    - Recommended widths: 1920px for full-width, 1200px for contained
 * 
 * 2. OPTIMIZE YOUR IMAGES:
 *    - Use TinyPNG (tinypng.com) or Squoosh (squoosh.app) to compress
 *    - Aim for < 200KB per image when possible
 *    - Consider WebP format for better compression
 * 
 * 3. ADD TO PROJECT:
 *    - Save images to: /public/images/prevayl/
 *    - Name files descriptively: hero-mockup.png, flow-diagram.png
 *    - Reference in sections as: '/images/prevayl/hero-mockup.png'
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * SECTION TYPES YOU CAN USE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * TEXT SECTION:
 * { type: 'text', title: 'Section Title', content: 'Paragraph...' }
 * { type: 'text', title: 'Title', content: ['Para 1', 'Para 2'] } // Multiple paragraphs
 * 
 * IMAGES:
 * { type: 'image', src: '/images/prevayl/screen.png', alt: 'Description', caption: 'Optional' }
 * { type: 'image', src: '...', alt: '...', fullWidth: true }  // Edge-to-edge
 * { type: 'hero-image', src: '...', alt: '...' }  // Full-bleed with parallax
 * { type: 'image-grid', columns: 2, images: [{src, alt, caption}, ...] }  // 2 or 3 columns
 * { type: 'image-pair', label1: 'Before', image1: {src, alt}, label2: 'After', image2: {src, alt} }
 * { type: 'device-mockup', device: 'phone', src: '...', alt: '...' }  // 'phone' or 'desktop'
 * 
 * VIDEO:
 * { type: 'video', src: '/videos/demo.mp4', caption: 'Optional' }
 * 
 * OTHER:
 * { type: 'quote', text: 'Quote text...', author: 'Name' }
 * { type: 'list', title: 'Title', items: ['Item 1', 'Item 2'] }
 * { type: 'highlight', title: 'Key Point', content: 'Important info...' }
 * { type: 'metrics', title: 'Results', metrics: [{value: '50%', label: 'Increase'}, ...] }
 * { type: 'divider' }  // Horizontal line break
 */

const prevaylProject = {
  // HEADER SECTION - Edit these for the top of your case study

  title: 'PREVAYL',
  subtitle: 'prevayl.com',
  description: 'Leveraging medical-grade tracking analysis and insight for fitness-focused wearble technology.',
  externalLink: 'https://prevayl.com',

  // Hero images - displayed under the description
  // Prevayl: [Full-width hero image showing before/after comparison or key BodyCheck feature]
  heroImagesFullWidth: true,
  heroImages: [
    { src: '/images/prevayl/1. Prevayl homepage.webp', alt: 'Prevayl homepage', style: { maxWidth: '330px' } },
    { src: '/images/prevayl/2. Prevayl workout analysis.webp', alt: 'Prevayl workout analysis', style: { maxWidth: '330px' } },
    { src: '/images/prevayl/3. Prevayl bc steps.webp', alt: 'Prevayl BodyCheck setup', style: { maxWidth: '330px' } }
  ],

  challenge: 'Transform Prevayl from a data dashboard into a personal health coach that provides proactive, contextual guidance.',

  results: [
    { value: '38%', label: 'Increase in daily active users' },
    { value: '56%', label: 'Increase in BodyCheck™ completion' },
    { value: '£450K', label: 'Annual retention value' }
  ],

  // Project metadata
  duration: '6 months',
  team: 'Product Manager, 8 Developers, 2 Data Scientists',
  focus: 'Research synthesis, information architecture, interaction design, data visualisation',

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTENT SECTIONS - Edit these to tell your story
  // ═══════════════════════════════════════════════════════════════════════════

  sections: [
    // --- IMPACT STATEMENT ---
    {
      type: 'highlight',
      title: 'Impact',
      content: 'Increased daily active users by 38% and BodyCheck™ completion rate by 56% through personalised coaching integration, driving £450K in annual retention value.'
    },


    // SECTION 1: THE CHALLENGE

    {
      type: 'text',
      title: 'From data overload to actionable coaching',
      spacingTop: '300px',
      content: 'Prevayl\'s medical-grade sensors captured 4x more accurate data than competitors, but users struggled to translate this into action.'
    },

    {
      type: 'cards',
      columns: 3,
      cards: [
        {
          title: 'Low Feature Engagement',
          content: 'Only 12% of users checked BodyCheck™ daily despite its unique predictive capabilities.'
        },
        {
          title: 'Data Paralysis',
          content: 'Users received 12+ metrics but 68% reported "not knowing what to do with the information".'
        },
        {
          title: 'Missed Coaching Opportunities',
          content: '30,000+ users opened the app daily but left without actionable guidance.'
        }
      ]
    },

    // Existing screen with insights
    {
      type: 'image',
      src: '/images/prevayl/1. Prevayl - Insights overload.webp',
      alt: 'Existing Prevayl insights page showing complex data visualisations',
      style: { maxWidth: '300px', margin: '0 auto' },
    },

    {
      type: 'highlight',
      title: 'Business Impact',
      content: '23% higher churn rate amongst users who didn\'t engage with BodyCheck™. £85/user annual opportunity cost for improved retention.'
    },

    {
      type: 'text',
      content: 'The strategic direction was clear: transform from a data dashboard into a personal health coach that provides proactive, contextual guidance.'
    },



    // --- DISCOVERY & RESEARCH ---

    {
      type: 'text',
      title: 'Understanding the gap between data and action',
      spacingTop: '300px',
      content: 'To understand the disconnect between data and action, I conducted extensive research across multiple user segments.'
    },

    {
      type: 'list',
      title: 'Research methods',
      headerSize: 'md',
      items: [
        '24 user interviews (8 high-engagement, 8 low-engagement, 8 churned users)',
        'Usability testing with 45 participants across 3 age groups',
        'Analytics analysis of 100 user sessions',
        'Competitive analysis of 12 health-tech apps',
      ]
    },

    {
      type: 'text',
      title: 'Research session findings',
      headerSize: 'md',
      content: [
        '68% of users skipped past data visualisations, averaging only 4 seconds viewing time.',
        'Users trusted advice when it explained the \'why\' behind recommendations, even if they didn\'t fully understand the underlying metrics.',
        '78% compliance rate with advice that included reasoning vs 34% for simple directives.',
        'Users who explored BodyCheck™ details were 3.2x more likely to complete it daily.',
        'Click-through rate on "how it works" was 47% amongst daily users vs 8% amongst infrequent users.'
      ]
    },

    {
      type: 'quote',
      text: 'I see all these numbers but I just want someone to tell me: should I work out today or rest?',
      author: 'Interview participant 07'
    },


    // --- INSIGHTS ON DATA ---

    {
      type: 'insight-cards',
      columns: 3,
      cards: [
        {
          insight: 'Users don\'t want to think',
          opportunity: 'Shift from "here\'s your data" to "here\'s what to do next".',
        },
        {
          insight: 'Context matters more than accuracy',
          opportunity: 'Always pair recommendations with context and explanation.',
        },
        {
          insight: 'Progressive disclosure builds trust',
          opportunity: 'Make education accessible but not mandatory.',
        }
      ]
    },



    // --- AREAS FOR REFINEMENT ---

    {
      type: 'text',
      title: 'Existing insights: what needed refinement',
      spacingTop: '300px',
      content: 'A fair amount of work had gone into the existing approach for how users are shown their activity data, however, there were a few elements that needed refining to better serve users.'
    },

    {
      type: 'cards',
      columns: 3,
      cards: [
        {
          title: 'Daily Advice',
          content: 'The intensity icon used within the daily advice module offered little to no context as to what is going on (without having to dig deeper).',
          image: {
            src: '/images/prevayl/3. Prevayl - Data insight 3.webp',
            alt: 'Prevayl data insight 3',
          },
        },
        {
          title: 'Training Zone',
          content: 'The Training Zone chart looked nice, but didn\'t offer any upfront explanation as to what the zones meant.',
          image: {
            src: '/images/prevayl/2. Prevayl - Data insight 2.webp',
            alt: 'Prevayl data insight 2',
          },
        },
        {
          title: 'Overview',
          content: 'Overview was limited to this week vs the previous and offered no way of sorting the data.',
          image: {
            src: '/images/prevayl/1. Prevayl - Data insight 1.webp',
            alt: 'Prevayl data insight 1',
          },
        }
      ]
    },



    // --- BODYCHECK REDESIGN ---

    {
      type: 'text',
      title: 'Redesigning BodyCheck™: from hidden feature to hero',
      spacingTop: '300px',
    },

    {
      type: 'text',
      content: 'A BodyCheck™ is a feature unique to Prevayl that measures your resting heart rate and variability to provide personalised advice, detecting under-recovery and overtraining. This flow shows how users complete a BodyCheck™ for tailored insights, turning data into meaningful and purposeful advice.',
      spacingTop: '16px',
    },

    {
      type: 'image',
      src: '/images/prevayl/1. Prevayl - BodyCheck flow.webp',
      alt: 'BodyCheck flow',
      style: { maxWidth: '1400px', margin: '0 auto' },
      noBorder: true,
      fullWidth: true,
    },

    {
      type: 'cards',
      columns: 3,
      cards: [
        {
          title: 'Option A: Daily advice without BodyCheck™',
          content: 'Simpler flow, one less step. But generic advice with no personalisation. Test Results: 34% found advice "relevant".'
        },
        {
          title: 'Option B: BodyCheck™ required for advice',
          content: 'Personalised recommendations, but added friction with 47-second completion time. Test Results: 67% found advice "highly relevant" but 23% abandoned.'
        },
        {
          title: 'Option C: Progressive BodyCheck™ integration',
          content: 'Balance of personalisation and flexibility, though more complex system logic. Test Results: 78% relevance score, 12% abandonment.'
        }
      ]
    },

    {
      type: 'highlight',
      title: 'Decision: Option C – Progressive Integration',
      content: 'Higher abandonment from Option B would offset personalisation benefits. Option C maintains engagement while building toward personalised coaching.'
    },

    {
      type: 'list',
      title: 'Implementation',
      headerSize: 'sm',
      items: [
        'Push notification at optimal time (data-driven)',
        'BodyCheck™ front-loaded in app on open',
        'Results immediately actionable',
        'Optional deep-dive for engaged users'
      ]
    },

    // BodyCheck examples

    {
      type: 'text',
      title: 'Encouraging users to do a BodyCheck™',
      headerSize: 'sm',
      content: 'Now instead of daily advice, the BodyCheck™ was the first thing users saw upon opening the app, supported by a push notification.'
    },
    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {
          src: '/images/prevayl/1. Prevayl - Push notif for BC.webp',
          alt: 'BodyCheck push notification 1',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/2. Prevayl - Push notif for BC.webp',
          alt: 'BodyCheck push notification 2',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]
    },



    // BodyCheck results

    {
      type: 'text',
      title: 'BodyCheck™ results',
      headerSize: 'sm',
      content: 'If they had already done one for the day, they would be greeted with their results, which would neatly guide them to their tailored advice.'
    },
    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {
          src: '/images/prevayl/1. Prevayl - Push notif BC results.webp',
          alt: 'BodyCheck results push notification 1',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/2. Prevayl - Push notif BC results.webp',
          alt: 'BodyCheck results push notification 2',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]
    },


    // BodyCheck explained

    {
      type: 'text',
      title: 'BodyCheck™ Explained',
      headerSize: 'sm',
      content: 'There was a lot happening for a BodyCheck™ to work, so I created a way for users to explore what it was and why it mattered, which they could explored if they wanted to.'
    },

    // BodyCheck explanation screens
    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/1. Prevayl - BC explained.webp',
          alt: 'BodyCheck explanation screen 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/2. Prevayl - BC explained.webp',
          alt: 'BodyCheck explanation screen 2',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/3. Prevayl - BC explained.webp',
          alt: 'BodyCheck explanation screen 3',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // --- TRAINING ZONES ---

    {
      type: 'text',
      title: 'Making Training Zones understandable',
      spacingTop: '300px',
    },

    {
      type: 'text',
      content: 'Training Zones are heart rate ranges shown in the Prevayl app that help you understand how hard your body is working during exercise. They break your effort into simple levels, from light recovery to very hard intensity, so you can train smarter, recover better, and see how effective your workouts are.',
      spacingTop: '16px',
    },

    // Prevayl: [Before - training zone chart without context]

    {
      type: 'text',
      title: 'Before',
      headerSize: 'sm',
      content: 'The Training Zone chart looked good but did not explain what the zones meant. After reviewing it internally and speaking to users, I focused on adding clear context so people could understand why the zones matter and how to use them.',
    },

    {
      type: 'image',
      src: '/images/prevayl/1. Prevayl - TZ before.webp',
      alt: 'Training zone chart before - lacking context',
      style: { maxWidth: '300px', margin: '0 auto' },
    },

    // Prevayl: [After - training zone with duration table]

    {
      type: 'text',
      title: 'After',
      headerSize: 'sm',
      content: 'Showing this week\’s data with a clear breakdown of time spent in each zone helped users see exactly what was happening. They could also tap the information icon to understand what Training Zones are and how they work.'
    },

    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {          
          src: '/images/prevayl/2. Prevayl - TZ after.webp',
          alt: 'Training zone chart after redesign - with duration table',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/3. Prevayl - TZ dive.webp',
          alt: 'Training Zone deeper dive',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]

    },

    // Prevayl: [After - training zone deeper dive]

    {
      type: 'text',
      title: 'Deep dive option',
      headerSize: 'sm',
      content: 'In addition to seeing Training Zone information at a surface level, the user could dive even deeper into how they worked.'
    },

    // Prevayl: [Training zone explanation modal/screen]
    {
      type: 'image',
      src: '/images/prevayl/4. Prevayl - TZ deep dive.webp',
      alt: 'Training zone deeper dive',
      style: { maxWidth: '300px', margin: '0 auto' },
    },

    
    // --- TAILORED ADVICE ---
    

    {
      type: 'text',
      title: 'Tailored advice',
      spacingTop: '300px',
      content: 'Tailored advice was an opportunity for Prevayl to communicate with the user just like a personal trainer or coach, monitoring your progress and making specific recommendations based on your data.'
    },

    // Prevayl: [4-6 images showing different coaching advice states/scenarios]
    {
      type: 'image-grid',
      title: 'The coach approach',
      spacingTop: '32px',
      headerSize: 'sm',
      content: 'Intensity of workouts was a key aspect of the app and something that was of keen focus for the coaching element. I created set of modules that advised the user what to do at that moment in time.',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/1. Prevayl - Branded coach card.webp',
          alt: 'Branded coach - rest',
          style: { maxWidth: '270px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/prevayl/2. Prevayl - Branded coach card.webp',
          alt: 'Branded coach - listen to your body',
          style: { maxWidth: '270px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/prevayl/3. Prevayl - Branded coach card.webp',
          alt: 'Branded coach - BodyCheck reminder',
          style: { maxWidth: '270px', margin: '0 auto' },
          noBorder: true,
        }
      ]
    },

    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/coaching-state-4.webp',
          alt: 'Coaching advice - recovery needed',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/coaching-state-5.webp',
          alt: 'Coaching advice - peak performance',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/coaching-state-6.webp',
          alt: 'Coaching advice - moderate workout',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // --- Tailored Advice ---

    {
      type: 'text',
      title: 'Independent Tailored Advice',
      headerSize: 'sm',
      content: [
        'Following user feedback, they wanted tailored advice without needing to complete a BodyCheck™. I redesigned the module to provide standalone tailored advice, which could be enhanced with BodyCheck™ data if available.',
        'I also shifted from red to blue for \'rest\' as red came across as negative.'
      ]
    },

    // Prevayl: [Before/after colour change, standalone advice screens]
    {
      type: 'image-pair',
      label1: 'Before',
      image1: {
        src: '/images/prevayl/advice-colour-before.webp',
        alt: 'Rest advice with red colour - before'
      },
      label2: 'After',
      image2: {
        src: '/images/prevayl/advice-colour-after.webp',
        alt: 'Rest advice with blue colour - after'
      }
    },

    // --- Revealing How Tailored Advice Works ---

    {
      type: 'text',
      title: 'Revealing How Tailored Advice Works',
      headerSize: 'sm',
      content: 'Some users wanted to understand the process behind tailored advice at Prevayl, so I designed screens that explain how it works.'
    },

    // Prevayl: [How it works explanation screens]
    {
      type: 'image-grid',
      columns: 2,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/advice-explained-1.webp',
          alt: 'How tailored advice works - step 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/advice-explained-2.webp',
          alt: 'How tailored advice works - step 2',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: ANALYSIS & OVERVIEW
    // ═══════════════════════════════════════════════════════════════════════════

    {
      type: 'text',
      title: 'Empowering Users to Analyse Their Performance',
      spacingTop: '300px',
      content: 'Another focus area for me with Prevayl was around allowing users to look at past data, in a way where they had the freedom and flexibility to scan performance.'
    },

    {
      type: 'text',
      title: 'What to Show and How',
      headerSize: 'sm',
      content: 'Prevayl could track a lot, but I wanted to avoid showing data just for the sake of it. To ensure effectiveness, I mapped out what was technically feasible and valuable for users.'
    },

    // Prevayl: [Data planning/mapping document or diagram]
    {
      type: 'image',
      src: '/images/prevayl/data-mapping.webp',
      alt: 'Data planning and mapping document',
      style: { maxWidth: '800px', margin: '0 auto' },
      fullWidth: true,
    },

    // --- Overview Update ---

    {
      type: 'text',
      title: 'Overview Update',
      headerSize: 'sm',
    },

    {
      type: 'text',
      title: 'Before',
      headerSize: 'sm',
      content: 'The original overview provided various metrics but lacked flexibility and didn\'t offer much value for users\' workouts.'
    },

    {
      type: 'text',
      title: 'After',
      headerSize: 'sm',
      content: 'Based on user feedback, I compiled a robust set of overview metrics that provided just enough information to be scannable. I also included a control to view these metrics daily, weekly, monthly and all time.'
    },

    // Prevayl: [Before/after overview screens]
    {
      type: 'image-pair',
      label1: 'Before',
      image1: {
        src: '/images/prevayl/overview-before.webp',
        alt: 'Overview section before redesign'
      },
      label2: 'After',
      image2: {
        src: '/images/prevayl/overview-after.webp',
        alt: 'Overview section after redesign'
      }
    },

    // --- Visually Led Analysis ---

    {
      type: 'text',
      title: 'Visually Led Analysis',
      headerSize: 'sm',
      content: 'I designed a series of clean, visually appealing charts that allowed users to easily scan information and dive deeper if desired.'
    },

    // Prevayl: [Chart examples]
    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/chart-example-1.webp',
          alt: 'Performance chart example 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/chart-example-2.webp',
          alt: 'Performance chart example 2',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/chart-example-3.webp',
          alt: 'Performance chart example 3',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // --- Comparison Metrics ---

    {
      type: 'text',
      title: 'Enabling Users to Create Their Own Comparison Metrics',
      headerSize: 'sm',
      content: 'Users could delve deeper into their analysis by viewing specific metrics with additional information, such as workout intensity, and by making comparisons to extract the most useful insights.'
    },

    // Prevayl: [Comparison feature screens]
    {
      type: 'image-grid',
      columns: 2,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/comparison-1.webp',
          alt: 'Comparison metrics feature - selecting metrics',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/comparison-2.webp',
          alt: 'Comparison metrics feature - viewing results',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: MOTIVATION DESIGN
    // ═══════════════════════════════════════════════════════════════════════════

    {
      type: 'text',
      title: 'Motivation Design: Making Daily Engagement Rewarding',
      spacingTop: '300px',
      content: 'Inspired by behavioural psychology frameworks, I designed engagement loops that make health tracking feel rewarding rather than obligatory.'
    },

    {
      type: 'cards',
      columns: 3,
      cards: [
        {
          title: 'Development & Accomplishment',
          content: 'Training Zone progression tracker. Users see improvement over time. Impact: 43% increase in weekly engagement.'
        },
        {
          title: 'Social Influence & Relatedness',
          content: 'Community benchmarking ("You\'re in the top 25% for recovery"). Healthy competition without comparison pressure. Impact: 28% increase in BodyCheck™ completion.'
        },
        {
          title: 'Unpredictability & Curiosity',
          content: 'Adaptive insights ("Your recovery pattern has changed"). Creates anticipation for daily check-ins. Impact: 31% reduction in day-to-day drop-off.'
        }
      ]
    },

    // Prevayl: [Features showing these motivation elements]
    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/prevayl/motivation-accomplishment.webp',
          alt: 'Motivation feature - progression tracker',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/motivation-social.webp',
          alt: 'Motivation feature - community benchmarking',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/prevayl/motivation-curiosity.webp',
          alt: 'Motivation feature - adaptive insights',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 9: RESULTS & IMPACT
    // ═══════════════════════════════════════════════════════════════════════════

    {
      type: 'text',
      title: 'Results: Transforming Engagement and Retention',
      spacingTop: '300px',
    },

    {
      type: 'metrics',
      title: 'Primary Metrics',
      metrics: [
        { value: '38%', label: 'Increase in daily active users (from 23K to 31.7K)' },
        { value: '56%', label: 'Increase in BodyCheck™ completion rate (12% to 68%)' },
        { value: '41%', label: 'Improvement in training zone engagement' }
      ]
    },

    {
      type: 'metrics',
      title: 'Supporting Metrics',
      metrics: [
        { value: '£450K', label: 'Annual retention value (based on reduced churn)' },
        { value: '28%', label: 'Reduction in support tickets related to data confusion' },
        { value: '3.9 → 4.6', label: 'App Store rating improvement' },
        { value: '+19', label: 'NPS improvement (points)' }
      ]
    },

    {
      type: 'quote',
      text: 'I finally feel like I have a coach, not just a tracker.',
      author: 'User feedback (representative of 73% positive sentiment)'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 10: LEARNINGS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      type: 'text',
      title: 'What I Learned',
      spacingTop: '300px',
    },

    // --- Learning 1 ---
    {
      type: 'text',
      title: '1. Progressive Disclosure is Essential for Complex Data',
      headerSize: 'sm',
      content: [
        'Challenge: Medical-grade data is inherently complex.',
        'Insight: Users need different depths at different times.',
        'Application: Layered information architecture with clear entry points.',
        'Future Application: Will always prototype 3 depth levels for data products.'
      ]
    },

    // --- Learning 2 ---
    {
      type: 'text',
      title: '2. Behaviour Change Requires More Than Good Design',
      headerSize: 'sm',
      content: [
        'Challenge: Initial designs were clear but didn\'t change habits.',
        'Insight: Motivation design must be intentional, not accidental.',
        'Application: Applied Octalysis framework systematically.',
        'Future Application: Will incorporate behavioural frameworks from project start.'
      ]
    },

    // --- Learning 3 ---
    {
      type: 'text',
      title: '3. Research Must Inform, Not Just Validate',
      headerSize: 'sm',
      content: [
        'Mistake: Early iterations tested designs rather than exploring problems.',
        'Pivot: Shifted to problem-focused research first.',
        'Result: Uncovered the "action gap" insight that shaped everything.',
        'Takeaway: Always start with exploratory research before solutions.'
      ]
    },

    // --- Learning 4 ---
    {
      type: 'text',
      title: '4. Cross-Functional Collaboration Multiplies Impact',
      headerSize: 'sm',
      content: [
        'Success: Close work with data scientists revealed new possibilities.',
        'Example: They could predict optimal BodyCheck™ timing (improving completion by 23%).',
        'Takeaway: Early technical collaboration unlocks options pure design can\'t access.'
      ]
    },

    // --- If I Could Do It Again ---
    {
      type: 'highlight',
      title: 'If I Could Do It Again',
      content: [
        'I would have introduced A/B testing earlier in the process. While usability testing validated designs, we didn\'t test behavioural impact until full launch. Running micro-experiments on key features (like BodyCheck™ placement) could have accelerated learning by 3–4 weeks.',
        'I\'m now implementing staged rollout strategies on current projects to test high-risk assumptions faster.'
      ]
    },
  ]
}

export default function Prevayl() {
  return <CaseStudyLayout project={prevaylProject} />
}
