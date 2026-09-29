# Portfolio Project

## Overview

Welcome to my portfolio project! This is a modern, responsive personal portfolio website built using React and styled with Tailwind CSS. The site showcases my projects, skills, and professional experience in an elegant and user-friendly interface.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface with smooth animations and transitions
- **Technology Stack**:
  - **Frontend**: React 18 (JavaScript) via Vite
  - **Styling**: Tailwind CSS for modern, utility-first styling
  - **Build Tool**: Vite for fast development and optimized production builds
  - **Deployment**: Hosted on [Your Hosting Platform]
- **Status**: Production-ready static site
- **Last Updated**: January 2024

## Live Demo

Visit the live site at: https://grace-dev.vercel.app/

## Future Updates

I am continually working to enhance this portfolio. Here are some of the planned updates:

- **Projects**: New projects will be added to showcase more of my work
- **Blog Section**: Adding a technical blog section
- **Testing**:
  - Expanded Vitest + React Testing Library component coverage
  - Lighthouse performance optimization
  - Broader Playwright E2E coverage (visual regression, accessibility checks)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js 22.x LTS
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
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory (if needed):
    ```bash
    cp .env.example .env
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`

### Building for Production

1. Create a production build:
    ```bash
    npm run build
    ```

2. Preview the production build locally:
    ```bash
    npm run preview
    ```

## Testing

Unit / component tests run with **Vitest** and end-to-end tests with **Playwright**.

```bash
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

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: nikaandaya21@gmail.com
- **LinkedIn**: [Grace Andaya](https://www.linkedin.com/in/graceandaya/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
