# Sailing Knots — Nautical-themed React App

This change adds a small React app scaffold (Vite) with a nautical theme and a knot gallery. It uses inline SVGs for illustrations and a responsive grid.

Quick start:

```bash
cd "openspec/changes/sailing-knots-app"
npm install
npm run dev
```

Files added:
- package.json — install and run scripts
- index.html, vite.config.js
- src/ (App, components, data, styles)

Want me to run `npm install` and start the dev server now? Reply and I will run it here.

## Deployment

This project can be published to GitHub Pages.

1. Create a new GitHub repository and push your code there (see earlier commit message).
2. Install dependencies and build:

   ```bash
   npm install
   npm run build
   ```

3. You can deploy manually with:

   ```bash
   npm run deploy
   ```

   which uses the `gh-pages` package to push `dist/` to the `gh-pages` branch.

4. Alternatively the included GitHub Action (`.github/workflows/gh-pages.yml`) will automatically
   build and publish whenever you push to `main`.

After deployment the site will be available at:

```
https://<your‑user>.github.io/<repo-name>/
```

Configure Pages source in the repository settings if needed (the action does it automatically).