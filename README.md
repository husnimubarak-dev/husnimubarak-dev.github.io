# Husni Mubarak — Portfolio

A production-ready static portfolio built with HTML and Tailwind CSS, deployed through GitHub Pages.

## Stack

- HTML
- Tailwind CSS v4
- Vanilla JavaScript
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run build
```

For CSS watch mode:

```bash
npm run dev
```

Then open the generated `dist/index.html` with a local static server.

## Deployment

Push to `main`. GitHub Actions builds the site and deploys the `dist/` directory to GitHub Pages.

## Before publishing

1. Replace `YOUR-USERNAME` in `src/index.html` with the GitHub Pages URL.
2. Add your CV at `src/assets/documents/Husni-Mubarak-CV.pdf`.
3. Optionally add a profile photo and update the hero card.
4. Update the LinkedIn URL if needed.
