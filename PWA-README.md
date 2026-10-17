# QARA TUYNIK — free PWA update

This package is the existing `develop` site with an installable PWA layer added.

## Deploy
1. Back up your current develop branch.
2. Upload/commit all files from this ZIP to `develop` (keep the root structure).
3. Test on a HTTPS preview deployment. GitHub Pages custom-domain production may still serve `main` until you merge; **do not switch the live Pages branch just to test**.
4. After verification, merge `develop` into `main` to release.

## Test
- In Chrome DevTools > Application > Manifest, verify installability and icons.
- In Application > Service Workers, confirm registration; reload once while online.
- Disconnect network and revisit home page to test cached shell; uncached journals show offline fallback.
- iOS: Safari > Share > Add to Home Screen > Open as Web App.
- Android: Chrome > menu > Install app / Add to Home screen.

## Important limitations
- The uploaded repo has no bundled large images/videos. External assets are not pre-cached and require a connection.
- Offline support is basic, not a full offline archive of every journal or media item.
- The service worker only controls the origin where it is hosted; a subpath GitHub Pages preview needs path adjustments.
- To test develop independently, use a separate HTTPS preview host/domain (e.g. Cloudflare Pages preview), or local HTTPS tooling.
- Cache version is `qt-pwa-v1-20261017`; bump when making major cache behavior changes.
