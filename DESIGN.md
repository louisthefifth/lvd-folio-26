# Design System

This document outlines the design system used in this portfolio site, inspired by the [JetBrains Mono landing page](https://www.jetbrains.com/lp/mono/).

## Colour Palette

### Primary Colours
- **Background**: `#1b1b1b` - Main dark background
- **Secondary Background**: `#2b2b2b` - Cards and elevated surfaces
- **Text Primary**: `#ffffff` - Main text colour
- **Text Secondary**: `#9ca3af` (gray-400) - Secondary text

### Borders
- **Primary Border**: `#374151` (gray-800) - Section dividers
- **Secondary Border**: `rgba(255, 255, 255, 0.1)` - Subtle borders

### Interactive Elements
- **Button Primary**: `#ffffff` on `#000000`
- **Button Hover**: `#e5e5e5`
- **Links**: `#ffffff` with hover effect to `#9ca3af`

## Typography

### Font Family
- **Primary**: JetBrains Mono (loaded from Google Fonts)
- **Fallback**: monospace

### Font Sizes
- **Hero Title**: `3.75rem` (60px) on desktop, responsive down to `2.25rem` (36px)
- **Section Title**: `3rem` (48px) on desktop
- **Body Large**: `1.25rem` (20px)
- **Body**: `1rem` (16px)
- **Small**: `0.875rem` (14px)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Bold**: 700

## Spacing

Following Tailwind's spacing scale:
- **Section Padding**: `py-16 sm:py-20 lg:py-32` (64px - 128px)
- **Container Max Width**: `1280px` (max-w-7xl)
- **Horizontal Padding**: `px-4 sm:px-6 lg:px-8`

## Components

### Navigation
- Fixed header with backdrop blur
- Height: `4rem` (64px)
- Background: `#1b1b1b` with 95% opacity
- Border bottom: 1px solid gray-800

### Code Block
- Background: `#1b1b1b`
- Line numbers: gray-600
- Code text: gray-200
- Hover effect on lines: white/5% opacity
- Font: JetBrains Mono

### Cards (Projects)
- Background: `#2b2b2b`
- Border: 1px solid gray-800
- Hover border: gray-700
- Rounded: `0.5rem` (8px)

### Buttons
- **Primary**: White background, black text
- **Hover**: gray-200 background
- **Padding**: `px-4 py-2` (small), `px-8 py-4` (large)
- **Rounded**: `0.5rem` (8px)

## Responsive Breakpoints

```css
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
```

## Animations

### Transitions
- **Default**: `transition-colors` (200ms)
- **Transform**: `transition-transform duration-300`
- **All**: `transition-all duration-300`

### Hover Effects
- Scale: `hover:scale-105` or `hover:scale-110`
- Opacity: `hover:bg-white/10`
- Colour: `hover:text-white`

## Accessibility

- Smooth scroll behaviour enabled
- Focus states maintained on all interactive elements
- Semantic HTML5 elements used throughout
- ARIA labels on icon buttons
- Sufficient colour contrast ratios

## Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #1b1b1b;
}

::-webkit-scrollbar-thumb {
  background: #3b3b3b;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b4b4b;
}
```

## Code Examples

### Using the colour palette in components:

```jsx
// Dark background
className="bg-[#1b1b1b]"

// Secondary background
className="bg-[#2b2b2b]"

// Border
className="border border-gray-800"

// Text
className="text-white"          // Primary
className="text-gray-400"       // Secondary
```

### Responsive design pattern:

```jsx
className="text-sm sm:text-base lg:text-xl"
className="px-4 sm:px-6 lg:px-8"
className="py-12 sm:py-16 lg:py-24"
```

### Interactive elements:

```jsx
className="hover:text-white transition-colors"
className="hover:scale-105 transition-transform duration-300"
```

## Adding New Sections

When adding new sections, follow this structure:

```jsx
<section 
  id="section-name" 
  className="py-16 sm:py-20 lg:py-32 bg-[#1b1b1b] border-b border-gray-800"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content here */}
  </div>
</section>
```

## Best Practices

1. Always use the JetBrains Mono font for consistency
2. Maintain the dark theme throughout (`#1b1b1b`)
3. Use subtle borders (`border-gray-800`) to separate sections
4. Ensure all interactive elements have hover states
5. Keep spacing consistent using Tailwind's spacing scale
6. Test responsiveness at all breakpoints
7. Maintain sufficient contrast for accessibility

