# Modern Personal Website Template

A responsive, animated personal portfolio website template built with HTML, CSS, and vanilla JavaScript. This template features a clean, professional design with smooth animations, interactive elements, and a fully responsive layout.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with gradient backgrounds
- ✨ Smooth scroll animations
- 🖼️ Image gallery with hover effects
- 💡 Interactive card components
- 📝 Contact form
- 🎯 Skills showcase section
- 🎭 Logo integration
- 📊 Portfolio grid layout

## File Structure

```
personal-website/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js          # JavaScript functionality
└── README.md          # Documentation
```

## Getting Started

### Prerequisites

- A modern web browser
- Basic text editor or IDE

### Installation

1. Clone the repository or download the files:
```bash
git clone https://your-repository-url/personal-website.git
```

2. Navigate to the project directory:
```bash
cd personal-website
```

3. Replace placeholder images:
   - Replace `/api/placeholder/50/50` in the logo section
   - Replace `/api/placeholder/400/300` in the gallery section with your own images

4. Open `index.html` in your web browser to view the site

## Customization

### Colors

The main color scheme can be modified in `styles.css`:

- Primary gradient: Edit the `background` property in the `.hero` class
- Accent color: Modify the blue color (`#007bff`) used throughout the CSS
- Card shadows: Adjust the `box-shadow` properties

### Content

1. **Profile Information**
   - Update the title and meta tags in `index.html`
   - Modify the hero section text
   - Edit the about section content

2. **Portfolio**
   - Add or remove portfolio cards in the grid section
   - Update project descriptions and titles

3. **Skills**
   - Modify the skill tags in the skills section
   - Add or remove skills as needed

4. **Gallery**
   - Add or remove image cards
   - Update image sources and alt text

### Styling

The website uses several CSS classes that can be customized:

- `.card` - Portfolio and about section cards
- `.skill-tag` - Individual skill tags
- `.image-card` - Gallery image containers
- `.nav-links` - Navigation menu items

## Animations

The template includes several animations:

1. **Scroll Animations**
   - Cards fade in and slide up when scrolled into view
   - Controlled by the Intersection Observer in `script.js`

2. **Hover Effects**
   - Card hover animations
   - Image zoom effects
   - Button and link transitions

3. **Page Load**
   - Hero section fade-in animation
   - Logo hover effect

## Browser Support

The template is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

The template is optimized for performance through:
- Minimal JavaScript usage
- CSS animations for better performance
- Responsive images
- No external dependencies

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Inspired by modern portfolio design trends
- Built with vanilla JavaScript for maximum compatibility
- Optimized for performance and user experience