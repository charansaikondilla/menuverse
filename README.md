<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/10TYjvaMJjXN8uVfuX3mFCH3beqHYiCRB

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Google Analytics (optional) — local setup (no push)

If you want to add Google Analytics (GA4) but don't want to publish to GitHub Pages until configured, follow these steps locally:

1. Copy `.env.example` to `.env.local`:

```powershell
cp .env.example .env.local
```

2. Edit `.env.local` and set your GA Measurement ID (example `G-XXXX...`):

```text
VITE_GA_ID=G-XXXXXXXXXX
GEMINI_API_KEY=PLACEHOLDER_API_KEY
```

3. Build the site locally (this writes the production output to `docs/`):

```powershell
npm run build:pages
```

4. Verify that the built `docs/index.html` contains your GA ID (search for `G-`):

```powershell
select-string -Path .\docs\index.html -Pattern "G-"
```

5. Open `docs/index.html` in a browser (double-click or use a simple static server) to test.

Notes:
- Do NOT commit `.env.local` to git. The repository already ignores `*.local` in `.gitignore`.
- I will not push or enable GitHub Pages for you; when you're ready, run a build and push the `docs/` directory to `main`.

If you'd like, I can add a helper npm script that builds and creates a commit for `docs/` locally (still no push). Tell me if you want that.
