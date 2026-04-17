# SwiftSavior Emergency Response Frontend

A static multi-page frontend for an emergency ambulance response system.

## Tech stack
- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5 (CDN)
- Font Awesome (CDN)

## Project goals
- Present emergency response services clearly
- Provide simple navigation across pages
- Collect user input through login, registration, and contact forms

## Pages
- `index.html` (redirects to home)
- `home.html` (primary landing page)
- `Aboutus.html`
- `gallery.html`
- `services.html`
- `contactUs.html`
- `login.html`
- `register.html`
- `review.html`
- `homepage.html` and `navbar.html` (legacy/demo pages)

## Run locally
Because this is a static frontend, you can open `home.html` directly. For best behavior (paths, assets, browser restrictions), run a local server.

### Option 1: Python
```bash
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000).

### Option 2: VS Code Live Server
1. Open the project in VS Code.
2. Install the Live Server extension.
3. Run Live Server from `index.html` or `home.html`.

## Current improvements in this version
- Fixed navigation/path portability issues:
  - standardized `gallery.html` filename usage
  - replaced absolute image paths with relative paths
  - added `index.html` redirect entry point
- Improved form validation scripts:
  - fixed broken name validation wiring in `register.js`
  - improved email/phone/password validation rules
  - safer DOM handling for validation messages
- Improved accessibility and UX:
  - better page titles and meta descriptions
  - `aria-label` on navbar toggles
  - `aria-live` for validation feedback messages
  - corrected invalid HTML tags in reviews page
- Improved front-end performance and rendering:
  - lazy loading for non-critical images
  - deferred external scripts where applicable
  - responsive fixes for login/register/review layouts
- Added repository hygiene:
  - created `.gitignore` for common dev/build artifacts

## Folder structure
```text
.
├── Aboutus.html
├── contactUs.html
├── gallery.html
├── home.html
├── homepage.html
├── index.html
├── login.html
├── register.html
├── review.html
├── services.html
├── *.css
├── *.js
└── images/
```

## Notes
- This repository currently has no backend/API integration.
- Form submission is client-side validation only.
- If you plan to deploy on a Linux server, keep filename casing exactly as committed.

## Suggested next steps
1. Add a backend API for authentication and contact/review submissions.
2. Consolidate duplicated markup (navbar/footer) using server-side templates or a component-based frontend framework.
3. Add automated checks (HTML validation, linting, and accessibility audit).
4. Add CI for deployment and quality gates.
