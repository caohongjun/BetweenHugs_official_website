# BetweenHugs official landing page (static, responsive)

A lightweight website implemented with HTML/CSS/JavaScript. No build process, runtime dependencies, or third-party image loading.

## Local preview

Open `index.html` in your browser, or run:

```sh
cd betweenhugs-website
python3 -m http.server 8080
```

Visit http://localhost:8080

## Update download buttons

Edit `config.js`:

```js
window.BETWEENHUGS_CONFIG = {
  appStoreUrl: 'https://apps.apple.com/app/YOUR_ID',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=YOUR_APP_ID'
};
```

Until URLs are configured, tapping either store badge opens a *Coming soon* dialog, rather than sending visitors to incorrect links. The header Download button scrolls to the badges.

## Legal pages

`terms.html` and `privacy.html` are the Terms of Service and Privacy Policy, effective November 12, 2026. Account deletion is offered in the app (Settings → Delete Account), not on this website.

## Files

- `index.html`: landing page
- `styles.css`: responsive layouts and phone preview styling
- `config.js`: store URLs
- `script.js`: download UI + current year
- `terms.html` / `privacy.html`: legal pages
- `assets/`: packaged local visuals and double-heart brand SVG

## Notes for Cursor

- Brand color: `#D53865`; background: white.
- Hero app mockups show Home and Memories only. No Widgets tab or extra navigation.
- The phone UIs are HTML/CSS demo reproductions to illustrate product presentation; when actual final app screenshots are ready, you can replace them with real exported simulator screenshots.
- Marketing example dates are illustrative, not live app data.
- Deployable to any static hosting provider.
