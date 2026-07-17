# Kuldeep Amreliya — Portfolio (Vol.01)

Awwwards-style personal portfolio. Kinetic hero, editorial marquee,
numbered manifesto, spotlight project cards, duotone portrait triptych,
Lenis smooth scroll, framer-motion micro-interactions.

## Getting started

```bash
cd frontend
npm install
npm start
```

Opens at http://localhost:3000

## Build for production

```bash
cd frontend
npm run build
```

Output goes to `frontend/build/` — upload that folder's contents to any
static host (Vercel, Netlify, GitHub Pages, etc).

## Editing your content

Everything text-based (name, roles, projects, skills, experience,
education, links) lives in one file:

`frontend/src/lib/data.js`

## Replacing images / resume

- Portrait photos: `frontend/public/images/` (portrait-a.jpeg,
  portrait-b.jpeg, portrait-wide.jpeg) — swap in new files with the
  same names, or update the paths in `data.js`.
- Resume PDF: `frontend/public/resume/` — replace the file and update
  `resumeUrl` in `data.js` if you rename it.
- Project images currently point to Unsplash stock URLs in `data.js`
  (`PROJECTS[].image`) — replace with real screenshots any time by
  swapping the URL or pointing to a local file in `public/images/`.

## Deploying

Easiest options:
- **Vercel**: `npm i -g vercel`, then `vercel` from the `frontend` folder.
- **Netlify**: drag-and-drop the `build` folder after `npm run build`.
- **GitHub Pages**: build, then push `build/` contents to a `gh-pages` branch.

## Notes

- Dark mode only — no light theme toggle, this is the committed art direction.
- Custom cursor is disabled on mobile/touch (falls back to native cursor).
- Fonts (Clash Display, Satoshi, Fraunces, JetBrains Mono) load from
  Fontshare/Google Fonts CDNs — requires internet access on first load.
