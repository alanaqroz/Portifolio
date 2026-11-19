import { useEffect, useState } from 'react';
import { sections, sectionNumber } from '../content/site';
import { Link, homeHref, useRouter } from '../lib/router';

/** Descobre qual seção da página inicial está no meio da tela. */
function useCurrentSection(enabled: boolean) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) {
      setCurrent(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return current;
}

export function SiteHeader() {
  const { caseSlug } = useRouter();
  const [open, setOpen] = useState(false);
  const current = useCurrentSection(caseSlug === null);

  // Fecha o menu ao trocar de página ou apertar Esc
  useEffect(() => setOpen(false), [caseSlug]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner container--wide">
        <Link href={homeHref()} className="site-header__brand" aria-label="Alana Queiroz — início">
          <span className="site-header__mono" aria-hidden="true">
            a<em>q</em>
          </span>
          <span className="site-header__name">Alana Queiroz</span>
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Fechar' : 'Menu'}</span>
          <span className="site-header__burger" aria-hidden="true" data-open={open} />
        </button>

        <nav id="site-nav" className="site-nav" data-open={open} aria-label="Principal">
          <ol>
            {sections.map((item) => (
              <li key={item.id}>
                <Link
                  href={homeHref(item.id)}
                  onClick={() => setOpen(false)}
                  aria-current={current === item.id ? 'location' : undefined}
                >
                  <span className="site-nav__num" aria-hidden="true">
                    {sectionNumber(item.id)}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
