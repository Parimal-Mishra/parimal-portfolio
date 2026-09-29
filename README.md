# Parimal Mishra | Portfolio

A responsive, single-page portfolio for Parimal Mishra, a Computer Science undergraduate at ABES Engineering College. It brings together projects, technical interests, education, leadership experience, coding profiles, and personal interests in one place.

The site is built with plain HTML, CSS, and JavaScript. There is no application framework, package manager, build step, or server-side component.

## Portfolio contents

- **Profile and contact:** An introduction, about modal, email link, and social profiles.
- **Photo gallery:** A rotating photo carousel with previous/next controls and thumbnail shortcuts.
- **Music:** An embedded Spotify playlist with a link to open it in Spotify.
- **Interests:** An expandable overview of the Indian Army, Navy, and Air Force, plus the 15 Officer Like Qualities.
- **Experience:** Expandable entries for Trishul and GENERO'26.
- **Projects:** Selected software and research projects, with links to their repositories where available.
- **Skills:** A technology marquee and grouped skills across backend, AI/ML, web, and tools.
- **Profiles and activity:** Coding-platform links and a GitHub contribution chart.
- **Education:** University and school history.
- **Resume:** A resume modal and download links for the included PDF.

## Project files

| Path | Purpose |
| --- | --- |
| `index.html` | Page content, metadata, links, embedded services, and modal markup |
| `style.css` | Visual design, layout, animation, and responsive styles |
| `script.js` | Carousel, modal, accordion, scroll-reveal, and current-year behavior |
| `assets/` | Portfolio photography, project illustrations, and Armed Forces imagery |
| `Parimal_Mishra_Resume.pdf` | PDF downloaded from the resume links |

## Preview locally

You can open `index.html` directly in a browser. For a local HTTP preview, run this command from the project directory:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C` when you are finished.

## Personalize the portfolio

1. Edit the text, project details, education, social links, and metadata in `index.html`.
2. Replace or add images in `assets/`, then update the matching image paths and descriptive `alt` text in `index.html`. Keep the resume PDF in the project root or update both resume download links.
3. To use a different Spotify playlist, update both the playlist URL in the Spotify link and the `/embed/playlist/...` URL in `index.html`. Update `SPOTIFY_PLAYLIST_URL` in `script.js` as well to keep its playlist reference in sync.
4. Adjust layout, colors, and breakpoints in `style.css`. Carousel timing and interaction behavior are in `script.js`.

The profile photo, gallery, project artwork, and resume are already included. Replace them only if you want to use different content.

## Deploy

This is a static site and can be hosted by Vercel or another static web host. Deploy the project directory as-is; no dependencies need to be installed, and no build command is needed. The site entry point is `index.html`.

## External services

The page loads Google Fonts, embeds a Spotify playlist, and requests a GitHub contribution chart from `ghchart.rshah.org`. Those features depend on network access and the availability of their providers; the rest of the portfolio is static. No API keys or credentials are required by this project.
