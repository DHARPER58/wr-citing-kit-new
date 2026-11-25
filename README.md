# WR Citing Kit

An offline app for a World Rugby Citing Commissioner:

* **Form Filler**: turns a Report tab's payload from the match workbook into a filled WR Citing Commissioner Report or Citing Commissioner Warning (CCW) PDF, with screen grabs and clip links.
* **New match workbook**: a fresh blank copy of the Citing Commissioner Match Workbook for each match.

Once installed, it works with **no internet connection**. Everything runs on the device; nothing you enter is uploaded anywhere. This site only holds the blank workbook, the blank WR forms and the app code.

---

## 1. Put it on GitHub (once, about 5 minutes, on the laptop)

1. Sign in at **github.com**. Create a free account if you don't have one.
2. Click **+** (top right) → **New repository**.
   * Repository name: `wr-citing-kit`
   * Visibility: **Public**. Free GitHub Pages needs a public repository. The site only contains the blank template and app code; your match data never goes there.
   * Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip `wr-citing-kit.zip` on the laptop. Open the `wr-citing-kit` folder, select **everything inside it** (including the `icons` folder) and drag it into the browser window. Click **Commit changes**.
5. Go to **Settings** → **Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*, **Branch** to `main` and folder `/ (root)`. Click **Save**.
6. Wait 1–2 minutes and refresh. GitHub shows *"Your site is live at"*:
   `https://<your-github-username>.github.io/wr-citing-kit/`

Note: the `.nojekyll` file may be hidden by Windows Explorer. It doesn't matter if it's left out.

## 2. Install on the HP Windows 11 laptop (needs internet once)

1. Open the site address in **Microsoft Edge**.
2. Wait until it shows **✓ Ready offline**.
3. Click the **App available / Install** icon at the right of the address bar (or **⋯** → **Apps** → **Install this site as an app**) → **Install**.
4. **WR Citing Kit** now has its own window, and a Start-menu and taskbar entry. It opens with Wi-Fi off.

The workbook opens in **Excel for Windows**, which works offline with files saved on the laptop.

## 3. Install on the iPad mini (needs internet once)

1. Open the site address in **Safari**. It must be Safari, not Chrome.
2. Wait until it shows **✓ Ready offline**.
3. Tap **Share** (square with an up-arrow) → **Add to Home Screen** → **Add**.
4. Open **Citing Kit** from the Home Screen once while still online and check it says **✓ Ready offline**. It then works with no connection.
5. Install **Microsoft Excel** from the App Store and sign in once with a Microsoft account. On an iPad mini, Microsoft allows free editing because the screen is under 10.1". After that, Excel works offline for files kept **On My iPad**.

## Using it at a match

1. **Citing Kit → Get blank workbook**. Type the match name first to name the file.
   * Laptop: it saves to Downloads.
   * iPad: **Save to Files** → *On My iPad* → a "Citing" folder, then open it in Excel.
2. Work through the workbook as usual: Setup, Teams, Live_Log, Review, Reports and one Report tab per citing or CCW.
3. On the Report tab, copy the red **payload** cell → Citing Kit → **Form Filler** → paste.
4. Add clip links and screen grabs → **Download filled PDF**.
   * iPad: tap **Save / Share PDF…** → **Save to Files**.
5. Send the PDF and evidence to the TO / DDO when you have a connection.

## Updating the app later

1. In the repository, upload the changed files (for example a new workbook or `filler.html`).
2. Edit `sw.js` and change `const VERSION = "1.0.0"` to `"1.0.1"` (then `1.0.2` and so on), so devices know there's an update. Commit.
3. The next time each device opens the app **with** a connection, it shows **"A new version is ready – Update now"**.

---

*Aide-memoire only. It is not a substitute for Regulation 17, the Laws of the Game, competition terms or the official forms.*
