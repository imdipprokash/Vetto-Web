# 🐾 Vetto — Pet Health Manager

> A clean, modern landing site for the **Vetto** mobile app — your all-in-one pet health manager.

![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## ✨ Overview

Vetto helps pet owners track vet visits, vaccinations, medications, and weight — all from one mobile app. This repository is the **marketing landing site** built with React, TypeScript, Vite, and Tailwind CSS.

**Live app:** Available on Android via Google Play *(coming soon)*

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, how it works, download CTA, Follow on LinkedIn added |
| `/about` | About — our story, mission, values, contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

---

## 🛠️ Tech Stack

- **[React 18](https://react.dev/)** — UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety
- **[Vite 6](https://vitejs.dev/)** — Lightning-fast dev server & bundler
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first styling
- **[React Router 6](https://reactrouter.com/)** — Client-side routing
- **[DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)** — Heading typeface
- **[Inter](https://fonts.google.com/specimen/Inter)** — Body typeface

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local development

```bash
# Clone the repo
git clone https://github.com/your-username/vetto-web.git
cd vetto-web

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
vetto-web/
├── public/
│   └── icon.png              # App icon (served as /icon.png)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with Google Play CTA
│   │   └── Footer.tsx        # Site footer
│   ├── pages/
│   │   ├── Home.tsx          # Landing page
│   │   ├── About.tsx         # About & values
│   │   ├── Privacy.tsx       # Privacy policy
│   │   └── Terms.tsx         # Terms of use
│   ├── App.tsx               # Router & layout shell
│   ├── main.tsx              # Entry point
│   └── index.css             # Tailwind base + component classes
├── index.html
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json               # SPA rewrite rules for Vercel
```

---

## ☁️ Deployment

This site is configured for **[Vercel](https://vercel.com)** out of the box.

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

The `vercel.json` handles SPA routing so all routes (e.g. `/about`, `/privacy`) work correctly on direct access or page refresh.

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

---

## 🎨 Design

- **Brand colour:** Forest green `#4a7c52`
- **Heading font:** DM Serif Display (editorial, modern serif)
- **Body font:** Inter (clean sans-serif)
- **Design philosophy:** Light, airy, lots of whitespace — inspired by modern app marketing sites

---

## 📬 Contact

For questions or support: **[support@vetto.org](mailto:support@vetto.org)**

---

<p align="center">Made with ❤️ for pet owners everywhere</p>
