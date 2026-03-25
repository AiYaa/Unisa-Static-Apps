# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A collection of static web applications for the University of South Africa (Unisa), Western Cape campus. No build process, no package manager — all apps are served as plain HTML/CSS/JavaScript files, suitable for GitHub Pages or any static host.

## Development

No build or install step. Open any `index.html` directly in a browser or serve with any static file server:

```bash
# Example: serve root with Python
python -m http.server 8080
# or Node
npx serve .
```

No linting or test tooling is configured.

## Architecture

The repo contains four independent apps sharing no runtime code between them:

| App | Path | Purpose |
|-----|------|---------|
| Portal | `/index.html` | Landing page linking to all apps |
| Proctoring Lookup | `/proctoring-lookup/` | Client-side search/filter over a static HTML table of proctoring module info |
| WC Recordings | `/wc-recordings/` | Media player for web class recordings, data driven by `Recordings.js` |
| WC Schedule | `/wc-schedule/` | Timetable fetched from Google Drive API, rendered with DataTables |
| 3D Embroidery | `/3dfiles/Embroidery/` | AR-capable 3D viewer using Smithsonian Voyager |

### Common patterns across apps

- **No module system** — all JS is loaded via `<script>` tags; state lives in global variables (`PARSEDEVENTS`, `FILTER`, etc.)
- **jQuery + Bootstrap 4** are the primary UI dependencies, loaded from local vendor files or CDN
- **DOM construction** uses `document.createElement` helper patterns (see `ui.js` in each app)
- **Data fetching** uses `XMLHttpRequest` or jQuery AJAX, not the Fetch API

### WC Schedule data flow

`script.js` → calls Google Drive REST API → raw data passed to `parseData.js` → parsed events stored globally → `ui.js` + `eventsTable.js` render DataTables. The schedule auto-refreshes every 30 minutes via `setInterval`.

### WC Recordings data flow

Static data defined in `Recordings.js` and `Modules.js` → parsed by `parseData.js` → rendered by `ui.js` using MediaElement.js for playback. `appConfig.js` holds view/state constants.

## External Dependencies

All vendor libraries are bundled locally (no npm). External runtime dependencies:

- **Google Drive API** — `wc-schedule/js/script.js` contains a hardcoded API key; keep this key scoped to read-only Drive access
- **Smithsonian Voyager** — loaded from `3dfiles/Embroidery/3d.html` via CDN for the 3D viewer
- **GitHub Pages** — canonical hosting at `https://aiyaa.github.io/Unisa-Static-Apps/`
