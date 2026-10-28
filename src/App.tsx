import { useEffect, useRef } from 'react';
import { getProject } from './content/projects';
import { person } from './content/site';
import { useRouter } from './lib/router';
import { useReveal } from './lib/useReveal';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { Cover } from './sections/Cover';
import { Works } from './sections/Works';
import { About } from './sections/About';
import { Formation } from './sections/Formation';
import { Contact } from './sections/Contact';
import { CaseStudyPage } from './pages/CaseStudyPage';

function HomePage() {
  return (
    <>
      <Cover />
      <Works />
      <About />
      <Formation />
      <Contact />
    </>
  );
}

export function App() {
  const { caseSlug, hash } = useRouter();
  const project = getProject(caseSlug);
  const pageKey = project?.slug ?? 'home';
  const isFirstRender = useRef(true);

  useReveal(pageKey);

  // Título da aba, rolagem e foco a cada troca de página
  useEffect(() => {
    document.title = project
      ? `${project.title} — estudo de caso · ${person.name}`
      : `${person.name} — Produto, design e desenvolvimento`;

    const firstRender = isFirstRender.current;
    isFirstRender.current = false;

    // 'instant' evita que o scroll-behavior: smooth do CSS anime a troca de página
    const target = hash ? document.getElementById(hash) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'instant' });
    } else if (!firstRender) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Leva o foco ao título da nova página (não no primeiro carregamento)
    if (!firstRender && !target) {
      document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true });
    }
  }, [pageKey, hash, project]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" key={pageKey} className="page-enter" tabIndex={-1}>
        {project ? <CaseStudyPage project={project} /> : <HomePage />}
      </main>
      <SiteFooter />
    </>
  );
}
