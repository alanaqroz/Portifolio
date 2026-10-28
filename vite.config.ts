import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` gera caminhos relativos, então o build funciona
// em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel...).
export default defineConfig({
  base: './',
  plugins: [react()],
});
