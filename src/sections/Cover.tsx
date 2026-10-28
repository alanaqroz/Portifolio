import { person } from '../content/site';
import { skyboundImages, zipitImages } from '../content/projects';
import { ButtonLink } from '../components/Links';
import { DeviceFrame, HandNote, PhotoPrint, StickyNote } from '../components/Paper';
import { homeHref } from '../lib/router';

const wordmarkLines = Array.from({ length: 6 }, () => 'PENSAR · DESENHAR · DESENVOLVER · ');

export function Cover() {
  return (
    <section id="inicio" className="cover" aria-labelledby="cover-title">
      <div className="cover__panel container--wide">
        <div className="cover__wordmark" aria-hidden="true">
          {wordmarkLines.map((line, i) => (
            <span key={i}>
              {line}
              {line}
            </span>
          ))}
        </div>

        <span className="cover__folio cover__folio--tl folio" aria-hidden="true">
          Nº 01 — Portfólio
        </span>
        <span className="cover__folio cover__folio--br folio" aria-hidden="true">
          {person.based} · 2026
        </span>

        <div className="cover__sheet" data-reveal>
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" /> Caderno de produto
          </p>
          <h1 id="cover-title" className="cover__title" tabIndex={-1}>
            <span>Alana</span> <span className="cover__title-last">Queiroz</span>
          </h1>
          <HandNote className="cover__nickname" rotate={-6}>
            (ou só {person.nickname})
          </HandNote>
          <p className="cover__tagline">{person.tagline}</p>
          <p className="cover__disciplines">
            {person.disciplines.map((d, i) => (
              <span key={d}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                {d}
              </span>
            ))}
          </p>
          <div className="cover__actions">
            <ButtonLink href={homeHref('trabalhos')} arrow="down">
              Ver trabalhos
            </ButtonLink>
            <ButtonLink href={homeHref('sobre')} variant="text" arrow={null}>
              Quem é a Lana
            </ButtonLink>
          </div>
        </div>

        <div className="cover__collage" aria-hidden="true">
          <DeviceFrame image={{ ...zipitImages.listScreen, alt: '' }} rotate={5} className="cover__device" loading="eager" />
          <PhotoPrint image={{ ...skyboundImages.icon, alt: '', caption: 'Sky Bound, 2025' }} rotate={-7} tape className="cover__print" loading="eager" />
          <StickyNote rotate={4} className="cover__sticky">
            quatro projetos aqui dentro — dois já estão na App Store ↓
          </StickyNote>
        </div>
      </div>
    </section>
  );
}
