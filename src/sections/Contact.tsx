import { publishedApps, sectionEyebrow, socialLinks } from '../content/site';
import { Arrow } from '../components/Links';
import { HandNote, StickyNote } from '../components/Paper';

export function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="container--wide contact__grid">
        <div className="contact__head" data-reveal>
          <p className="eyebrow">{sectionEyebrow('contato')}</p>
          <h2 id="contact-title" className="contact__title">
            Obrigada por ler <em>até aqui.</em>
          </h2>
          <p className="contact__text">
            Se quiser conversar sobre produto, design ou código — ou sobre algum dos projetos deste caderno —, é por aqui que você me encontra.
          </p>
        </div>

        <ul className="contact__links" aria-label="Onde me encontrar" data-reveal>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-url">{link.href.replace('https://', '').replace('www.', '').replace(/\/$/, '')}</span>
                <Arrow direction="up-right" />
                <span className="visually-hidden"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="contact__apps" data-reveal>
          <StickyNote rotate={-3}>e os apps, pra baixar e testar:</StickyNote>
          <ul>
            {publishedApps.map((app) => (
              <li key={app.href}>
                <a href={app.href} target="_blank" rel="noopener noreferrer">
                  {app.label}
                  <Arrow direction="up-right" />
                  <span className="visually-hidden"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
          <HandNote rotate={-4} className="contact__sign">
            — Lana
          </HandNote>
        </div>
      </div>
    </section>
  );
}
