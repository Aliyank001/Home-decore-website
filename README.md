# Luxe Home Décor Website

A modern, premium, and fully responsive home décor website with luxury aesthetics and smooth animations.

## 🌟 Features

### Pages
- **Home Page** - Full-screen hero, categories, collections, testimonials, newsletter
- **About Us** - Brand story, mission, values, trust indicators
- **Products/Collections** - Grid layout with filters, quick view modal
- **Services** - Interior styling, custom furniture, space planning, installation
- **Gallery** - Portfolio with lightbox and before/after comparisons
- **Contact** - Form with validation, map integration, FAQ section

### Design Features
- ✨ Clean, elegant, minimal design
- 🎨 Soft neutral color palette (white, beige, earthy tones)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth scroll and subtle animations
- 🖼️ High-quality placeholder images from Unsplash

### Functional Features
- 🔍 Product filtering by category and color
- 💫 Smooth page transitions and animations
- 💬 WhatsApp floating chat button
- 📧 Newsletter subscription form
- 📝 Contact form with validation
- 🎯 Testimonials slider
- 🖼️ Image lightbox gallery
- 🔄 Before/After image comparison slider
- ⬆️ Back to top button
- 📊 Animated trust indicators/counters
- ❓ FAQ accordion

## 📁 Project Structure

```
home decore demo/
├── index.html          # Home page
├── about.html          # About us page
├── products.html       # Products/Collections page
├── services.html       # Services page
├── gallery.html        # Gallery/Portfolio page
├── contact.html        # Contact page
├── css/
│   ├── style.css       # Main stylesheet
│   └── pages.css       # Additional page styles
└── js/
    ├── main.js         # Main JavaScript functionality
    ├── products.js     # Products page functionality
    └── gallery.js      # Gallery page functionality
```

## 🚀 Getting Started

1. **Open the website**
   - Simply open `index.html` in your web browser
   - No build process or server required

2. **Customize the content**
   - Replace placeholder text and images with your own
   - Update colors in CSS variables (in `style.css`)
   - Modify contact information in all pages

3. **Deploy**
   - Upload all files to your web hosting
   - Works with any standard web server (Apache, Nginx, etc.)

## 🎨 Color Palette

```css
--primary-color: #d4a574;    /* Gold/Beige */
--secondary-color: #2c2c2c;  /* Dark Gray */
--accent-color: #b8956a;     /* Muted Gold */
--bg-light: #faf8f5;         /* Off White */
--bg-white: #ffffff;         /* Pure White */
--text-primary: #2c2c2c;     /* Dark Text */
--text-secondary: #666666;   /* Medium Gray */
```

## 📝 Customization Guide

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #d4a574; /* Your primary color */
    --secondary-color: #2c2c2c; /* Your secondary color */
    /* ... other variables */
}
```

### Update Images
Replace Unsplash URLs with your own images:
- Hero backgrounds
- Product images
- Gallery images
- Category images

### Modify Content
- Update text in HTML files
- Change contact information
- Add/remove products
- Customize services

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, animations, grid & flexbox
- **JavaScript (Vanilla)** - No frameworks required
- **Font Awesome 6.4.0** - Icons
- **Google Fonts** - Montserrat & Cormorant Garamond

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact Integration

To make the contact form functional:
1. Set up a backend endpoint (PHP, Node.js, etc.)
2. Update form submission handler in `js/main.js`
3. Or use a service like Formspree, Netlify Forms, or EmailJS

## 🗺️ Google Maps Integration

Replace the map iframe src in `contact.html` with your location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## 💬 WhatsApp Integration

Update the WhatsApp number in all HTML files:
```html
<a href="https://wa.me/YOUR_NUMBER">
```

## 📦 Optional Enhancements

- Add a shopping cart system
- Implement user authentication
- Create an admin panel
- Add product wishlist functionality
- Integrate payment gateway
- Set up a blog section
- Add Instagram feed
- Implement product search

## 📄 License

This project is free to use for personal and commercial projects.

## 🙏 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ for Luxe Home Décor**
