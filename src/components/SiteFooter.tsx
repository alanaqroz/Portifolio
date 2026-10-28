import { socialLinks } from '../content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container--wide site-footer__inner">
        <p className="site-footer__sign">
          Alana Queiroz <span aria-hidden="true">·</span> Curitiba, 2026
        </p>
        <p className="site-footer__colophon">
          Colofão: construído com React, TypeScript e Vite. Tipografia em Bodoni Moda, Inter e Caveat, todas sob licença SIL Open Font License.
        </p>
        <ul className="site-footer__links" aria-label="Redes profissionais">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
