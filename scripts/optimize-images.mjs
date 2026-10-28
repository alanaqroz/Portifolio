// Converte as imagens originais de assets-src/ em WebP leves para public/images/.
// Uso: coloque o arquivo original em assets-src/, adicione uma entrada abaixo
// e rode `npm run images`.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = 'assets-src';
const OUT = 'public/images';

/** @type {{ from: string, to: string, width: number, crop?: { left: number, top: number, width: number, height: number } }[]} */
const jobs = [
  // Zip It — capturas publicadas na App Store
  { from: 'as-zip-1.jpg', to: 'zipit-store-1.webp', width: 640 },
  { from: 'as-zip-2.jpg', to: 'zipit-store-2.webp', width: 640 },
  { from: 'as-zip-3.jpg', to: 'zipit-store-3.webp', width: 640 },
  { from: 'as-zip-4.jpg', to: 'zipit-store-4.webp', width: 640 },
  // Zip It — tela da lista e arte de onboarding (repositórios do projeto)
  { from: 'zip-lista.png', to: 'zipit-list-screen.webp', width: 402 },
  { from: 'zip-onb.png', to: 'zipit-onboarding.webp', width: 720, crop: { left: 0, top: 120, width: 1206, height: 1400 } },
  { from: 'zip-logo.png', to: 'zipit-icon.webp', width: 240 },
  // Sky Bound — capturas publicadas na App Store
  { from: 'as-sky-1.jpg', to: 'skybound-store-1.webp', width: 640 },
  { from: 'as-sky-2.jpg', to: 'skybound-store-2.webp', width: 640 },
  { from: 'as-sky-3.jpg', to: 'skybound-store-3.webp', width: 640 },
  { from: 'as-sky-4.jpg', to: 'skybound-store-4.webp', width: 640 },
  // Sky Bound — ícone e tela de abertura (repositório do projeto)
  { from: 'sky-logo.png', to: 'skybound-icon.webp', width: 480 },
  { from: 'sky-capa.png', to: 'skybound-launch.webp', width: 600 },

  // Materiais das páginas de projeto no Notion (assets-src/notion/)
  { from: 'notion/skybound-idv-v1.webp', to: 'skybound-idv-v1.webp', width: 1200 },
  { from: 'notion/skybound-idv-v2.webp', to: 'skybound-idv-v2.webp', width: 1200 },
  { from: 'notion/skybound-screens-v1.webp', to: 'skybound-screens-v1.webp', width: 640 },
  { from: 'notion/skybound-screens-light.webp', to: 'skybound-screens-light.webp', width: 720 },
  { from: 'notion/skybound-screens-dark.webp', to: 'skybound-screens-dark.webp', width: 720 },
  { from: 'notion/skybound-clouds.webp', to: 'skybound-clouds.webp', width: 1600 },
  { from: 'notion/auris-bento.webp', to: 'auris-bento.webp', width: 1400 },
  { from: 'notion/auris-icon.webp', to: 'auris-icon.webp', width: 360 },
  { from: 'notion/auris-journey.webp', to: 'auris-journey.webp', width: 1300 },
  { from: 'notion/auris-ui-flow.webp', to: 'auris-ui-flow.webp', width: 1400 },
  { from: 'notion/zipit-screens-v1.webp', to: 'zipit-screens-v1.webp', width: 1000 },
  { from: 'notion/zipit-illustration.webp', to: 'zipit-illustration.webp', width: 520 },
  { from: 'notion/zipit-v2-activities.webp', to: 'zipit-v2-activities.webp', width: 402 },
  { from: 'notion/zipit-v2-home.webp', to: 'zipit-v2-home.webp', width: 402 },
  { from: 'notion/zipit-v2-list.webp', to: 'zipit-v2-list.webp', width: 402 },
  { from: 'notion/zipit-v2-traveler.webp', to: 'zipit-v2-traveler.webp', width: 402 },
  { from: 'notion/zipit-campaign-instagram.webp', to: 'zipit-campaign-instagram.webp', width: 520 },
  { from: 'notion/zipit-campaign-post.webp', to: 'zipit-campaign-post.webp', width: 520 },
  { from: 'notion/zipit-campaign-tiktok.webp', to: 'zipit-campaign-tiktok.webp', width: 520 },
  { from: 'notion/zipit-insights.webp', to: 'zipit-insights.webp', width: 900 },
];

await mkdir(OUT, { recursive: true });

for (const job of jobs) {
  let img = sharp(`${SRC}/${job.from}`);
  if (job.crop) img = img.extract(job.crop);
  const info = await img
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${job.to}`);
  console.log(`${job.to.padEnd(28)} ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
