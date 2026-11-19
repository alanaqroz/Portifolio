import { useState, type ReactNode } from 'react';
import { person } from '../content/site';
import { aurisImages, projects, skyboundImages, zipitImages } from '../content/projects';
import { DeviceFrame, HandNote, PhotoPrint } from '../components/Paper';
import { Arrow } from '../components/Links';
import { Link, caseHref, homeHref } from '../lib/router';

/*
 * Capa: o nome, uma frase específica e — já na primeira tela — o índice dos
 * quatro projetos. Passar o mouse (ou o foco do teclado) em um projeto troca a
 * prévia no painel azul.
 */

const previews: Record<string, ReactNode> = {
  auris: <PhotoPrint image={{ ...aurisImages.bento, alt: '', caption: undefined }} rotate={-2} className="hero__preview-wide" loading="eager" />,
  'zip-it': <DeviceFrame image={{ ...zipitImages.listScreen, alt: '' }} rotate={4} className="hero__preview-device" loading="eager" />,
  'sky-bound': (
    <PhotoPrint image={{ ...skyboundImages.icon, alt: '', caption: 'Sky Bound, 2025' }} rotate={-5} tape className="hero__preview-print" loading="eager" />
  ),
  aegis: (
    <div className="hero__preview-dossier">
      <p className="hero__preview-stamp">Hackathon · 2026</p>
      <p className="hero__preview-title">AEGIS</p>
      <p className="hero__preview-laws">LGPD · GDPR · ISO 27001</p>
    </div>
  ),
};

export function Cover() {
  const [active, setActive] = useState('zip-it');

  return (
    <section id="inicio" className="hero" aria-labelledby="cover-title">
      <div className="hero__grid container--wide">
        <div className="hero__intro">
          <p className="hero__meta folio">
            {person.based} <span aria-hidden="true">·</span> {person.coords}
          </p>
          <h1 id="cover-title" className="hero__name" tabIndex={-1}>
            <span>Alana</span> <span className="hero__name-last">Queiroz</span>
          </h1>
          <HandNote className="hero__nickname" rotate={-6}>
            (ou só {person.nickname})
          </HandNote>
          <p className="hero__lead">{person.tagline}</p>
          <p className="hero__text">{person.intro}</p>
          <p className="hero__disciplines">{person.disciplines.join(' · ')}</p>
          <Link href={homeHref('sobre')} className="hero__more">
            Quem é a Lana <Arrow direction="down" />
          </Link>
        </div>

        <div className="hero__desk">
          <div className="hero__stage" aria-hidden="true">
            {projects.map((p) => (
              <div key={p.slug} className="hero__preview" data-active={p.slug === active}>
                {previews[p.slug]}
              </div>
            ))}
          </div>

          <nav className="hero__index" aria-label="Projetos">
            <p className="hero__index-label folio">Quatro projetos</p>
            <ol>
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={caseHref(p.slug)}
                    className="hero__index-link"
                    data-active={p.slug === active}
                    onMouseEnter={() => setActive(p.slug)}
                    onFocus={() => setActive(p.slug)}
                  >
                    <span className="hero__index-num">{p.number}</span>{' '}
                    <span className="hero__index-title">{p.title}</span>
                    <span className="visually-hidden">: </span>
                    <span className="hero__index-cat">{p.category}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
