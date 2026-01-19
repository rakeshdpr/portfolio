# Portfolio Website - Rakesh Chauhan

A modern, responsive personal portfolio website showcasing web development and data science skills, projects, and experience.

## 🌟 Overview

This is a professional portfolio website built with vanilla HTML, CSS, and JavaScript. It features a clean, modern design with dark mode support, smooth animations, and interactive elements. The website is fully responsive and optimized for all device sizes.

## 🎯 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent user preference storage
- **Smooth Animations**: Scroll-triggered animations and smooth transitions throughout the site
- **Interactive Navigation**: Fixed header with smooth scrolling to different sections
- **Mobile Menu**: Hamburger menu for mobile devices with smooth toggle animations

### Section Highlights

#### 1. Hero Section
- Dynamic typewriter effect cycling through professional titles
- Professional introduction with call-to-action buttons
- Profile image display

#### 2. About Section
- Personal introduction and background
- List of key skills and specializations
- CV download button
- Professional highlights

#### 3. Skills Section
- Three skill categories: Web Development, Data Science, Tools & Others
- Animated progress bars showing proficiency levels
- Skills include:
  - **Web Development**: HTML/CSS (95%), JavaScript (90%), React (85%), Node.js (80%)
  - **Data Science**: Python (90%), Data Analysis (85%), Machine Learning (80%), Data Visualization (85%)
  - **Tools**: Git/GitHub (90%), SQL (85%), NoSQL (75%), Docker (70%)

#### 4. Projects Section
- Portfolio of 6 diverse projects
- Filterable project grid (All, Web Development, Data Visualization, Machine Learning)
- Project cards with descriptions, technologies used, and links
- Smooth filtering animations

#### 5. Data Science Section
- Specialized section highlighting data science expertise
- Four key areas: Predictive Analytics, Machine Learning, Data Visualization, Big Data Processing
- Featured data analysis case study with results

#### 6. Contact Section
- Contact form with validation
- Direct contact information (email, phone, location)
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- Newsletter subscription form

#### 7. Footer
- Quick navigation links
- Newsletter subscription
- Copyright and credits

### Technical Features
- **Form Validation**: Real-time client-side validation for contact form
- **Intersection Observer API**: Efficient scroll-based animations
- **Local Storage**: Persistent dark mode preference
- **CSS Custom Properties**: Easy theme customization
- **Semantic HTML**: SEO-friendly markup
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Modern CSS with custom properties (variables), flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JavaScript for all interactions
- **Font Awesome 6.4.0**: Icon library for visual elements
- **Google Fonts**: Poppins and Roboto Mono font families
- **Bootstrap 5.3.3**: Dependency for additional styling support (minimal usage)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # All CSS styles and themes
├── script.js           # JavaScript functionality
├── Resume.pdf          # Downloadable CV
├── package.json        # Node.js dependencies
├── images/             # Image assets
│   ├── profile.png     # Profile picture
│   └── favicon.png     # Browser tab icon
└── *.jpg               # Background images (b1-b5, back.jpg)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (optional, for installing dependencies)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakeshdpr/portfolio.git
   cd portfolio
   ```

2. **Install dependencies (optional)**
   ```bash
   npm install
   ```
   This installs Bootstrap 5.3.3 from package.json.

3. **Open the website**
   
   Simply open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

### Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Push to GitHub and enable GitHub Pages in repository settings
- **Netlify**: Drag and drop the folder or connect your GitHub repository
- **Vercel**: Import project from GitHub
- **Traditional Hosting**: Upload files via FTP to your web server

## 💻 Code Explanation

### HTML Structure (index.html)

The HTML file is organized into semantic sections:

1. **Head Section**: Contains metadata, page title, external links to fonts and CSS
2. **Header**: Fixed navigation bar with logo and menu items
3. **Hero Section**: Main landing section with typewriter effect
4. **About Section**: Personal introduction and background
5. **Skills Section**: Three categories of skills with animated progress bars
6. **Projects Section**: Filterable grid of project showcases
7. **Data Science Section**: Specialized data science portfolio
8. **Contact Section**: Contact form and information
9. **Footer**: Site navigation and newsletter signup

### CSS Architecture (style.css)

The CSS is organized into logical sections:

```css
/* CSS Variables (Custom Properties) */
:root {
  --primary-color: #4f46e5;      /* Main brand color */
  --secondary-color: #10b981;     /* Accent color */
  --bg-light: #ffffff;            /* Light background */
  --text-dark: #1f2937;           /* Text color */
  /* ... more variables */
}
```

**Key CSS Features:**
- **CSS Custom Properties**: All colors, spacing, and effects use CSS variables for easy theming
- **Dark Mode**: `.dark-mode` class overrides variables for dark theme
- **Responsive Design**: Mobile-first approach with media queries
- **Flexbox & Grid**: Modern layout techniques
- **Animations**: Smooth transitions and scroll-triggered animations
- **BEM-like Naming**: Clear, descriptive class names

### JavaScript Functionality (script.js)

The JavaScript code is modular and organized into distinct functions:

#### Main Initialization
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features when page loads
    initTypewriterEffect();
    initProjectFilters();
    initScrollAnimations();
    setupContactForm();
    initSkillBars();
});
```

#### Key Functions:

1. **`initTypewriterEffect()`**
   - Creates animated typing effect in hero section
   - Cycles through different professional titles
   - Simulates natural typing and deleting behavior

2. **`initProjectFilters()`**
   - Adds click handlers to filter buttons
   - Shows/hides projects based on selected category
   - Smooth fade-in/out animations

3. **`initScrollAnimations()`**
   - Uses Intersection Observer API
   - Triggers animations when elements enter viewport
   - Improves performance over scroll event listeners

4. **`setupContactForm()`**
   - Validates form inputs
   - Shows error messages for invalid fields
   - Simulates form submission with success message

5. **`initSkillBars()`**
   - Animates skill progress bars
   - Triggered when skill section enters viewport

6. **`toggleDarkMode()`**
   - Switches between light and dark themes
   - Saves preference to localStorage
   - Updates toggle button icon

7. **`checkDarkModePreference()`**
   - Loads saved theme preference on page load
   - Applies dark mode if previously enabled

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #4f46e5;      /* Change this to your preferred color */
  --secondary-color: #10b981;    /* Change accent color */
  --accent-color: #f59e0b;       /* Change highlight color */
}
```

### Adding New Projects

1. Copy a project item div in `index.html`
2. Update the content (title, description, tags)
3. Add appropriate class for filtering (`web-dev`, `data-viz`, or `machine-learning`)
4. Add project image and links

### Modifying Skills

Edit the skill items in the Skills section of `index.html`:
```html
<div class="skill-item">
  <div class="skill-info">
    <span class="skill-name">Your Skill</span>
    <span class="skill-percentage">XX%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-progress="XX"></div>
  </div>
</div>
```

### Updating Contact Information

Edit the contact section in `index.html` to update:
- Email address
- Phone number
- Location
- Social media links

## 📱 Responsive Breakpoints

The website adapts to different screen sizes:
- **Desktop**: 1200px and above (full layout)
- **Laptop**: 992px - 1199px (adjusted spacing)
- **Tablet**: 768px - 991px (stacked sections)
- **Mobile**: 767px and below (mobile menu, single column)

## ⚡ Performance Optimizations

- **Lazy Loading**: Images can be lazy-loaded for faster initial page load
- **CSS Custom Properties**: Reduces code duplication
- **Intersection Observer**: Efficient scroll-based animations
- **Minimal Dependencies**: Only essential external libraries
- **Optimized Images**: Use compressed images for better performance

## 🔒 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

Potential improvements for the portfolio:
- [ ] Add blog section for articles
- [ ] Integrate backend for contact form functionality
- [ ] Add testimonials carousel
- [ ] Implement PWA features (Service Worker, offline support)
- [ ] Add loading animations
- [ ] Integrate analytics (Google Analytics)
- [ ] Add project detail pages
- [ ] Implement email newsletter functionality

## 👤 Author

**Rakesh Chauhan**
- Portfolio: [rakeshdpr.github.io/portfolio](https://rakeshdpr.github.io/portfolio)
- LinkedIn: [linkedin.com/in/rakesh-kumar-chauhan](https://www.linkedin.com/in/rakesh-kumar-chauhan/)
- GitHub: [github.com/rakeshdpr](https://github.com/rakeshdpr)
- Email: rakeshchauhan17dpr@gmail.com

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for Poppins and Roboto Mono fonts
- Bootstrap team for the styling framework
- All open-source contributors who make web development easier

---

**Note**: This portfolio showcases a Web Developer and Data Scientist's work. Feel free to fork, customize, and use this template for your own portfolio website!