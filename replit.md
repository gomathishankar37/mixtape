# 🌻 For the Smile I Like 🌚 — Mixtape

A personal digital cassette tape — a warm, retro-styled music gift page. One link, seven Tamil film songs, meant to be opened by someone special.

## Run & Operate

- `pnpm --filter @workspace/mixtape run dev` — run the mixtape site locally
- `pnpm --filter @workspace/api-server run dev` — run the API server (not used by the mixtape site)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- React + Vite (static frontend, no backend)
- Tailwind CSS + Framer Motion for the retro cassette UI
- Spotify embed iframes for each track
- GitHub Actions → GitHub Pages for hosting

## Where things live

- `artifacts/mixtape/src/App.tsx` — main app, contains the `TRACKS` array at the top (line 3)
- `artifacts/mixtape/src/index.css` — full CSS with retro/warm palette, grain texture, Google Fonts
- `.github/workflows/deploy.yml` — GitHub Actions workflow for GH Pages deployment

## Adding Spotify Track IDs

Open `artifacts/mixtape/src/App.tsx`. At the top you'll see:

```js
const TRACKS = [
  { song: "Roja Kadale", spotifyTrackId: "SPOTIFY_ID_1" },
  ...
]
```

To get a real track ID:
1. Open Spotify → search for the song
2. Right-click the song → Share → Copy Song Link
3. The link looks like: `https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh`
4. The ID is the part after `/track/` → `4iV5W9uYEdYUVa79Axb7Rh`
5. Paste that into the matching `spotifyTrackId` field in App.tsx

## GitHub Pages Deployment

The GitHub Actions workflow is at `.github/workflows/deploy.yml`. It deploys automatically on every push to `main`.

Setup steps:
1. Create a GitHub repo named exactly **`mixtape`** (public)
2. Push this code to it: `git remote add origin https://github.com/gomathishankar37/mixtape.git && git push -u origin main`
3. In your GitHub repo → Settings → Pages → Source: set to `gh-pages` branch
4. Your site will be live at: **https://gomathishankar37.github.io/mixtape/**

## User Preferences

- Retro lo-fi cassette aesthetic; warm, wholesome, cute, lovely
- Tamil film songs only
- Static site; no backend, no login
- Host on GitHub Pages
