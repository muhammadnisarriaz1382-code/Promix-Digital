# Promix Digital — Agent Rules

- Client brand images must keep resolving to the real files served from `public/` (e.g. `/jewelry-palace.png`). Never rewrite them to `/__l5e/` asset paths or replace the files, because the user verified those URLs and other tools depend on them.
- Client brand artwork is referenced through pointer files in `src/assets/client-work/*.asset.json`; never embed image binaries into components or route files.
- Client work cards state a project goal, not performance metrics, because the agency has not supplied verified results.
- External brand links open in a new tab with `rel="noopener noreferrer"` and remain keyboard focusable.
- Keep brand styling on the design tokens in `src/styles.css` (`text-gradient`, `bg-gradient-primary`, `shadow-glow`, theme colors) instead of hardcoded color utilities, so dark mode keeps working.
- Baghistan Mangoes is a separate Lovable project; never add its pages or data here.
- Leaf routes use the shared socialMeta helper in head() while retaining their own document titles and descriptions, preventing duplicate sharing tags in server-rendered HTML.
- The social preview is a real public file, keeping its URL readable by sharing crawlers without the asset proxy.
- Home statistics use one IntersectionObserver and one requestAnimationFrame clock for all counters, with pure formatting helpers and reserved numeric widths to keep synchronization and layout stable without an animation dependency.
- Scroll reveals are progressively enhanced by the shared Layout hook on explicit, non-nested data-reveal content groups; route visits reset observation, CSS defaults stay visible, and viewport safety checks prevent observer failures from hiding content.
