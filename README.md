# Personal Portfolio Website

A modern, responsive personal portfolio website for Vivek V - AI & Full Stack Developer

## 🚀 Features

- **Modern & Minimal Design** - Clean UI with professional aesthetics
- **Dark/Light Mode** - Toggle between themes with persistent storage
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Fade, slide, and hover effects throughout
- **Interactive Elements** - Dynamic navigation, scroll effects, and form validation
- **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- **Fast Loading** - Minimal dependencies and optimized assets

## 📁 Project Structure

```
Portfolio_vivek/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **JavaScript (Vanilla)** - No frameworks, pure JS
- **Font Awesome** - Icons (CDN)

## 📋 Sections

1. **Navigation Bar** - Sticky navbar with smooth scrolling
2. **Hero Section** - Eye-catching introduction with CTA buttons
3. **About Me** - Professional summary and statistics
4. **Skills** - Categorized technical skills
5. **Projects** - Featured project showcase with links
6. **Experience** - Work experience timeline
7. **Education** - Academic background
8. **Certifications** - Professional certifications
9. **Contact** - Contact form and social links
10. **Footer** - Copyright and social media

## 🎨 Customization

### Update Personal Information

1. **Contact Details** (index.html):
   - Update email addresses (search for `your.email@example.com`)
   - Update GitHub URL (search for `yourusername`)
   - Update LinkedIn URL (search for `yourusername`)

2. **Project Links** (index.html):
   - Add your GitHub repository links to project cards
   - Add live demo links if available

3. **Resume Download** (index.html):
   - Add your resume PDF to the project folder
   - Update the download link in the hero section

### Customize Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --accent-primary: #667eea;    /* Primary accent color */
    --accent-secondary: #764ba2;  /* Secondary accent color */
    /* Modify other variables as needed */
}
```

### Add More Projects

Copy and paste a project card in the projects section and update the content:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn-icon"><i class="fab fa-github"></i> GitHub</a>
            <a href="#" class="btn-icon"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
    </div>
</div>
```

## 🚀 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Netlify

1. Create account on [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Site will be live instantly with a custom URL

### Vercel

1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process required!

For live reload during development, you can use:
- VS Code Live Server extension
- Python: `python -m http.server 8000`
- Node.js: `npx serve`

## 📝 Form Functionality

The contact form currently has frontend validation only. To make it functional:

1. **Using Formspree**:
   - Sign up at [Formspree](https://formspree.io)
   - Update form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

2. **Using EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com)
   - Add EmailJS SDK and configure in `script.js`

3. **Backend Integration**:
   - Create your own backend API
   - Update form submission handler in `script.js`

## 🎯 Performance Tips

- Images: Add actual project images and optimize them (use WebP format)
- Fonts: Consider hosting Font Awesome locally for faster loading
- Analytics: Add Google Analytics or similar for tracking
- SEO: Update meta tags with your actual information

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For any questions or suggestions, reach out via the contact form on the website.

---

**Built with ❤️ by Vivek V**
