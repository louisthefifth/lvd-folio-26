import CaseStudyLayout from '../../components/CaseStudy/CaseStudyLayout'

/**
 * CARV Case Study
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
 *    - Save images to: /public/images/carv/
 *    - Name files descriptively: hero-mockup.png, flow-diagram.png
 *    - Reference in sections as: '/images/carv/hero-mockup.png'
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
 * { type: 'image', src: '/images/carv/screen.png', alt: 'Description', caption: 'Optional' }
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

const carvProject = {
  // ═══════════════════════════════════════════════════════════════════════════
  // HEADER SECTION - Edit these for the top of your case study
  // ═══════════════════════════════════════════════════════════════════════════

  title: 'CARV',
  subtitle: 'getcarv.com',
  description: 'A digital ski coach that analyses your technique and guides with you live-audio as you ski.',
  externalLink: 'https://getcarv.com',
  challenge: 'Come up with ways to engage with skiers beyond skiing AKA \'off-snow\'. Also, work out ways to encourage, reward and give them purpose when using the app.',

  // Hero image - appears at the top with parallax effect
  // Export a wide, impactful image from Figma (recommended: 1920x1080 or wider)
  // Uncomment when you have your hero image ready:
  // heroImage: {
  //   src: '/images/carv/hero.png',
  //   alt: 'CARV app interface showing skiing metrics and achievements'
  // },

  // Outcome summary - appears at the bottom before footer
  outcome: 'The redesign and feature enhancements for Carv led to a 25% increase in user engagement and a 30% rise in user retention. The inclusion of achievement badges and celebration cards motivated users and increased interaction with the app. This project successfully enhanced the overall user experience, driving both engagement and long-term retention.',

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTENT SECTIONS - Edit these to tell your story
  // ═══════════════════════════════════════════════════════════════════════════

  sections: [
    // --- KEY SCREENS (Final designs) ---
    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/carv/1. Carv homepage.png',
          alt: 'CARV app homepage showing skiing metrics',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv focus.png',
          alt: 'CARV focus mode interface',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv end of day.png',
          alt: 'CARV end of day summary',
          style: { maxWidth: '300px', margin: '0 auto' },
        }
      ]
    },

    // --- SPEAKING WITH SKIERS ---

    {
      type: 'text',
      title: 'Speaking with skiers',
      content: 'As I am not a skier, I started by immersing myself in as much insight and analysis I could get my hands on. Fortunately, there was highly-engaged Facebook group of early adopters and active users. The information combined together made for a robust set which I used to form distill insights and define opportunities.'
    },

    {
      type: 'insight-cards',
      cards: [
        {
          insight: 'Skiers would like to see as much context as possible while progressing and improving.',
          opportunity: 'Provide context and feedback as to why the skier can see what they see on screen and what they can do next.'
        },
        {
          insight: 'Carv is seen as a fun toy, but just how powerful is it?',
          opportunity: 'Play the ski day back to the skier and allow them to drill into the rich information captured.'
        },
        {
          insight: 'Skiers don\'t always know what what they need to improve or how they go about improving.',
          opportunity: 'Present smart guides and tools to progress at key moments leveraging usage data.'
        },
        {
          insight: '\'Progression plateau\' is the #1 reason skiers disengage.',
          opportunity: 'Introduce achievements and accolades, without demoralising skiers at any point.'
        }
      ]
    },

    // --- FINDING OPPORTUNITIES ---

    {
      type: 'text',
      title: 'Finding opportunities in a ski day',
      content: 'For most skiers, a day on the slopes tends to be fairly formulaic. In order to pinpoint where I could inject value and engagement outside of physically skiing, I mapped out a day and drilled down into what we could explore or be included.'
    },

    {
      type: 'journey-table',
      columns: [
        { label: 'JOURNEY', value: '' },
        { label: 'Preparation', value: '' },
        { label: 'Skiing (AM)', value: '' },
        { label: 'Break\n(lunch etc.)', value: '' },
        { label: 'Skiing (PM)', value: '' },
        { label: 'End of day\n(on snow)', value: '' },
        { label: 'End of day\n(off snow)', value: '' }
      ],
      rows: [
        {
          label: 'ACTION',
          cells: [
            'Calibrates carv to check that everything is working.',
            'Selects mode to ski with & starts tracking runs.',
            'Checks current progress.',
            'Selects mode to ski with & starts tracking runs.',
            'Stops recording runs.',
            'Reviews progress from the day.'
          ]
        },
        {
          label: 'OPPORTUNITY',
          cells: [
            'Surface a challenge based on preference or past usage.',
            '–',
            'Present tailored suggestions based on AM skiing.',
            '–',
            'Day activity review, with drill-down into specifics option.',
            'Surface achievements and accolades.'
          ]
        }
      ]
    },

    {
      type: 'divider'
    },

    // --- ADDING VALUE ---

    {
      type: 'text',
      title: 'Adding value by challenging skiers',
      content: 'Buying the Carv gear is an investment in your skiing, so naturally, you\'re going to want to get what you pay for it. To add value from the start, I introduced an option for skiers to accept a challenge we would set to them, either based on their usage or preferences.'
    },
    // One specific challenge screens
    {
      type: 'image-grid',
      columns: 3,
      gap: -2,
      content: 'One specific challenge',
      images: [
        {
          src: '/images/carv/1a. Carv - One specific challenge.png',
          alt: 'CARV app homepage showing skiing metrics',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/1b. Carv - One specific challenge.png',
          alt: 'CARV focus mode interface',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/1c. Carv - One specific challenge.png',
          alt: 'CARV end of day summary',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // Multiple challenge screens
    {
      type: 'image-grid',
      columns: 3,
      gap: -2,
      content: 'Multiple challenges',
      images: [
        {
          src: '/images/carv/2a. Carv - Multiple challenges.png',
          alt: 'CARV app homepage showing skiing metrics',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2b. Carv - Multiple challenges.png',
          alt: 'CARV focus mode interface',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2c. Carv - Multiple challenges.png',
          alt: 'CARV end of day summary',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // Recommended challenge screens
    {
      type: 'image-grid',
      columns: 3,
      gap: -2,
      content: 'Recommended challenges',
      images: [
        {
          src: '/images/carv/3a. Carv - Recommended challenge.png',
          alt: 'CARV app homepage showing skiing metrics',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3b. Carv - Recommended challenge.png',
          alt: 'CARV focus mode interface',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3c. Carv - Recommended challenge.png',
          alt: 'CARV end of day summary',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // The solution
    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      content: 'Solution',
      headerSize: 'md',
      description: 'The final solution incorporated aspects from previous iterations to form a complete experience that gave skiers a push, but wasn\'t forceful.',
      images: [
        {
          src: '/images/carv/1. Carv - Challenge Solution.png',
          alt: 'Carv solution - Ready to ski screen',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Challenge Solution.webp',
          alt: 'Carv solution - Select a challenge screen',
          style: { maxWidth: '270px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/carv/3. Carv - Challenge Solution.png',
          alt: 'Carv solution - Start recording screen',
          style: { maxWidth: '270px', margin: '0 auto' },
        }
      ]
    },

    // --- SERVING RECOMMENDATIONS ---

    {
      type: 'text',
      title: 'Serving skiers recommendations',
      content: 'Unlike a ski coach, the Carv app was with you all the time. Which meant we were able to serve skiers recommendations at any point during their ski day. The recommendations were designed to show just enough information to pique interest, while allowing for the skier to delve further e.g. watching tutorial videos, if they wanted to.'
    },

    {
      type: 'video',
      src: '/videos/carv/Carv - Serving skiers recommendations.webm',
      style: { maxWidth: '300px', margin: '0 auto' },
      cropTop: 2,
    },

    {
      type: 'text',
      content: 'The recommendations were designed to show just enough information to pique interest, while allowing for the skier to delve further e.g. watching tutorial videos, if they wanted to.',
    },

    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {
          src: '/images/carv/1. Carv - Recommendations.webp',
          alt: 'Carv solution - Ready to ski screen',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Recommendations.webp',
          alt: 'Carv solution - Select a challenge screen',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },

    // --- ENHANCING THE END OF DAY ---

    {
      type: 'text',
      title: 'Enhancing the end of the ski day',
      content: 'The end of the ski day provided the perfect opportunity to not only allow the skier to review their day, but also capture their sentiment, which would help us serve relevant improvement suggestions.'
    },

    // Initial ideas
    {
      type: 'text',
      title: 'Initial ideas',
      headerSize: 'sm',
      content: [
        'Initial ideas were a practice in getting information down on the page and seeing what stuck, both through internal reviews with the Carv team and with members of the Facebook group.',
        'It was clear that I was getting closer, just not quite there (yet).'
      ]
    },

    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/carv/1. Carv - End of day initial ideas.webp',
          alt: 'Initial idea - Daily summary',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - End of day initial ideas.webp',
          alt: 'Initial idea - Session review chart',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - End of day initial ideas.webp',
          alt: 'Initial idea - Session review map',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },

    // Sentiment
    {
      type: 'text',
      title: 'Sentiment',
      headerSize: 'sm',
      content: 'A simple tap of a button worked best in testing and allowed us to gather data from the skier to inform future recommendations and suggestions.',
    },

    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/carv/1. Carv - Sentiment.webp',
          alt: 'Sentiment capture idea 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Sentiment.webp',
          alt: 'Sentiment capture idea 2',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - Sentiment.webp',
          alt: 'Sentiment capture idea 3',
          style: { maxWidth: '369px', margin: '0 auto' },
          noBorder: true,
          breakout: true,
        },
      ]
    },


    {
      type: 'divider'
    },

    {
      type: 'text',
      title: 'Showing achievements & progression',
      content: 'How do we show progression, level and make skiers feel motivated to progress while celebrating their achievements? This was the question I needed to answer to better engage with skiers.'
    },

    {
      type: 'highlight',
      title: 'Octalysis Framework',
      content: 'Yu-Kai Chou spent ten years designing the Octalysis framework and identified eight core drives that exist within humans that motivate us to engage in activities. I used these "white hat drives" as a basis for achievements and progression.'
    },

    {
      type: 'text',
      title: 'Achievements',
      content: 'The achievement badges started out with levels e.g. beginner level 1. However, after speaking with users, it came to light that numbers were not only demotivating, but also confusing "what\'s a beginner level 2?". I then shifted to abstract naming, which answered this problem and also injected some personality and character.'
    },

    {
      type: 'text',
      title: 'Celebration cards',
      content: 'Another way to celebrate skiers achievements was by having celebration cards. Through the tried and tested process of elimination, I landed on cards that were simple, but effective.'
    },

    {
      type: 'divider'
    },

    // --- RESULTS ---
    {
      type: 'text',
      title: 'Results',
      content: 'The redesign and feature enhancements for Carv led to significant improvements in user engagement and retention. Introducing challenges based on user preferences and providing personalised recommendations throughout the ski day significantly improved user satisfaction.'
    },

    {
      type: 'metrics',
      metrics: [
        { value: '25%', label: 'Increase in user engagement' },
        { value: '30%', label: 'Rise in user retention' },
        { value: '23%', label: 'Increase in NPS' }
      ]
    },

    {
      type: 'quote',
      text: '95% said that Carv has directly improved their skiing and 62% reported that the \'off-snow\' content motivated them to ski more often.',
      author: 'End of season survey with 6,000 users'
    },
  ]
}

export default function Carv() {
  return <CaseStudyLayout project={carvProject} />
}
