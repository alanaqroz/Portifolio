// Gera public/og-image.png (1200×630), a imagem que aparece ao compartilhar o link.
// Uso: npm run og
import sharp from 'sharp';

const lines = Array.from({ length: 5 }, (_, i) =>
  `<text x="${i % 2 ? -140 : -40}" y="${120 + i * 118}" font-family="Didot, 'Bodoni 72', serif" font-size="120" fill="#FFF0B3" fill-opacity="0.75">PENSAR · DESENHAR · DESENVOLVER</text>`,
).join('');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#FFF0B3"/>
  <rect x="40" y="40" width="1120" height="550" fill="#B6CFD8"/>
  <g clip-path="url(#c)">${lines}</g>
  <clipPath id="c"><rect x="40" y="40" width="1120" height="550"/></clipPath>
  <g transform="rotate(-1.5 400 315)">
    <rect x="120" y="120" width="620" height="390" fill="#F7F5EF"/>
    <text x="170" y="200" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3" fill="#465D68">CADERNO DE PRODUTO · 2026</text>
    <text x="165" y="310" font-family="Didot, 'Bodoni 72', serif" font-size="104" fill="#465D68">Alana</text>
    <text x="230" y="405" font-family="Didot, 'Bodoni 72', serif" font-style="italic" font-size="104" fill="#465D68">Queiroz</text>
    <text x="170" y="465" font-family="Didot, 'Bodoni 72', serif" font-style="italic" font-size="26" fill="#684A3D">Eu penso, desenho e desenvolvo produtos digitais.</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-image.png');
console.log('public/og-image.png gerado');
