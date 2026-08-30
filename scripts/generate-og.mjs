/**
 * Genererar public/og.png (1200x630) för länkförhandsvisningar.
 * Kör med: npm run og
 *
 * Färgerna speglar sajtens tokens: den mörka gröna hero-gradienten
 * (#0b1f1c -> #123530 -> #0f2a26) och off-white text (#f4f7f5).
 * SVG:n använder systemtypsnitt med flit — webbtypsnitten behöver inte matchas här.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const OUT = path.join(process.cwd(), 'public', 'og.png');

const SANS =
  'Segoe UI, Helvetica Neue, Helvetica, Arial, system-ui, sans-serif';
const SERIF = 'Georgia, Times New Roman, serif';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1f1c"/>
      <stop offset="48%" stop-color="#123530"/>
      <stop offset="100%" stop-color="#0f2a26"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.75" cy="0.28" r="0.6">
      <stop offset="0%" stop-color="#0f6b5c" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#0f6b5c" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ink)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <rect x="96" y="188" width="34" height="3" fill="#0f6b5c"/>

  <text x="96" y="286" font-family="${SERIF}" font-size="92" font-weight="700" fill="#ffffff" letter-spacing="-2">Oscar Bäckman</text>

  <text x="96" y="352" font-family="${SANS}" font-size="24" font-weight="600" fill="#8fb3aa" letter-spacing="2.5">OPERATIONS- OCH EKONOMIKOORDINATOR · STOCKHOLM</text>

  <text x="96" y="436" font-family="${SANS}" font-size="38" font-weight="400" fill="#f4f7f5">Order, fakturering och system som hänger ihop</text>
</svg>`;

await mkdir(path.dirname(OUT), { recursive: true });

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(OUT, png);

const { width, height } = await sharp(OUT).metadata();
console.log(`Skrev ${path.relative(process.cwd(), OUT)} (${width}x${height})`);
