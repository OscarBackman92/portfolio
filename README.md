# ◆ OSCAR.B // DEV TERMINAL

A futuristic, **command-center style** developer portfolio for Oscar Bäckman.
Dark HUD aesthetic, glowing grid background, terminal panels and a live
**Mission Log** that pulls projects straight from the GitHub API.

🛠 **Built with:** React 19 · React Router 7 · EmailJS · a hand-written CSS design system (no UI framework)

---

## ⭐ Features

- **Command-center UI** — animated grid backdrop, glassmorphism panels with corner
  brackets, neon-cyan accents and a live UTC clock in the nav.
- **Live GitHub feed** — the Projects page fetches repos from the GitHub API,
  filters out forks/archived repos, sorts by stars, and offers a language filter.
  Includes loading skeletons, an empty state and graceful error/rate-limit handling.
- **Typewriter hero** — the home page cycles through roles in a terminal readout.
- **Operator dossier** — the About page styles bio, skills, certs and the diploma
  as an ID card (with a monogram fallback if the profile photo fails to load).
- **Comms channel** — the Contact form sends email through EmailJS with clear
  sending / success / error states.
- **Fully responsive** and respects `prefers-reduced-motion`.

---

## 🧱 Tech stack

| Layer        | Tech                                              |
| ------------ | ------------------------------------------------- |
| Framework    | React 19 (Create React App / `react-scripts` 5)   |
| Routing      | React Router 7 (`BrowserRouter`)                  |
| Styling      | Custom CSS design system + CSS variables          |
| Fonts        | Orbitron · Rajdhani · Share Tech Mono (Google)    |
| Data         | GitHub REST API (public, unauthenticated)         |
| Email        | EmailJS                                            |
| Prod server  | Express (`server.js`) — serves the static build   |

> There is **no Tailwind / Framer Motion** — everything is custom CSS in
> `src/index.css` (design tokens + primitives) and per-component `.css` files.

---

## 🛠 Local development

```sh
npm install
npm run dev        # React dev server with hot reload → http://localhost:3000
```

Other scripts:

```sh
npm run build      # production build into /build
npm test           # run the test suite
npm start          # serve the production build via Express (used by Heroku)
```

Edit your GitHub username in `src/components/GithubRepos.js`
(`GITHUB_USER`) and your EmailJS IDs in `src/components/Contact.js`.

---

## 🚀 Deployment — where to host it

This is a **static single-page app** (it only talks to the GitHub API from the
browser), so a static host is the simplest and cheapest option.

### ✅ Recommended: Netlify or Vercel (free, zero config)

1. Push this repo to GitHub.
2. Import the repo on [Netlify](https://netlify.com) or [Vercel](https://vercel.com).
3. Settings (usually auto-detected):
   - **Build command:** `npm run build`
   - **Publish / output directory:** `build`
4. Deploy. SPA routing already works — `public/_redirects` (Netlify) and
   `vercel.json` (Vercel) rewrite every path to `index.html`, so deep links like
   `/projects` won't 404.

### Heroku (already configured)

`Procfile`, `server.js` and the `heroku-postbuild` script are set up:

```sh
heroku create my-portfolio
git push heroku main
```

Express serves `/build` with an SPA fallback. Works, but Heroku has no free tier
and running a Node server just to serve static files is overkill — prefer
Netlify/Vercel.

### GitHub Pages — possible, with a caveat

A `gh-pages` script exists, **but** GitHub Pages has no SPA fallback, so direct
hits / refreshes on `/about`, `/projects`, `/contact` return 404 with
`BrowserRouter`. To use Pages, either switch to `HashRouter` in `src/index.js`
or add a `404.html` redirect hack. Netlify/Vercel avoid this entirely.

---

## 📬 Contact

- 🐙 GitHub: [OscarBackman92](https://github.com/OscarBackman92)
- 💼 LinkedIn: [Oscar Bäckman](https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/)
- 📧 Email: jan.oscar.backman@gmail.com
