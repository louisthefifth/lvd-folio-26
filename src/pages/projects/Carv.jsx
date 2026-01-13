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

  // Hero images - displayed under the description
  heroImagesFullWidth: true,
  heroImages: [
    { src: '/images/carv/1 Carv homepage.webp', alt: 'CARV app homepage showing skiing metrics', style: { maxWidth: '330px' } },
    { src: '/images/carv/2. Carv focus.webp', alt: 'CARV focus mode interface', style: { maxWidth: '330px' } },
    { src: '/images/carv/3. Carv end of day.webp', alt: 'CARV end of day summary', style: { maxWidth: '330px' } }
  ],

  challenge: 'Come up with ways to engage with skiers beyond skiing AKA \'off-snow\'. Also, work out ways to encourage, reward and give them purpose when using the app.',

  results: [
    { value: '25%', label: 'Increase in user engagement' },
    { value: '30%', label: 'Rise in user retention' },
    { value: '23%', label: 'Increase in NPS' }
  ],

  // Hero image - appears at the top with parallax effect
  // Export a wide, impactful image from Figma (recommended: 1920x1080 or wider)
  // Uncomment when you have your hero image ready:
  // heroImage: {
  //   src: '/images/carv/hero.png',
  //   alt: 'CARV app interface showing skiing metrics and achievements'
  // },

  // Outcome summary - appears at the bottom before footer
  // outcome: 'The redesign and feature enhancements for Carv led to a 25% increase in user engagement and a 30% rise in user retention. The inclusion of achievement badges and celebration cards motivated users and increased interaction with the app. This project successfully enhanced the overall user experience, driving both engagement and long-term retention.',

  // ═══════════════════════════════════════════════════════════════════════════
  // CONTENT SECTIONS - Edit these to tell your story
  // ═══════════════════════════════════════════════════════════════════════════

  sections: [
    // --- QUOTE ---
    {
      type: 'quote',
      text: '95% said that Carv has directly improved their skiing and 62% reported that the \'off-snow\' content motivated them to ski more often.',
      author: 'End of season survey with 6,000 users'
    },

    // --- SPEAKING WITH SKIERS ---

    {
      type: 'text',
      title: 'Speaking with skiers',
      spacingTop: '300px',
      content: 'As I am not a skier, I started by immersing myself in as much insight and analysis I could get my hands on. Fortunately, there was highly-engaged Facebook group of early adopters and active users. The information combined together made for a robust set which I used to form distill insights and define opportunities.'
    },

    {
      type: 'insight-cards',

      cards: [
        {
          insight: 'Skiers would like to see as much context as possible while progressing and improving.',
          opportunity: 'Provide context and feedback as to why the skier can see what they see on screen and what they can do next.',
          style: { maxWidth: '400px' },
        },
        {
          insight: 'Carv is seen as a fun toy, but just how powerful is it?',
          opportunity: 'Play the ski day back to the skier and allow them to drill into the rich information captured.',
          style: { maxWidth: '400px' },
        },
        {
          insight: 'Skiers don\'t always know what what they need to improve or how they go about improving.',
          opportunity: 'Present smart guides and tools to progress at key moments leveraging usage data.',
          style: { maxWidth: '400px' },
        },
        {
          insight: '\'Progression plateau\' is the #1 reason skiers disengage.',
          opportunity: 'Introduce achievements and accolades, without demoralising skiers at any point.',
          style: { maxWidth: '400px' },
        }
      ]
    },

    // --- FINDING OPPORTUNITIES ---

    {
      type: 'text',
      title: 'Finding opportunities in a ski day',
      spacingTop: '300px',
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

    // {
    //   type: 'divider'
    // },

    // --- ADDING VALUE ---

    {
      type: 'text',
      title: 'Adding value by challenging skiers',
      spacingTop: '300px',
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
      spacingTop: '300px',
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
      spacingTop: '300px',
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
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },


    // Outcome
    {
      type: 'text',
      title: 'Outcome',
      headerSize: 'sm',
      content: 'In the end I stuck with a pattern of; capturing sentiment first (as it\'s fresh in their mind), then top level review and lastly the option to drill down deeper into the specifics.',
    },

    {
      type: 'image-grid',
      columns: 3,
      gap: 2,
      images: [
        {
          src: '/images/carv/1. Carv - End of day solution.webp',
          alt: 'End of day capture',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - End of day solution.webp',
          alt: 'End of day - drilling into the runs',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - End of day solution.webp',
          alt: 'End of day performance metrics',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },


    // {
    //   type: 'divider'
    // },

    // --- SHOWING ACHIEVEMENTS AND PROGRESS ---

    {
      type: 'text',
      spacingTop: '300px',
      title: 'Showing achievements & progression',
    },

    {
      type: 'quote',
      spacingTop: '40px',
      text: 'How do we make skiers feel motivated to progress while also celebrating their achievements?'
    },

    {
      type: 'text',
      spacingTop: '40px',
      content: 'This was the challenge I needed to answer to keep skiers engaged with Carv and not demotivated.'
    },

    // Octalysis framework
    {
      type: 'highlight',
      title: 'Octalysis Framework',
      content: [
        'Yu-Kai Chou spent ten years designing the ',
        { text: 'Octalysis framework', link: 'https://yukaichou.com/gamification-expert/' },
        ' and identified eight core drives that exist within humans that motivate us to engage in activities. I used these "white hat drives" as a basis for achievements and progression.'
      ]
    },

    {
      type: 'image',
      src: '/images/carv/1. Carv - Octalysis.webp',
      alt: 'Octalysis framework',
      style: { maxWidth: '500px', margin: '0 auto' },
      noBorder: true,
      fullWidth: true,
    },

    // White hat drive mini-cards
    {
      type: 'text',
      title: 'White hat drives',
      headerSize: 'sm',
      content: 'From the Octalysis framework I took three key \'white hat drives\' and defined what the app should be doing to answer these.',
    },

    {
      type: 'image',
      src: '/images/carv/2. Carv - Octalysis.webp',
      alt: 'Octalysis - white hat drivers',
      style: { maxWidth: '500px', margin: '0 auto' },
      noBorder: true,
      fullWidth: true,
    },

    {
      type: 'cards',
      columns: 3,
      cards: [
        {
          title: 'Meaning',
          content: 'What gives the skier a reason to explore the app?'
        },
        {
          title: 'Empowerment',
          content: 'How is the app enabling the skier to progress and advance?'
        },
        {
          title: 'Accomplishment',
          content: 'What can be celebrated to keep the skier motivated?'
        }
      ]
    },

    // White hat drive annotated wire

    {
      type: 'text',
      content: 'These drives helped to shape the layout of how progression and achievements would live within the app.'
    },

    {
      type: 'image',
      src: '/images/carv/1. Carv - White hat drives annotated wire.webp',
      alt: 'White hat drives wireframe',
      style: { maxWidth: '1000px', margin: '0 auto' },
      noBorder: true,
      fullWidth: true,
    },


    // Wires to mid-fi
    {
      type: 'text',
      content: 'With a solid foundation of what should be surfaced to the skier it was easy to go from basic wires to mid-fidelity designs.'
    },

    // Idea 1

    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {
          src: '/images/carv/1. Carv - Idea 1 prog and achieve wire.webp',
          alt: 'Progression wireframe idea 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Idea 1 prog and achieve mid-fi.webp',
          alt: 'Progression mid-fidelity idea 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },

    // Idea 2

    {
      type: 'image-grid',
      columns: 2,
      gap: 1,
      images: [
        {
          src: '/images/carv/1. Carv - Idea 2 prog and achieve wire.webp',
          alt: 'Progression wireframe idea 2',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Idea 2 prog and achieve mid-fi.webp',
          alt: 'Progression mid-fidelity idea 1',
          style: { maxWidth: '270px', margin: '0 auto' },
        },
      ]
    },

    // Achievements

    {
      type: 'text',
      title: 'Achievements',
      headerSize: 'sm',
      content: 'The achievement badges started out with levels e.g. beginner level 1. However, after speaking with users, it came to light that numbers were not only demotivating, but also confusing "what\'s a beginner level 2?". I then shifted to abstract naming, which answered this problem and also injected some personality and character.'
    },

    {
      type: 'image-grid',
      columns: 4,
      gap: 1,
      images: [
        {
          src: '/images/carv/1. Carv - Badge wire.webp',
          alt: 'Achievement badge wire',
          style: { maxWidth: '135px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/carv/2. Carv - Badge rough.webp',
          alt: 'Achievement badge rough',
          style: { maxWidth: '135px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/carv/3. Carv - Badge mid-fi.webp',
          alt: 'Achievement badge mid-fi',
          style: { maxWidth: '135px', margin: '0 auto' },
          noBorder: true,
        },
        {
          src: '/images/carv/4. Carv - Badge prod.webp',
          alt: 'Achievement badge production',
          style: { maxWidth: '135px', margin: '0 auto' },
          noBorder: true,
        },
      ]
    },

    {
      type: 'text',
      content: 'The abstracted approach became a mainstay and was fleshed out to cover all levels. To get to level 7 required Olympic-grade focus, which is why there were only 7 to start with. This was designed to change and evolve as the app grew.',
    },

    // Row of 4
    {
      type: 'image-grid',
      columns: 4,
      gap: 1,
      images: [
        {
          src: '/images/carv/1. Carv - Green Guru.webp',
          alt: 'Green Guru Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Smooth Operator.webp',
          alt: 'Smooth Operator Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - Parallel Perfector.webp',
          alt: 'Parallel Perfector Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
        {
          src: '/images/carv/4. Carv - Carv Cadet.webp',
          alt: 'Carv Cadet Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
      ]
    },

    // Row of 3
    {
      type: 'image-grid',
      columns: 3,
      gap: 1,
      images: [
        {
          src: '/images/carv/5. Carv - Carving Connoisseur.webp',
          alt: 'Carving Connoisseur Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
        {
          src: '/images/carv/6. Carv - Mountain Master.webp',
          alt: 'Mountain Master Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
        {
          src: '/images/carv/7. Carv - Grim Ripper.webp',
          alt: 'Grim Ripper Achievement',
          style: { maxWidth: '160px', margin: '0 auto' },
        },
      ]
    },

    // ** PICK UP FROM HERE ** 

    {
      type: 'text',
      title: 'Celebration cards',
      headerSize: 'sm',
      content: 'Another way to celebrate skiers achievements was by having celebration cards. Initially I explored variations of \'snackbar cards\'.'
    },


    // Celebration card graphic
    {
      type: 'image-grid',
      columns: 3,
      gap: -5,
      fullWidth: true,
      images: [
        {
          src: '/images/carv/1. Carv - Celebration card graphic.webp',
          alt: 'Carv celebration graphic 1',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Celebration card graphic.webp',
          alt: 'Carv celebration graphic 2',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - Celebration card graphic.webp',
          alt: 'Carv celebration graphic 3',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]
    },

    // Celebration card text
    {
      type: 'image-grid',
      columns: 3,
      gap: -5,
      fullWidth: true,
      images: [
        {
          src: '/images/carv/1. Carv - Celebration card text.webp',
          alt: 'Carv celebration text 1',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Celebration card text.webp',
          alt: 'Carv celebration text 2',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - Celebration card text.webp',
          alt: 'Carv celebration text 3',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]
    },


    {
      type: 'text',
      title: 'Solution',
      headerSize: 'sm',
      content: 'Through rounds of iterations and testing I landed on a design that combined previous explorations, while introducing visually appealing elements.'
    },

    // Celebration card final
    {
      type: 'image-grid',
      columns: 3,
      gap: -5,
      fullWidth: true,
      images: [
        {
          src: '/images/carv/1. Carv - Celebration card final.webp',
          alt: 'Carv celebration final 1',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/2. Carv - Celebration card final.webp',
          alt: 'Carv celebration final 2',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
        {
          src: '/images/carv/3. Carv - Celebration card final.webp',
          alt: 'Carv celebration final 3',
          style: { maxWidth: '300px', margin: '0 auto' },
        },
      ]
    },



  ]
}

export default function Carv() {
  return <CaseStudyLayout project={carvProject} />
}
