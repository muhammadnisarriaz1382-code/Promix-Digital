# Promix Digital — Agent Rules

- Client brand images must keep resolving to the real files served from `public/` (e.g. `/jewelry-palace.png`). Never rewrite them to `/__l5e/` asset paths or replace the files, because the user verified those URLs and other tools depend on them.
- Client brand artwork is referenced through pointer files in `src/assets/client-work/*.asset.json`; never embed image binaries into components or route files.
- Client work cards state a project goal, not performance metrics, because the agency has not supplied verified results.
- External brand links open in a new tab with `rel="noopener noreferrer"` and remain keyboard focusable.
- Keep brand styling on the design tokens in `src/styles.css` (`text-gradient`, `bg-gradient-primary`, `shadow-glow`, theme colors) instead of hardcoded color utilities, so dark mode keeps working.
- Baghistan Mangoes is a separate Lovable project; never add its pages or data here.
