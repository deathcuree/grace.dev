# grace.dev

Portfolio of Grace Andaya, AI Engineer and Full Stack Developer. Live at https://grace-dev.vercel.app/

Built with React 18, TypeScript, Tailwind CSS, and Vite, and deployed on Vercel.

## Run locally

Requires Node.js 24+.

```bash
npm install
npm run dev        # http://localhost:5173
```

The contact form needs EmailJS keys in a `.env` file: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.

## Scripts

```bash
npm run build      # type-check and build
npm run test:e2e   # Playwright tests (first run: npx playwright install)
```

To add or edit a project, update [`src/data/projectsData.ts`](src/data/projectsData.ts).

## Contact

nikaandaya21@gmail.com · [LinkedIn](https://www.linkedin.com/in/graceandaya/)
