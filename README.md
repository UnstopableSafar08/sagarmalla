# Sagar Malla - DevOps Engineer Portfolio

A modern, futuristic, fully responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Interactive floating particle background
- Custom animated cursor with trail effect
- Scroll progress indicator
- Glassmorphism UI cards
- Smooth animations with Framer Motion
- Dark mode aesthetic
- Fully mobile responsive
- SEO-friendly metadata

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- react-icons
- Lucide React icons
- Custom Canvas particle system

## Sections

1. **Hero** - Name, role, animated intro, social icons, CTA buttons
2. **About** - Bio, skills overview, contact info
3. **Experience** - Work history with detailed descriptions
4. **Skills** - 12 tech categories with icons and color coding
5. **Projects** - Featured projects with live demos
6. **Education** - Academic background and certifications
7. **Contact** - Contact form UI, social links

## Getting Started

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

## Docker Deployment

### Build the Docker image

```bash
docker build -t portfolio .
```

### Run the container

```bash
docker run -d -p 8080:80 --name portfolio portfolio
```

The site will be available at `http://localhost:8080`

### Using Docker Compose

```bash
docker-compose up -d
```

### Stop and remove

```bash
docker-compose down
```

## GitHub Pages Deployment

### Method 1: Using npm deploy script

```bash
npm run deploy
```

This will build the project and deploy to the `gh-pages` branch.

### Method 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` folder

3. Deploy to GitHub Pages:
   - Go to repository Settings > Pages
   - Select source as `gh-pages` branch
   - The site will be available at `https://username.github.io/portfolio/`

### Important Note

The `vite.config.js` is configured with `base: '/portfolio/'` for GitHub Pages deployment. If deploying to a custom domain or different repository, update this value accordingly.

## Project Structure

```
portfolio/
├── public/
│   ├── sagarmalla.gif
│   ├── sagarmalla_resume.pdf
│   └── certifications/
├── src/
│   ├── components/
│   │   ├── ParticleBackground.jsx
│   │   ├── CustomCursor.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Customization

All portfolio data is centralized in `src/data/portfolio.js`. Update this file to change:
- Personal information
- Skills (12 categories)
- Experience
- Education
- Projects
- Certifications
- Social links

## License

© 2024 Sagar Malla. All rights reserved.
