# Oscar Bäckman — Portfolio

Professionell portfolio för Oscar Bäckman: Business Operations och Full Stack-utveckling.
Nordisk editorial-design med tydlig varumärkessignal, svenska texter och live-projekt från GitHub.

**Byggd med:** React 19 · React Router 7 · EmailJS · egen CSS-designsystem (inget UI-ramverk)

---

## Funktioner

- **Professionell startsida** — full-bleed hero med namnet som huvudsignal, en rubrik, kort ingress och tydliga CTA:er
- **Live GitHub-projekt** — hämtar repos via GitHub API, filtrerar bort forks/arkiverade, sorterar efter stjärnor och erbjuder språkfilter, loading-skeletons och felhantering
- **Om-sida** — profil, kompetenser, certifieringar, utbildning och diplom (med fallback om bild saknas)
- **CV** — strukturerad erfarenhet, kompetenser och utbildning, med PDF-nedladdning
- **Kontaktformulär** — skickar via EmailJS med tydliga statuslägen (skickar / lyckades / fel)
- **Responsiv** och respekterar `prefers-reduced-motion`

---

## Design

| Token / lager | Val |
| ------------- | --- |
| Stilriktning | Nordisk editorial — bläckgrönt, soft mint, lugn typografi |
| Display | Fraunces |
| Brödtext | Outfit |
| Mono | IBM Plex Mono |
| Tokens | CSS-variabler i `src/index.css` |
| Komponentstil | Egna `.css`-filer per komponent |

Ingen Tailwind eller Framer Motion — designsystemet ligger i `src/index.css` (tokens + primitives) och i respektive komponent-CSS.

---

## Sidor

| Route | Innehåll |
| ----- | -------- |
| `/` | Hero / startsida |
| `/about` | Om mig |
| `/projects` | GitHub-projekt |
| `/cv` | Curriculum Vitae + PDF |
| `/contact` | Kontaktformulär |
| `*` | 404 |

---

## Tech stack

| Lager | Teknik |
| ----- | ------ |
| Framework | React 19 (Create React App / `react-scripts` 5) |
| Routing | React Router 7 (`BrowserRouter`) |
| Styling | Custom CSS + CSS-variabler |
| Data | GitHub REST API (publik, utan autentisering) |
| E-post | EmailJS |
| Hosting | Vercel (statisk SPA, ingen Node-server) |

---

## Lokal utveckling

```sh
npm install
npm run dev        # utvecklingsserver → http://localhost:3000
```

Övriga script:

```sh
npm run build      # produktionsbuild till /build
npm test           # tester
npm start          # samma som npm run dev
```

Konfiguration:

- GitHub-användare: `GITHUB_USER` i `src/components/GithubRepos.js`
- EmailJS: service-, template- och public key i `src/components/Contact.js`
- Profilbild (valfritt): `public/profile.jpg`
- CV-PDF: `public/cv/oscar-backman-cv.pdf`

---

## Deployment

Appen är en **statisk SPA** (GitHub API anropas från webbläsaren). Statisk hosting är enklast.

### Rekommenderat: Vercel eller Netlify

1. Pusha repot till GitHub.
2. Importera projektet på [Vercel](https://vercel.com) eller [Netlify](https://netlify.com).
3. Inställningar (ofta auto-detekterade):
   - **Build command:** `npm run build`
   - **Output / publish directory:** `build`
4. SPA-routing är redan konfigurerad via `vercel.json` och `public/_redirects`, så djuplänkar som `/projects` fungerar.

### GitHub Pages

Scriptet `gh-pages` finns, men GitHub Pages saknar SPA-fallback. Direkta träffar på `/about`, `/projects` m.fl. ger 404 med `BrowserRouter`. Byt till `HashRouter` i `src/index.js`, eller använd Vercel/Netlify.

---

## Kontakt

- GitHub: [OscarBackman92](https://github.com/OscarBackman92)
- LinkedIn: [Oscar Bäckman](https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/)
- E-post: jan.oscar.backman@gmail.com
