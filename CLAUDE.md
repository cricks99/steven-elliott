# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a **static political campaign website** for Steven Elliott's Congressional campaign for Michigan's 12th District. The project consists of three main files:

- **index.html** - Main HTML structure with complete campaign content
- **script.js** - JavaScript for interactive features (mobile menu, smooth scrolling, modal forms, animations)
- **styles.css** - CSS styling with responsive design and campaign branding

## Architecture

**Single Page Application (SPA)**: All content is contained in a single HTML file with JavaScript-powered navigation and interactions.

### Key Components:
- **Header/Navigation**: Fixed header with mobile hamburger menu
- **Hero Section**: Campaign introduction with candidate photo and call-to-action
- **About Section**: Candidate biography with social media links
- **Issues Section**: Six key policy positions in card format
- **Volunteer Forms**: Modal-based forms for volunteering, event hosting, and yard signs
- **Donation Section**: Interactive donation amount selection
- **Contact Information**: Campaign headquarters and social media

### JavaScript Features:
- Mobile responsive hamburger menu with animation
- Smooth scrolling navigation
- Modal forms for campaign interactions (volunteer, event hosting, yard signs)
- Donation amount selection with custom amount option
- Parallax effects and scroll animations
- Form validation and submission handlers

### Design System:
- **Colors**: Primary red (#C8102E), primary blue (#002868), accent gold (#FFD700)
- **Fonts**: Montserrat for headings, Open Sans for body text
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: CSS animations and JavaScript scroll reveals

## Development Commands

This project uses **no build system** - it's vanilla HTML, CSS, and JavaScript. Files can be opened directly in a browser.

### Local Development:
```bash
# Open directly in browser
open index.html

# Or serve locally with any HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Testing:
- **Manual testing only** - no automated test framework
- Test responsive design across different screen sizes
- Verify form functionality and modal interactions
- Check smooth scrolling and navigation
- Test donation amount selection and validation

## Key Considerations

1. **Content Updates**: All campaign content is directly in the HTML - no CMS or database
2. **Form Handling**: Forms currently show alerts - would need backend integration for production
3. **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
4. **Performance**: Optimized for fast loading with minimal dependencies
5. **SEO**: Meta tags and structured content for search engines

## Common Tasks

- **Content updates**: Edit HTML directly in index.html
- **Styling changes**: Modify styles.css (uses CSS custom properties for theming)
- **Interactive features**: Update script.js for form handling and animations
- **Images**: Replace candidate photo URL in hero section
- **Social media**: Update links in about section and footer