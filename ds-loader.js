/**
 * Diet AirDS — CSS Loader
 *
 * Loads design system stylesheets from local files when running locally,
 * or from the Vercel CDN when deployed.
 *
 * Detects local by hostname (localhost / 127.0.0.1) or file:// protocol.
 * Uses this script's own URL to resolve the local base path — so it works
 * correctly from any subdirectory (e.g. examples/).
 *
 * Usage:
 *   Root-level HTML:   <script src="ds-loader.js"></script>
 *   Subdirectory HTML: <script src="../ds-loader.js"></script>
 */
(function () {
  var script = document.currentScript;

  var isLocal =
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    location.protocol === 'file:';

  // Resolve the base path from this script's own URL so subdirectory
  // HTML files (e.g. examples/) get the correct local root path.
  var base = isLocal
    ? script.src.replace(/[^/]*$/, '')   // directory containing ds-loader.js
    : 'https://diet-air-ds.vercel.app/';

  var sheets = [
    'design-tokens-master.css',
    'spacing-tokens.css',
    'container-tokens.css',
    'border-effects-tokens.css',
    'fonts.css',
    'text-styles-system.css',
    'icons.css',
    'card-components.css',
    'interactive-tokens.css',
    'button-components.css',
    'list-row-components.css',
    'input-components.css',
    'tag-chip-components.css',
    'nav-components.css',
    'boilerplate.css'
  ];

  sheets.forEach(function (name) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = base + name;
    document.head.appendChild(link);
  });
}());
