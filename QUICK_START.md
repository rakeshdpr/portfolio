# Quick Start Guide

Welcome to the Portfolio Website documentation! This guide will help you navigate the available documentation and get started quickly.

## 📚 Documentation Overview

This project includes three main documentation files:

### 1. **README.md** - General Overview
- Project introduction and features
- Getting started instructions
- Installation and deployment guides
- Quick customization guide
- **Best for**: Users who want to use or deploy the portfolio

### 2. **DOCUMENTATION.md** - Technical Deep Dive
- Detailed code architecture
- HTML/CSS/JavaScript structure
- Design system specification
- Development guidelines
- **Best for**: Developers who want to understand or modify the code

### 3. **QUICK_START.md** (this file)
- Navigation guide to all documentation
- Quick reference for common tasks
- **Best for**: Quick lookups and getting oriented

## 🚀 Common Tasks

### I want to...

#### **Use this portfolio template for myself**
1. Read: [README.md - Getting Started](README.md#-getting-started)
2. Follow: Installation instructions
3. Customize: [README.md - Customization Guide](README.md#-customization-guide)

#### **Understand how the code works**
1. Read: [DOCUMENTATION.md - Architecture Overview](DOCUMENTATION.md#architecture-overview)
2. Study: [DOCUMENTATION.md - JavaScript Modules](DOCUMENTATION.md#javascript-modules)
3. Review: [DOCUMENTATION.md - CSS Architecture](DOCUMENTATION.md#css-architecture)

#### **Change the colors or theme**
1. Location: `style.css` (lines 1-42)
2. Guide: [README.md - Changing Colors](README.md#changing-colors)
3. Reference: [DOCUMENTATION.md - Design System](DOCUMENTATION.md#design-system)

#### **Add a new project**
1. Guide: [README.md - Adding New Projects](README.md#adding-new-projects)
2. Location: `index.html` (lines 254-397)
3. Example: Copy existing project item and modify

#### **Modify the contact form**
1. Location: `index.html` (lines 603-627)
2. JavaScript: `script.js` - `setupContactForm()` function
3. Guide: [DOCUMENTATION.md - Form Integration](DOCUMENTATION.md#form-integration)

#### **Add a new section**
1. Guide: [DOCUMENTATION.md - Adding a New Section](DOCUMENTATION.md#adding-a-new-section)
2. Follow: Step-by-step instructions for HTML, CSS, and JavaScript

#### **Deploy the website**
1. Read: [README.md - Deployment](README.md#deployment)
2. Choose: GitHub Pages, Netlify, or Vercel
3. Follow: Platform-specific instructions

#### **Fix a bug or issue**
1. Check: [DOCUMENTATION.md - Troubleshooting](DOCUMENTATION.md#troubleshooting)
2. Debug: Common issues and solutions
3. Verify: Testing checklist

## 📋 File Structure Quick Reference

```
portfolio/
├── README.md              # Project overview and getting started
├── DOCUMENTATION.md       # Technical documentation
├── QUICK_START.md        # This file - navigation guide
├── index.html            # Main HTML file (32KB)
├── style.css             # All CSS styles (21KB)
├── script.js             # JavaScript functionality (8KB)
├── package.json          # Node dependencies
├── Resume.pdf            # Downloadable CV
└── images/               # Image assets
    └── profile.png       # Profile picture
```

## 🎯 Key Features Quick Reference

| Feature | File | Lines | Function |
|---------|------|-------|----------|
| Typewriter Effect | script.js | 24-61 | `initTypewriterEffect()` |
| Project Filters | script.js | 64-96 | `initProjectFilters()` |
| Scroll Animations | script.js | 99-118 | `initScrollAnimations()` |
| Contact Form | script.js | 121-192 | `setupContactForm()` |
| Skill Bars | script.js | 195-216 | `initSkillBars()` |
| Dark Mode | script.js | 219-248 | `toggleDarkMode()` |
| CSS Variables | style.css | 2-42 | `:root` |
| Responsive Design | style.css | 981-1122 | Media queries |

## 🎨 Design System Quick Reference

### Colors
```css
Primary (Indigo):   #4f46e5
Secondary (Emerald): #10b981
Accent (Amber):     #f59e0b
```

### Breakpoints
- Desktop: 1200px+
- Laptop: 992px - 1199px
- Tablet: 768px - 991px
- Mobile: < 768px

### Fonts
- Primary: Poppins (sans-serif)
- Monospace: Roboto Mono

## 🔧 Development Commands

```bash
# Clone repository
git clone https://github.com/rakeshdpr/portfolio.git

# Install dependencies (optional)
npm install

# Open in browser
open index.html

# Start local server (Python)
python -m http.server 8000

# Start local server (Node.js)
npx http-server
```

## 📱 Browser Testing

Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Quick Debugging

| Issue | Solution |
|-------|----------|
| Typewriter not working | Check `#typewriter-text` element exists |
| Dark mode not persisting | Enable localStorage in browser |
| Animations not triggering | Check browser supports Intersection Observer |
| Form not validating | Verify input IDs match JS selectors |
| Mobile menu not toggling | Check IDs: `mobile-menu-toggle`, `nav-menu` |

## 📖 External Resources

- [Font Awesome Icons](https://fontawesome.com/v6/icons)
- [Google Fonts](https://fonts.google.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💡 Pro Tips

1. **Customizing**: Start with CSS variables in `:root` for quick theme changes
2. **Testing**: Use browser dev tools to test responsive design
3. **Performance**: Keep images optimized and consider lazy loading
4. **Accessibility**: Test with keyboard navigation and screen readers
5. **SEO**: Update meta tags in `<head>` section for better search rankings

## 🆘 Getting Help

1. Check [DOCUMENTATION.md - Troubleshooting](DOCUMENTATION.md#troubleshooting)
2. Review [README.md - FAQ](README.md) (if applicable)
3. Check browser console for JavaScript errors
4. Validate HTML at [W3C Validator](https://validator.w3.org/)
5. Open an issue on GitHub (if repository has issues enabled)

## 📞 Contact

For questions about this portfolio:
- Email: rakeshchauhan17dpr@gmail.com
- GitHub: [@rakeshdpr](https://github.com/rakeshdpr)
- LinkedIn: [Rakesh Kumar Chauhan](https://www.linkedin.com/in/rakesh-kumar-chauhan/)

---

**Note**: This guide provides quick navigation to the main documentation. For detailed explanations, always refer to README.md and DOCUMENTATION.md.

**Last Updated**: January 2026
