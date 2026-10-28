# Job Tracker PWA – Installation Guide

## How to install on iPhone (free, no App Store)

### Step 1 — Host on GitHub Pages (free)

1. Go to **github.com** and create a free account if you don't have one
2. Click **New repository** → name it `job-tracker` → set to **Public** → click **Create**
3. Upload all files from this folder:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` folder (all 5 PNG files inside)

   To upload: click **"uploading an existing file"** on the repo page, drag all files/folders in.

4. Go to **Settings → Pages** (left sidebar)
5. Under "Source" select **Deploy from a branch** → branch: **main** → folder: **/ (root)**
6. Click **Save** — GitHub will give you a URL like: `https://yourusername.github.io/job-tracker/`

### Step 2 — Install on iPhone

1. Open the URL above in **Safari** on your iPhone (must be Safari, not Chrome)
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "Job Tracker" → tap **Add**
5. The app icon appears on your Home Screen — tap it to open in full-screen mode

### That's it!
The app works **offline** after the first load. All data is stored locally on your device (localStorage). 
Use the **Export** button regularly to back up your data as a JSON file.

---

## Alternative: serve locally on your Mac (for testing)

```bash
cd path/to/job-tracker-pwa
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

Note: PWA features (install prompt, offline) require HTTPS — use GitHub Pages for the full experience.
