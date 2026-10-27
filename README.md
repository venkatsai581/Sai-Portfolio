# Ketha Venkata Sai Krishna | Portfolio

A responsive, single-page developer portfolio for **Ketha Venkata Sai Krishna**, a Full Stack Developer based in Hyderabad, India. It showcases skills, projects, experience, an FAQ and a working contact form, with a light/dark theme.

## Features

- Sections for Home, About, Skills, Projects, FAQ and Contact, with smooth navigation
- Light and dark mode, remembered between visits and following the system preference on first load
- Scroll-reveal animations
- Project cards with screenshots, tech tags, live demo and GitHub links
- Education timeline and certifications
- Accordion FAQ
- Contact form delivered to email through Formspree
- Downloadable resume and fully responsive layout

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Icons | lucide-react |
| Fonts | Bricolage Grotesque, DM Sans (Google Fonts) |
| Forms | Formspree |

## Projects Featured

| Project | Stack |
| --- | --- |
| CommerceDesk Admin Dashboard | React, Vite, Charts, localStorage |
| SaaS Management Dashboard | React, Vite, Charts, localStorage |
| Travel & Booking Dashboard | React, CRUD, Charts |
| HR Management Dashboard | React, Vite |
| Auth and User Access Portal | React, Vite |
| Help Desk Support App | React, Vite |
| BikeHub Application | React, Context, useReducer, React Router |
| Online Book Store | JavaScript, Axios, JSON Server |

## Project Structure

```
vsk_portfolio/
├── public/
│   ├── profile.jpg          # Profile photo
│   ├── Resume.pdf           # Downloadable resume
│   └── projects/            # Project screenshots (.webp)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx      # Formspree form
│   │   ├── Footer.jsx
│   │   └── ui.jsx           # Shared UI pieces
│   ├── data.js              # All site content
│   ├── App.jsx              # Layout, theme toggle, reveal observer
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

**Prerequisites:** Node.js 18 or later and npm.

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:5173
npm run dev

# Create a production build in dist/
npm run build

# Preview the production build locally
npm run preview
```

## Customizing

- **Content:** edit `src/data.js` for your name, role, email, socials, skills, projects, timeline, certifications and FAQs.
- **Projects:** add an entry to `projects` in `src/data.js` and put its screenshot in `public/projects/`, then point `image:` at it.
- **Photo and resume:** replace `public/profile.jpg` and `public/Resume.pdf`, keeping the same file names.
- **Contact form:** the form posts to Formspree. To use your own endpoint, create a form at [formspree.io](https://formspree.io) and replace the form ID in the `fetch` URL in `src/components/Contact.jsx`.
- **Colors and fonts:** adjust `tailwind.config.js`, `src/index.css` and the font links in `index.html`.

## Deployment

The site is a static build, so it deploys on any static host.

**Vercel or Netlify**

1. Push the repository to GitHub.
2. Import it on Vercel or Netlify.
3. Use build command `npm run build` and output directory `dist`.

## Contact

- **Email:** kethavenkat04@gmail.com
- **GitHub:** [venkatsai581](https://github.com/venkatsai581)
- **LinkedIn:** [ketha-venkata-sai-krishna](https://www.linkedin.com/in/ketha-venkata-sai-krishna)