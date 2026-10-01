# grace.dev

## Overview

Personal portfolio of Grace Andaya — AI Engineer and Full Stack Developer. It is a responsive single-page site built with React, TypeScript, and Tailwind CSS that showcases my projects, tech stack, and professional experience.

## Live Demo

Visit the live site at: https://grace-dev.vercel.app/

## Features

- **Responsive Design**: Layout works across desktop, tablet, and mobile devices
- **Light / Dark Theme**: Theme toggle with the choice remembered between visits
- **Project Case Studies**: Each project has its own detail page at `/project/:projectId`, with a status badge (live, in progress, private, archived)
- **Contact Form**: Validated with Formik + Yup and delivered through EmailJS
- **Downloadable Resume**: Linked from the hero section

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router 7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest and Playwright
- **Deployment**: Vercel

**Last Updated**: October 2026

## Project Structure

```
e2e/                 Playwright end-to-end specs
public/              Favicons
src/
  assets/            Project screenshots and resume PDF
  components/        Page sections (Nav, Hero, Projects, About, Contact, Footer, ...)
  constants/         Tech stack list shown in the About section
  data/              Project content (projectsData.ts)
  hooks/             useTheme
```

To add or edit a project, update [`src/data/projectsData.ts`](src/data/projectsData.ts).

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js 24 or newer
- npm >= 9 (npm 10+ recommended)

Use nvm to match the project version:
```bash
nvm use
node -v
npm -v
```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/deathcuree/grace.dev.git
    cd grace.dev
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with your EmailJS credentials (only needed for the contact form to send messages):
    ```bash
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`

### Building for Production

1. Create a production build (type-checks first):
    ```bash
    npm run build
    ```

2. Preview the production build locally:
    ```bash
    npm run preview
    ```

## Testing

End-to-end tests run with **Playwright**. **Vitest** is set up for unit / component tests, but there are none yet.

```bash
# Type check
npm run typecheck

# Unit / component tests
npm test

# E2E tests (starts the dev server automatically)
npm run test:e2e

# E2E tests with the Playwright UI runner
npm run test:e2e:ui

# Open the last HTML report
npm run test:e2e:report
```

The first E2E run needs browsers installed once:

```bash
npx playwright install
```

E2E specs live in [`e2e/`](e2e/) and run on Chromium, Firefox, and WebKit.

## Future Updates

I am continually working to enhance this portfolio. Here are some of the planned updates:

- **Projects**: New projects will be added to showcase more of my work
- **Blog Section**: Adding a technical blog section
- **Testing**:
  - Vitest + React Testing Library component coverage
  - Lighthouse performance optimization
  - Broader Playwright E2E coverage (visual regression, accessibility checks)

## Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: nikaandaya21@gmail.com
- **LinkedIn**: [Grace Andaya](https://www.linkedin.com/in/graceandaya/)
