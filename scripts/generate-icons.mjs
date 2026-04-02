// Generate PWA icons as simple SVG-based files
import { writeFileSync } from 'fs';

function createIcon(size) {
  const fontSize = Math.round(size * 0.35);
  const subtitleSize = Math.round(size * 0.09);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.15)}" fill="url(#bg)"/>
  <text x="50%" y="45%" text-anchor="middle" dominant-baseline="central" fill="white" font-family="system-ui,-apple-system,sans-serif" font-weight="700" font-size="${fontSize}">CSS</text>
  <text x="50%" y="72%" text-anchor="middle" dominant-baseline="central" fill="rgba(255,255,255,0.8)" font-family="system-ui,-apple-system,sans-serif" font-weight="500" font-size="${subtitleSize}">TEACH</text>
</svg>`;
  return svg;
}

// Write SVG icons (browsers support SVG in manifests, or we can convert)
writeFileSync('public/icon-192x192.svg', createIcon(192));
writeFileSync('public/icon-512x512.svg', createIcon(512));

// Also create a simple HTML page that can render the icons to PNG via the browser
// For now, SVG icons work in most modern browsers
console.log('SVG icons generated. For PNG conversion, open the SVGs in a browser and export.');
console.log('Most modern browsers support SVG icons in manifests.');
