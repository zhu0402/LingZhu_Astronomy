# Galaxy Dynamics Research Group Website

Official website for the Galaxy Dynamics Research Group led by Dr. Ling Zhu at Shanghai Astronomical Observatory, Chinese Academy of Sciences.

The project is built with React and Vite. It includes bilingual English/Chinese content, responsive layouts, animated sections, research highlights, member profiles, and opportunity information.

## Features

- Hero section with headline, subtitle, and call-to-action buttons
- About section introducing the group's mission and research areas
- Research section for projects and scientific highlights
- Members section for faculty, postdocs, students, and alumni
- Opportunities section for recruitment and contact details
- Footer with institutional information and navigation links
- English/Chinese language switching
- Responsive design for desktop, tablet, and mobile screens

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- ESLint
- PostCSS
- GitHub Pages deployment via `gh-pages`

## Requirements

- Node.js 20.19+ or 22.12+
- npm

Vite 7 requires a recent Node.js version. If your local Node version is older, upgrade Node before running the project.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/LiZhu111/REACT2026.git
cd REACT2026
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site will run locally at the URL printed in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the production version into the `dist/` directory.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run deploy
```

Deploys the built site to GitHub Pages using `gh-pages`.

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Research.jsx
    ResearchItem.jsx
    Member.jsx
    MemberCard.jsx
    Opportunities.jsx
    Footer.jsx
    ScrollReveal.jsx
  data/
    siteContent.js
    siteContentZH.js
    memberData.js
    memberDataZH.js
    researchData.js
    researchDataZH.js
  hooks/
    useTranslation.js
  App.jsx
  main.jsx
  index.css

public/
  assets/
    icons/
    members/
    research/
```

## Content Management

Most page content is stored in `src/data/`.

- `siteContent.js`: English site copy and section configuration
- `siteContentZH.js`: Chinese site copy and section configuration
- `memberData.js`: English member data
- `memberDataZH.js`: Chinese member data
- `researchData.js`: English research data
- `researchDataZH.js`: Chinese research data

To update text, members, research items, or section styling, edit the corresponding data file. Components are designed to read from these data files so content can be updated without changing the main component logic.

## Internationalization

The project uses a custom `useTranslation()` hook to load content for the active language.

```jsx
const { hero } = useTranslation();
```

The language switch in the navigation toggles between English and Chinese content.

## Deployment

The project is configured for GitHub Pages:

```json
"homepage": "https://LiZhu111.github.io/REACT2026"
```

Build and deploy:

```bash
npm run build
npm run deploy
```

## Contact

- Email: lzhu@shao.ac.cn
- Institution: Shanghai Astronomical Observatory, Chinese Academy of Sciences
- Address: 80 Nandan Road, Xuhui District, Shanghai 200030, China

## License

Copyright 2026 Galaxy Dynamics Group. All rights reserved.
