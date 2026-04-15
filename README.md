# Witch.com 🎂✨

A special birthday website for Ala's 24th birthday! This interactive scroll-based website takes you through a journey of past birthday wishes and culminates in a humorous "threat level" warning poster.

## Features

- 📱 **Fully Responsive**: Works seamlessly on both desktop and mobile devices
- 🎨 **Scroll-Based Animations**: Smooth transitions as you scroll through memories
- 🖼️ **Image Gallery**: Displays past birthday wishes from 2023, 2024, and 2025
- 🎭 **Interactive Finale**: A creative "wanted poster" style birthday message
- ⌨️ **Keyboard Navigation**: Use arrow keys to navigate between sections
- 👆 **Touch Gestures**: Swipe up/down on mobile devices
- 🎉 **Easter Egg**: Click the alert badge 5 times for a surprise!

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub (e.g., `ala-birthday-2026`)
2. Upload all files from this directory to the repository
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select the `main` branch and `/ (root)` folder
6. Click Save
7. Your site will be available at: `https://[your-username].github.io/[repository-name]/`

### Option 2: Using Git Command Line

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Ala's 24th birthday website"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Option 1.

## File Structure

```
Witch.com/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # Interactive animations and scroll effects
├── .nojekyll          # GitHub Pages configuration
├── Images/
│   ├── Starting.jpeg   # Background image for intro
│   └── Ending.jpeg     # Image for the wanted poster
└── Past_wishes/
    ├── 2023.jpeg       # Birthday wish from 2023
    ├── 2024.jpeg       # Birthday wish from 2024
    └── 2025.jpeg       # Birthday wish from 2025
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Intersection Observer API for scroll animations
- CSS animations and transitions

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Development

Simply open `index.html` in your web browser. No build process or server required!

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## Customization

To customize for future birthdays:
1. Update the year and age in `index.html`
2. Add new images to the `Past_wishes/` folder
3. Update image paths in `index.html`
4. Modify the threat level message as desired

---

Made with 🪄✨ for Ala's 24th Birthday