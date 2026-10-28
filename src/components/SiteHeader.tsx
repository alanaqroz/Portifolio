import { useEffect, useState } from 'react';
import { sections, sectionNumber } from '../content/site';
import { Link, homeHref, useRouter } from '../lib/router';

export function SiteHeader() {
  const { caseSlug } = useRouter();
  const [open, setOpen] = useState(false);

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

        <p className="site-header__issue folio" aria-hidden="true">
          Caderno de produto · Nº 01 · 2026
        </p>

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
                <Link href={homeHref(item.id)} onClick={() => setOpen(false)}>
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
