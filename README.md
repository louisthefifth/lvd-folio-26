# Portfolio Site

A modern, dark-themed portfolio website inspired by the [JetBrains Mono landing page](https://www.jetbrains.com/lp/mono/), built with React and Tailwind CSS.

## Features

- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Dark Theme** - Sleek dark UI (#1b1b1b background) inspired by JetBrains Mono
- 🔤 **JetBrains Mono Font** - Beautiful monospace typography throughout
- 🔧 **Easy to Customise** - Simple component structure for adding projects and content
- 🎯 **Smooth Navigation** - Fixed header with smooth scrolling between sections

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **JetBrains Mono** - Open-source monospace font

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Projects

To add new projects, edit the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  id: 5,
  title: 'Your Project Name',
  description: 'Project description',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: '🚀',
  link: '/project-url',
  featured: true
}
```

## Customisation

### Colours

The dark theme uses `#1b1b1b` as the primary background. Edit the colour scheme in `tailwind.config.js`:

```javascript
colors: {
  'jetbrains-dark': '#1e1e1e',
  'jetbrains-accent': '#ff6b00',
  // Add your custom colours
}
```

Or directly in components using Tailwind's arbitrary values like `bg-[#1b1b1b]`.

### Content

- **Navigation**: Edit `src/components/Navigation.jsx`
- **Hero Section**: Edit `src/components/Hero.jsx`
- **Features**: Edit `src/components/Features.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Footer**: Edit `src/components/Footer.jsx`

## Project Structure

```
lvd-folio-26/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Fixed header navigation
│   │   ├── Hero.jsx          # Hero section with code showcase
│   │   ├── CodeBlock.jsx     # Syntax-highlighted code display
│   │   ├── Features.jsx      # Features grid
│   │   ├── Projects.jsx      # Projects showcase
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with dark theme
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## License

MIT

## Credits

Design inspired by [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

