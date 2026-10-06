# Third Party Audit Report

## 1. EXTERNAL REQUESTS

| Resource | URL | Reference | Data Shared |
| :--- | :--- | :--- | :--- |
| Google Fonts CSS | `https://fonts.googleapis.com/css2?family=Inter...` | `index.html` | IP address (via CSS request) |
| Google Fonts WOFF2 | `https://fonts.gstatic.com/...` | (loaded via CSS) | IP address (via font request) |
| Vercel Analytics | (Loaded via `@vercel/analytics` package) | `src/main.tsx` (likely) | Browser/Device metadata, IP |
| Formspree | `https://formspree.io/f/xvkgaowb` | `src/pages/Contact.tsx` | Form content, IP, User-Agent |
| Instagram | `https://www.instagram.com/champsvisuals01/` | `src/components/Layout.tsx` | Only on click |
| WhatsApp | `https://wa.me/Champ_Oguru...` | `src/components/Layout.tsx` | Only on click |
| Favicon | `/favicon.png` | `index.html` | Local |
| Logo/Assets | `/logo.png`, etc. | various | Local |

## 2. FONTS

| Font Family | Weight(s) | Source | License |
| :--- | :--- | :--- | :--- |
| Inter | 400, 500, 600, 700, 800, 900 | Google Fonts | OFL |

## 3. IMAGES AND ASSETS

| Asset | Source | Type | License/Status |
| :--- | :--- | :--- | :--- |
| `logo.png`, `logo-black.png`, `logo-white.png` | Own Work | Logo | Internal |
| `favicon.png`, `favicon.svg` | Own Work | Icon | Internal |
| `og-image.png` | Own Work | Social | Internal |
| `awk-group-cover-16x10.png` | Client Work | Case Study | Internal/Authorized |
| `coming-soon-poster-*` | Own Work | Poster | Internal |
| `icons.svg` | Own Work | Icons | Internal |

**Audit Notes:** No hotlinked images found. All assets are served locally from `/public`.

## 4. DEPENDENCIES

Summary from `license-checker`:
- MIT: 16
- Apache-2.0: 1
- 0BSD: 1
- UNLICENSED: 1

**Flagged**: 1 UNLICENSED package.
