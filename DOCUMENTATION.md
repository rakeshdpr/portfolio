# Technical Documentation - Portfolio Website

This document provides in-depth technical documentation for developers who want to understand, modify, or extend the portfolio website.

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [HTML Structure](#html-structure)
3. [CSS Architecture](#css-architecture)
4. [JavaScript Modules](#javascript-modules)
5. [Design System](#design-system)
6. [Performance Considerations](#performance-considerations)
7. [Development Guidelines](#development-guidelines)

---

## Architecture Overview

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Dependencies**: Bootstrap 5.3.3 (minimal usage)
- **External Resources**: Font Awesome 6.4.0, Google Fonts

### Design Patterns
- **Separation of Concerns**: HTML (structure), CSS (presentation), JS (behavior)
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Component-Based**: Reusable CSS classes and JavaScript modules

---

## HTML Structure

### Document Organization

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags, title, external resources -->
  </head>
  <body>
    <!-- Fixed Header Navigation -->
    <header>...</header>
    
    <!-- Main Content Sections -->
    <section id="home" class="hero">...</section>
    <section id="about" class="about">...</section>
    <section id="skills" class="skills">...</section>
    <section id="projects" class="projects">...</section>
    <section id="data-science" class="data-science">...</section>
    <section id="contact" class="contact">...</section>
    
    <!-- Footer -->
    <footer>...</footer>
    
    <!-- Back to Top Button -->
    <a class="back-to-top">...</a>
    
    <!-- Scripts -->
    <script src="script.js"></script>
  </body>
</html>
```

### Semantic HTML Elements

The website uses semantic HTML5 elements for better accessibility and SEO:
- `<header>`: Site-wide navigation
- `<section>`: Major content sections with IDs for navigation
- `<nav>`: Navigation menu
- `<footer>`: Footer content
- `<article>`: Individual project items could use this (future enhancement)

### Accessibility Features

1. **ARIA Labels**: 
   - `aria-label="Toggle menu"` on mobile menu button
   - `aria-label="Toggle dark mode"` on dark mode toggle
   - `aria-label="Back to top"` on scroll-to-top button

2. **Semantic IDs**: Each section has a unique ID for skip navigation

3. **Alt Text**: Images include descriptive alt text

4. **Form Labels**: All form inputs have associated labels

---

## CSS Architecture

### CSS Custom Properties (Variables)

The design system is built on CSS custom properties for easy theming:

```css
:root {
  /* Colors */
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  
  /* Spacing */
  --section-padding: 6rem 0;
  --container-padding: 0 1.5rem;
  
  /* Effects */
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-fast: 0.3s ease;
}
```

### Dark Mode Implementation

Dark mode overrides CSS variables:

```css
.dark-mode {
  --bg-light: #1f2937;
  --bg-gray: #111827;
  --text-dark: #f9fafb;
  /* ... other overrides */
}
```

JavaScript toggles the `.dark-mode` class on `<body>` to switch themes.

### CSS Organization

The stylesheet is organized into logical sections:

1. **General Styles** (Lines 1-181)
   - CSS Variables
   - Reset styles
   - Typography
   - Layout utilities
   - Button styles
   - Animation classes

2. **Header & Navigation** (Lines 182-280)
   - Fixed header
   - Logo styles
   - Navigation menu
   - Mobile menu toggle
   - Dark mode toggle button

3. **Hero Section** (Lines 281-380)
   - Hero layout
   - Typewriter effect
   - Hero buttons
   - Hero image

4. **About Section** (Lines 381-450)
   - Two-column layout
   - About image
   - About text and lists

5. **Skills Section** (Lines 451-540)
   - Skill categories
   - Progress bars
   - Skill animations

6. **Projects Section** (Lines 541-680)
   - Project filters
   - Project grid
   - Project cards
   - Hover effects

7. **Data Science Section** (Lines 681-780)
   - DS cards
   - Featured projects

8. **Contact Section** (Lines 781-900)
   - Contact form
   - Contact info
   - Social links

9. **Footer** (Lines 901-980)
   - Footer layout
   - Newsletter form

10. **Responsive Design** (Lines 981-1122)
    - Media queries for different breakpoints

### Responsive Breakpoints

```css
/* Large Desktop */
@media (min-width: 1200px) { }

/* Desktop */
@media (max-width: 1199px) { }

/* Tablet */
@media (max-width: 991px) { }

/* Large Mobile */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 576px) { }
```

### Animation Classes

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Elements with `.animate-on-scroll` fade in and slide up when scrolled into view.

---

## JavaScript Modules

### Event Flow

```
Page Load
  └─> DOMContentLoaded Event
      ├─> initTypewriterEffect()
      ├─> initProjectFilters()
      ├─> initScrollAnimations()
      ├─> setupContactForm()
      ├─> initSkillBars()
      └─> Mobile Menu Setup
```

### Module Breakdown

#### 1. Typewriter Effect (`initTypewriterEffect()`)

**Purpose**: Creates a typing animation in the hero section that cycles through different titles.

**Algorithm**:
```
1. Initialize variables (titles array, indices, isDeleting flag)
2. Define recursive type() function:
   - If deleting: remove one character
   - If typing: add one character
   - If word complete: pause, then start deleting
   - If word empty: move to next word, start typing
3. Call type() with appropriate delay
```

**Code Flow**:
```javascript
titles = ['Web Developer', 'Data Scientist', 'Problem Solver', 'Tech Enthusiast']
↓
Type character by character
↓
Pause when complete (1500ms)
↓
Delete character by character
↓
Pause when empty (500ms)
↓
Move to next title
↓
Repeat
```

#### 2. Project Filters (`initProjectFilters()`)

**Purpose**: Allows filtering projects by category (All, Web Dev, Data Viz, ML).

**How It Works**:
1. Listen for clicks on filter buttons
2. Update active button styling
3. Get filter value from `data-filter` attribute
4. Show/hide project items based on their classes
5. Apply smooth fade-in/out animations

**Filter Logic**:
```javascript
if (filterValue === 'all' || item.classList.contains(filterValue)) {
  // Show project
  item.style.display = 'block';
  item.style.opacity = 1;
} else {
  // Hide project
  item.style.opacity = 0;
  setTimeout(() => item.style.display = 'none', 300);
}
```

#### 3. Scroll Animations (`initScrollAnimations()`)

**Purpose**: Triggers animations when elements come into view during scrolling.

**Technology**: Intersection Observer API

**Benefits**:
- More performant than scroll event listeners
- Built-in viewport detection
- Automatic cleanup when element is observed

**Implementation**:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // Trigger animation
      observer.unobserve(entry.target);        // Stop observing
    }
  });
}, { threshold: 0.2 });  // Trigger when 20% visible

elements.forEach(element => observer.observe(element));
```

#### 4. Contact Form (`setupContactForm()`)

**Purpose**: Validates and handles contact form submission.

**Validation Rules**:
- Name: Cannot be empty
- Email: Must match email regex pattern
- Message: Cannot be empty

**Validation Flow**:
```
Submit Form
  ↓
Prevent Default
  ↓
Validate Inputs
  ├─> Invalid: Show error messages
  └─> Valid: Show success message, reset form
```

**Email Regex**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Error Display**:
```javascript
function showError(input, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  input.parentNode.appendChild(errorDiv);
  input.classList.add('error');
}
```

#### 5. Skill Bars (`initSkillBars()`)

**Purpose**: Animates skill progress bars when they come into view.

**How It Works**:
1. Use Intersection Observer to detect when skill section is visible
2. Read `data-progress` attribute from each bar
3. Animate width from 0% to target percentage
4. CSS transition handles the animation smoothly

**Implementation**:
```javascript
const percentage = progressBar.getAttribute('data-progress');
progressBar.style.width = percentage + '%';  // CSS transition animates
```

#### 6. Dark Mode (`toggleDarkMode()`)

**Purpose**: Switches between light and dark color schemes.

**Features**:
- Toggles `.dark-mode` class on `<body>`
- Saves preference to localStorage
- Updates toggle button icon (moon ↔ sun)

**Persistence**:
```javascript
// Save preference
localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

// Load on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}
```

#### 7. Mobile Menu

**Purpose**: Toggles mobile navigation menu visibility.

**Implementation**:
```javascript
menuToggle.addEventListener('click', function() {
  navMenu.classList.toggle('active');      // Show/hide menu
  menuToggle.classList.toggle('open');     // Animate hamburger icon
});
```

---

## Design System

### Color Palette

#### Primary Colors (Indigo)
- `--primary-color: #4f46e5` - Main brand color
- `--primary-light: #818cf8` - Lighter variant
- `--primary-dark: #3730a3` - Darker variant

#### Secondary Colors (Emerald)
- `--secondary-color: #10b981` - Success, positive actions
- `--secondary-light: #34d399` - Lighter variant
- `--secondary-dark: #059669` - Darker variant

#### Accent Color
- `--accent-color: #f59e0b` - Amber, for highlights

#### Neutral Colors
- `--bg-light: #ffffff` - Light background
- `--bg-gray: #f3f4f6` - Section backgrounds
- `--bg-dark: #111827` - Dark elements
- `--text-dark: #1f2937` - Primary text
- `--text-light: #f9fafb` - Light text (on dark bg)
- `--text-muted: #6b7280` - Secondary text

### Typography

#### Font Families
- **Primary**: `'Poppins', sans-serif` - Headings and body text
- **Monospace**: `'Roboto Mono', monospace` - Code blocks (if needed)

#### Font Sizes
- Base: 16px (1rem)
- Headings: Scale from 2.5rem (h1) to 1.25rem (h4)
- Body: 1rem (16px)

#### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700

### Spacing System

```css
--section-padding: 6rem 0;      /* 96px top/bottom */
--container-padding: 0 1.5rem;  /* 24px left/right */
```

Additional spacing uses multiples of 0.25rem (4px):
- 0.25rem (4px)
- 0.5rem (8px)
- 1rem (16px)
- 1.5rem (24px)
- 2rem (32px)
- 3rem (48px)

### Shadows

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);    /* Subtle elevation */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);    /* Medium elevation */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);  /* High elevation */
```

### Transitions

```css
--transition-fast: 0.3s ease;     /* Quick interactions */
--transition-medium: 0.5s ease;   /* Smooth animations */
```

---

## Performance Considerations

### 1. Intersection Observer API
- **Benefit**: More efficient than scroll event listeners
- **Usage**: Scroll animations and skill bars
- **Impact**: Reduces main thread work during scrolling

### 2. CSS Animations
- **Benefit**: Hardware-accelerated, smoother than JavaScript
- **Usage**: Transitions, transforms, opacity changes
- **Properties Used**: `transform`, `opacity` (GPU-accelerated)

### 3. Event Delegation
- **Benefit**: Fewer event listeners
- **Usage**: Project filters, form validation
- **Implementation**: Single listener on parent element

### 4. Local Storage
- **Benefit**: Eliminates flash of unstyled content
- **Usage**: Dark mode preference
- **Impact**: Instant theme application on page load

### 5. Lazy Loading (Future Enhancement)
- **Recommendation**: Add `loading="lazy"` to images below fold
- **Expected Impact**: Faster initial page load

### 6. Minimal Dependencies
- **Current**: Only Bootstrap 5.3.3
- **Benefit**: Smaller bundle size, faster load times

---

## Development Guidelines

### Adding a New Section

1. **HTML**: Add section element with unique ID
   ```html
   <section id="new-section" class="new-section section-padding">
     <div class="container">
       <div class="section-header">
         <h2>Section Title</h2>
         <div class="section-divider"></div>
       </div>
       <!-- Section content -->
     </div>
   </section>
   ```

2. **CSS**: Add section-specific styles
   ```css
   /* ===== NEW SECTION ===== */
   .new-section {
     /* Section styles */
   }
   ```

3. **Navigation**: Add link to header menu
   ```html
   <li><a href="#new-section">New Section</a></li>
   ```

4. **JavaScript**: Add initialization if needed
   ```javascript
   function initNewFeature() {
     // Feature code
   }
   // Call in DOMContentLoaded event
   ```

### Modifying Colors

1. Edit CSS variables in `:root` selector
2. Changes automatically apply throughout the site
3. Update dark mode variables if needed

### Adding Project Filters

1. Add filter button:
   ```html
   <button class="filter-btn" data-filter="new-category">Category</button>
   ```

2. Add class to project items:
   ```html
   <div class="project-item new-category">...</div>
   ```

3. No JavaScript changes needed (automatic)

### Form Integration

To connect the contact form to a backend:

1. **Option A**: Use a form service (Formspree, Netlify Forms)
   ```html
   <form action="https://formspree.io/f/{your-id}" method="POST">
   ```

2. **Option B**: Custom backend
   ```javascript
   // In setupContactForm() function
   fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

### Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test mobile responsiveness (320px - 1920px)
- [ ] Test dark mode toggle
- [ ] Verify all navigation links work
- [ ] Test contact form validation
- [ ] Check project filters
- [ ] Verify scroll animations
- [ ] Test typewriter effect
- [ ] Check skill bar animations
- [ ] Verify localStorage (dark mode persistence)
- [ ] Test mobile menu toggle
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Validate HTML (W3C Validator)
- [ ] Check console for errors
- [ ] Test with slow network (throttling)

### Code Style Guidelines

1. **HTML**:
   - Use semantic elements
   - Proper indentation (4 spaces)
   - Include alt text for images
   - Use ARIA labels for interactive elements

2. **CSS**:
   - Use CSS custom properties for values used multiple times
   - Organize by sections with comments
   - Use descriptive class names
   - Mobile-first media queries

3. **JavaScript**:
   - Use const/let, not var
   - Descriptive function and variable names
   - Add comments for complex logic
   - Check for element existence before manipulation
   - Use early returns for cleaner code

---

## Troubleshooting

### Common Issues

1. **Typewriter effect not working**
   - Check if `#typewriter-text` element exists
   - Verify JavaScript is loaded
   - Check console for errors

2. **Dark mode not persisting**
   - Check localStorage is enabled in browser
   - Verify `checkDarkModePreference()` is called

3. **Animations not triggering**
   - Verify Intersection Observer is supported
   - Check if `.animate-on-scroll` classes are applied
   - Ensure threshold value is appropriate

4. **Form validation not working**
   - Check if form has `id="contact-form"`
   - Verify input IDs match JavaScript selectors
   - Check console for errors

5. **Mobile menu not toggling**
   - Verify IDs: `mobile-menu-toggle` and `nav-menu`
   - Check if JavaScript event listener is attached
   - Ensure CSS classes `.active` and `.open` are defined

---

## Browser Support

### Fully Supported Features
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills Needed for Older Browsers
- Intersection Observer (IE11, older Safari)
- CSS Custom Properties (IE11)
- ES6 Features (IE11)

### Progressive Enhancement
- Core content accessible without JavaScript
- Animations gracefully degrade
- Forms work without validation (browser default)

---

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [W3C Validator](https://validator.w3.org/) - HTML validation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

### Libraries Used
- [Font Awesome](https://fontawesome.com/docs)
- [Bootstrap](https://getbootstrap.com/docs/5.3/)
- [Google Fonts](https://fonts.google.com/)

---

**Last Updated**: January 2026  
**Version**: 1.0  
**Maintainer**: Rakesh Chauhan
