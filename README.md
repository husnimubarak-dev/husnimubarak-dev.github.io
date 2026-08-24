# Husni Mubarak — Portfolio

Static portfolio for GitHub Pages.

## Stack

- HTML
- Tailwind CSS via CDN
- Vanilla JavaScript
- GitHub Pages

## Deployment

This version intentionally has **no npm/build step**.

GitHub Actions uploads the repository root directly. The deployed artifact contains:

```text
index.html
assets/
```

with `index.html` at the artifact root.

## Update

Edit `index.html`, commit, and push to `main`. GitHub Actions automatically deploys the update.

## Before publishing

- Replace the photo placeholder with your profile photo if desired.
- Add `assets/documents/Husni-Mubarak-CV.pdf` if you want a CV download button.
- Review project descriptions and add concrete, non-confidential details.
