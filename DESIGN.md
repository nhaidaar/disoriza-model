---
{
  "name": "Disoriza",
  "description": "Indonesian rice-leaf guidance with a calm editorial landing page.",
  "colors": {
    "ink": "#203c35",
    "green": "#144141",
    "muted": "#58685f",
    "paper": "#fcfcf8",
    "sage": "#edf2e6",
    "lime": "#d5eb97",
    "line": "#dce2d7"
  },
  "typography": {
    "display": {
      "fontFamily": "DM Sans, sans-serif",
      "fontSize": "clamp(42px, 5.2vw, 72px)",
      "fontWeight": 400,
      "lineHeight": 1.09,
      "letterSpacing": "-0.04em"
    },
    "headline": {
      "fontFamily": "DM Sans, sans-serif",
      "fontSize": "clamp(32px, 3.5vw, 48px)",
      "fontWeight": 400,
      "lineHeight": 1.15,
      "letterSpacing": "-0.035em"
    },
    "title": {
      "fontFamily": "DM Sans, sans-serif",
      "fontSize": "21px",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": "-0.02em"
    },
    "body": {
      "fontFamily": "DM Sans, sans-serif",
      "lineHeight": 1.6
    },
    "emphasis": {
      "fontFamily": "DM Serif, serif",
      "fontWeight": 400
    },
    "button": {
      "fontFamily": "DM Sans, sans-serif",
      "fontSize": "14px",
      "fontWeight": 600
    }
  },
  "rounded": {
    "radius": "16px",
    "button": "999px",
    "phone": "36px",
    "phone-screen": "28px",
    "download": "24px"
  },
  "spacing": {
    "section": "110px",
    "section-mobile": "72px"
  },
  "components": {
    "button-primary": {
      "backgroundColor": "{colors.green}",
      "textColor": "white",
      "rounded": "{rounded.button}",
      "padding": "13px 24px",
      "typography": "{typography.button}"
    },
    "button-secondary": {
      "backgroundColor": "transparent",
      "textColor": "{colors.green}",
      "rounded": "{rounded.button}",
      "padding": "13px 24px"
    },
    "button-light": {
      "backgroundColor": "{colors.lime}",
      "textColor": "{colors.green}",
      "rounded": "{rounded.button}",
      "padding": "13px 24px"
    },
    "step-number": {
      "backgroundColor": "{colors.sage}",
      "rounded": "50%",
      "width": "42px",
      "height": "42px"
    },
    "navigation": {
      "textColor": "{colors.ink}"
    },
    "faq": {
      "textColor": "{colors.ink}"
    }
  }
}
---

# Design System: Disoriza

## Overview

**Creative North Star: "Disoriza’s calm field guide"**

A calm editorial guide for Indonesian rice farmers: generous whitespace, cream and sage surfaces, and Disoriza teal. Large sans-serif headings pair with italic serif emphasis; existing photography and real app screenshots make the product tangible. The user-selected Finzo layout is adapted directly in code while retaining Disoriza’s logo and identity.

This descriptive name summarizes the implemented direction; it is not a separately approved brand slogan. Source of truth: inline CSS and markup in `index.html`; product constraints in `PRODUCT.md`.

**Key Characteristics:**
- Centered headline with italic emphasis.
- Quiet tonal sections with selective artwork shadows.
- Indonesian copy and a clear Google Play action.

## Colors

The root palette is muted agricultural green around a deep teal identity. Frontmatter preserves the exact CSS custom-property names and values.

- `green`: primary buttons, download surface, selection text.
- `ink`: headings and primary text; `muted`: supporting prose.
- `paper`: page canvas; `sage`: feature section, step circles, secondary-button hover.
- `lime`: light CTA, selection fill, icon disc, download emphasis.
- `line`: section and row dividers.

Additional component literals remain local: emphasis `#4c7151`, primary hover `#245c4c`, secondary border `#bccaba`, light hover `#e3f3bc`, focus `#a96712`, feature art `#dbe5cf`, and white button text. These are observed values, not an expanded global scale.

## Typography

Local DM Sans regular and semibold files provide the sans family. CSS declares the semibold face for weights 600–800; headings use 400, component labels 600. DM Serif Display italic is registered locally as `DM Serif`; `<em>` uses it at 400. Fallbacks are `sans-serif` and `serif`; all faces use `font-display: swap`.

Display, headline, and title values are in frontmatter. Hero introduction: 17px/1.75, maximum 540px. Supporting text ranges from 12px labels to 16px section prose. Headings use balanced wrapping. Body size is the browser default; no explicit global font-size token exists. Italic emphasis inherits the heading size and becomes lime on the dark download surface.

## Layout

Container: `min(1160px, calc(100% - 64px))`. Sections use 110px vertical padding; hero top padding is 55px. Hero title is at most 950px; centered introduction and wrapped actions lead into a three-column showcase (`minmax(0, 1fr) 300px minmax(0, 1fr)`, 52px gaps). The showcase figure has zero margin so the phone is centered on the viewport; the leaf card aligns to the inner edge of the left column and the text to the inner edge of the right column. Three equal process columns use 48px gaps. Feature columns are equal; disease columns are `0.85fr 1.15fr`; FAQ columns are `0.8fr 1.2fr`, all with 100px gaps. The team remains before the footer.

- At **min-width 1600px**, hero top padding becomes 75px.
- At **max-width 900px**, showcase uses `minmax(0, 1fr) 270px minmax(0, 1fr)` with 25px gaps, default phone width becomes 260px, and feature/disease/FAQ gaps become 50px. Download padding becomes 45px 36px.
- At **max-width 700px**, container gutters become 20px; header height is 82px; desktop navigation and header CTA yield to the native menu. Hero padding is 32px; h1 becomes `clamp(37px, 7.9vw, 54px)`/1.13. Hero copy is 15px with a 36ch limit. Buttons become 13px, minimum 48px high, padded 12px 19px. Hero actions stack in a centered single-column grid, `min(100%, 240px)` wide, with equal 48px-high buttons and a 10px gap. Sections use 72px vertical padding.
- Mobile showcase is one column with a 242px phone and a 130px photo card overlapping at the lower left; the side note is hidden. Process steps stack with a 42px number column. Feature, disease, and FAQ grids stack; feature copy precedes the phone artwork. Download becomes centered with 42px 24px padding, 35px heading, and 16px radius. Team stacks; footer wraps.

## Elevation & Depth

Tonal surfaces do most of the work. Photo card uses `--shadow: 0 18px 50px #00000018`; phone uses `0 28px 58px #00000026`. Hero backdrop is a radial ellipse from `#dfebcb` through `#edf3e5` to transparent. Artwork rotates; content rows remain flat.

The leaf photo settles over 650ms, followed by the phone at 90ms (760ms duration) and supporting copy at 200ms (600ms duration). The shared `--ease-out` is `cubic-bezier(0.16, 1, 0.3, 1)`. Content is visible by default; the sequence runs once. Button colors transition over 180ms; link arrows travel 3px over 220ms. Reduced motion removes spatial movement, transitions, animation and smooth scrolling. Disclosure state changes remain immediate.

## Shapes

The recurring surface radius is 16px; buttons are pills. Phone shell/screen radii are 36px/28px, with 8px shell padding. Download panel is 24px on desktop. Circular step and feature icons provide small accents. Leaf photography uses `object-fit: cover`.

Phone artwork crops the published promotional images: screen aspect ratio `924/1402`; image width `116.88%`, left `-8.33%`, top `-36.95%`. The hero phone rotates -3deg; feature phone rotates 5deg. These are illustrative viewports, not interactive app controls.

## Components

**Buttons:** primary teal/white, secondary transparent/teal with a 1px border, and light lime/teal. Desktop minimum height is 52px; small header variant is 44px with 10px 19px padding and 13px type. Hover changes the fill; the secondary action arrow moves 3px. Download buttons retain their teal and lime pill styles with a 24px multicolor Google Play SVG from the official store page. All download links target the existing Google Play listing.

**Navigation:** desktop 14px links, 34px gaps (20px below 900px), underlined on hover. Mobile uses native `<details>/<summary>` with a 44px summary and a right-aligned 210px minimum-width menu, 12px padding, 16px corners, and a 1px divider-color border. Mobile links use 10px 14px padding and a sage hover fill. Native behavior remains the no-script fallback. `static/landing.js` animates menu opacity and a 6px entrance over 240ms; exit takes 180ms. Escape restores summary focus; outside clicks and navigation dismiss the menu.

**Process:** three numbered steps, separated by top borders rather than enclosing cards. Number circles are 42px and sage; desktop article top padding is 30px, mobile 24px.

**Disease list:** five disease rows plus healthy-leaf note. Rows have bottom dividers, 20px vertical padding, 18px names and 13px English names; mobile uses 17px padding and names.

**FAQ:** native independent disclosures. Rows use bottom borders and 22px vertical padding; summaries are 17px/600 (16px mobile), with a 24px content/icon gap. Opening rotates the plus icon 45deg over 280ms. `static/landing.js` animates measured height over 360ms on opening and 280ms on closing, using `cubic-bezier(0.22, 1, 0.36, 1)`. Repeated clicks resume from the current rendered state. Exiting content becomes inert; resize and reduced-motion changes settle active animations. Answer copy is 15px, 15px top padding, maximum 62ch.

**Accessibility:** links and summaries receive a 3px `#a96712` focus outline with 6px offset. A focus-revealed skip link targets main content. Decorative SVGs are hidden from assistive technology; screenshots and photography have descriptive alt text. No form inputs or fabricated testimonial components exist.

## Do's and Don'ts

- Do retain the existing logo and Indonesian farmer-facing copy.
- Do use real app screenshots and preserve their provenance in static/ASSETS.md.
- Do preserve keyboard focus, the skip link, native disclosures, and reduced-motion behavior.
- Don’t invent accuracy, ratings, adoption, or testimonials.
- Don’t present promotional screenshots as a live analysis result.
