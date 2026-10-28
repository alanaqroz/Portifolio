import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Fontes gratuitas (SIL Open Font License), servidas pelo próprio site
import '@fontsource-variable/bodoni-moda/opsz.css';
import '@fontsource-variable/bodoni-moda/opsz-italic.css';
import '@fontsource-variable/inter/index.css';
import '@fontsource/caveat/latin-500.css';
import '@fontsource/caveat/latin-700.css';

import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/case.css';

import { RouterProvider } from './lib/router';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
);
