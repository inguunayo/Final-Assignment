# Latvijas Banka Licensing Page Components

Reusable React components extracted from the Bank of Latvia licensing page (https://www.bank.lv/darbibas-jomas/licencesana).

## Components

This project contains the following modular, reusable components:

### 1. **Header** (`src/components/Header.jsx`)
- Sticky navigation header with logo
- Main navigation menu
- Search functionality
- Language switcher (LV/EN)
- Fully responsive design

### 2. **HeroSection** (`src/components/HeroSection.jsx`)
- Gradient background hero section
- Breadcrumb navigation
- Dynamic title and description props
- Responsive typography

### 3. **LicensingGrid** (`src/components/LicensingGrid.jsx`)
- Flexible grid layout (3-column default)
- Responsive breakpoints (3 cols → 2 cols → 1 col)
- Renders licensing cards from data array

### 4. **LicensingCard** (`src/components/LicensingCard.jsx`)
- Individual card component
- Icon support
- Title, description, and link
- Hover animations and transitions
- Fully self-contained styling

### 5. **Footer** (`src/components/Footer.jsx`)
- 4-column footer grid
- Contact information
- Social media links (Twitter, LinkedIn, YouTube)
- Quick links
- Copyright notice
- Responsive layout

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

### Basic Example

```jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LicensingGrid from './components/LicensingGrid';
import Footer from './components/Footer';

function App() {
  const licensingData = [
    {
      title: 'Kredītiestādes',
      description: 'Informācija par kredītiestāžu licencēšanas procesu...',
      link: '/licencesana/kreditiestades',
      icon: '/assets/icons/bank.svg'
    },
    // ... more items
  ];

  return (
    <div>
      <Header />
      <HeroSection
        title="Licencēšana"
        description="Latvijas Banka nodrošina finanšu un kapitāla tirgus..."
      />
      <LicensingGrid items={licensingData} />
      <Footer />
    </div>
  );
}
```

### Component Props

#### HeroSection
- `title` (string) - Main heading text
- `description` (string) - Subtitle/description text

#### LicensingGrid
- `items` (array) - Array of licensing item objects

#### LicensingCard
- `title` (string) - Card title
- `description` (string) - Card description
- `link` (string) - URL for "Read more" link
- `icon` (string, optional) - Path to icon image

## Styling

All components have their own CSS modules in `src/styles/`:
- `Header.css` - Header component styles
- `HeroSection.css` - Hero section styles
- `LicensingGrid.css` - Grid layout styles
- `LicensingCard.css` - Card component styles
- `Footer.css` - Footer component styles
- `global.css` - Global resets and base styles

### Customization

You can customize the styling by modifying the CSS files or overriding the CSS variables:

```css
/* Custom color scheme */
.header {
  --primary-color: #0066cc;
  --hover-color: #004999;
}
```

## Features

- **Fully Responsive** - Mobile-first design with breakpoints at 640px, 768px, and 1024px
- **Modern React** - Uses functional components and hooks
- **Accessible** - Semantic HTML and ARIA labels
- **Performance** - Optimized with CSS transitions and minimal re-renders
- **Modular** - Each component is self-contained and reusable
- **Clean Code** - Well-structured and commented

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tech Stack

- React 18.2
- Vite 5.0
- Pure CSS (no preprocessor required)
- SVG icons

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── LicensingGrid.jsx
│   ├── LicensingCard.jsx
│   └── Footer.jsx
├── styles/
│   ├── Header.css
│   ├── HeroSection.css
│   ├── LicensingGrid.css
│   ├── LicensingCard.css
│   ├── Footer.css
│   └── global.css
├── assets/
│   └── icons/
├── App.jsx
└── main.jsx
```

## License

MIT

## Notes

- The components are extracted from the Bank of Latvia website and adapted for reusability
- Latvian language text is used in the example data
- Icons and images need to be provided separately (SVG recommended)
- The design follows modern web standards and best practices
