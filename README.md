# NAPSE Digital — Leading IT Solutions & Software Development Services

A production-ready React application migrated 1:1 from the static HTML/CSS/JavaScript website with modern React architecture, React Router v7, Vite, and full visual and functional parity.

## Features & Architecture

- **React 19 & TypeScript**: Component-based architecture with clean separation of concerns.
- **Routing**: Full React Router mapping with support for clean URLs (e.g. `/services`, `/about`, `/contact`) and legacy `.html` routes (e.g. `/services.html`, `/about.html`) for backwards compatibility.
- **State Management**:
  - Global shopping cart with persistence, quantity adjustments, and subtotal calculation.
  - Wishlist management with state toggle.
  - Interactive sidebar drawer and search modal.
  - Mobile drawer with collapsible multi-level navigation.
  - In-page form submissions with real-time feedback and validation (no `window.alert`).
- **Styling & Assets**: Preserved all original fonts (Space Grotesk, Marcellus, Roboto), Flaticons, FontAwesome, Bootstrap grid, and responsive CSS modules.

## Scripts

- `npm run dev`: Starts the Vite development server on `0.0.0.0:3000`.
- `npm run build`: Type-checks with `tsc` and builds the production bundle with Vite.
- `npm run preview`: Previews the production build on `0.0.0.0:3000`.
- `npm run lint`: Verifies TypeScript types with `tsc --noEmit`.
