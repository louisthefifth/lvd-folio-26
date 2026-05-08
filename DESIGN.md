# Design System

> Converted from dark UI to light UI on 2026-05-08.

This document outlines the design system used in this portfolio site, inspired by the [JetBrains Mono landing page](https://www.jetbrains.com/lp/mono/).

## Colour Palette

### Primary Colours
- **Background**: `#fafafa` - Main light background
- **Secondary Background**: `#ffffff` - Cards and elevated surfaces
- **Elevated Surface**: `#f4f4f4` - Code blocks and inset panels
- **Text Primary**: `#0a0a0a` - Main text colour
- **Text Secondary**: `#525252` - Secondary text

### Borders
- **Primary Border**: `#e5e5e5` - Section dividers
- **Secondary Border**: `rgba(0, 0, 0, 0.08)` - Subtle borders

### Interactive Elements
- **Button Primary**: White text on `#0a0a0a` background
- **Button Hover**: `#0a0a0a` hovers to `#1f1f1f`
- **Links**: `#0a0a0a` with hover effect to `#525252`
- **Accent**: `#046055` - Active nav, writing links, underline indicators

## Typography

### Font Family
- **Primary**: JetBrains Mono (loaded from Google Fonts)
- **Body / UI**: Satoshi (loaded from Fontshare)
- **Fallback**: monospace / sans-serif

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
- Fixed sidebar (desktop), hamburger drawer (mobile)
- Background: `#ffffff` with `border-gray-200`
- Active link: `text-[#141413] font-bold`
- Inactive link: `text-gray-500`

### Code Block
- Background: `#f4f4f4`
- Line numbers: `#9ca3af`
- Code text: `#1b1b1b` (intentionally dark — code aesthetic)
- Font: JetBrains Mono

### Cards (Projects)
- Background: `#ffffff`
- Border: `1px solid #e5e5e5`
- Hover border: `#d4d4d4`
- Rounded: `0.5rem` (8px)

### Project Titles
- Outlined text: `WebkitTextStroke: '1.5px rgba(10,10,10,0.6)'`
- Hover: fills to `#0a0a0a`
- Tags: structured `{ industry, businessModel, discipline }` — rendered as pills in that order

### Buttons
- **Primary**: `#0a0a0a` background, white text
- **Hover**: `#1f1f1f` background
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
- Colour: `hover:text-[#0a0a0a]`

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
  background: #fafafa;
}

::-webkit-scrollbar-thumb {
  background: #d4d4d4;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3;
}
```

## Code Examples

### Using the colour palette in components:

```jsx
// Light background
className="bg-[#fafafa]"

// Card / surface
className="bg-white"

// Elevated / code block background
className="bg-[#f4f4f4]"

// Border
className="border border-gray-200"

// Text
className="text-[#0a0a0a]"    // Primary
className="text-[#525252]"    // Secondary
className="text-gray-500"     // Secondary (Tailwind alias)
```

### Responsive design pattern:

```jsx
className="text-sm sm:text-base lg:text-xl"
className="px-4 sm:px-6 lg:px-8"
className="py-12 sm:py-16 lg:py-24"
```

### Interactive elements:

```jsx
className="hover:text-[#0a0a0a] transition-colors"
className="hover:scale-105 transition-transform duration-300"
```

## Adding New Sections

When adding new sections, follow this structure:

```jsx
<section 
  id="section-name" 
  className="py-16 sm:py-20 lg:py-32 border-b border-gray-200"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content here */}
  </div>
</section>
```

## Best Practices

1. Always use JetBrains Mono for headings/labels; Satoshi for body copy
2. Maintain the light theme throughout — no dark variants
3. Use subtle borders (`border-gray-200`) to separate sections
4. Ensure all interactive elements have hover states
5. Keep spacing consistent using Tailwind's spacing scale
6. Test responsiveness at all breakpoints
7. Maintain sufficient contrast for accessibility
8. Client blocks link externally with desktop-only hover arrow (`@media (hover: hover)`)
