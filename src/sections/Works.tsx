import { sectionEyebrow } from '../content/site';
import type { CSSProperties } from 'react';
import { aurisImages, projects, skyboundImages, zipitImages } from '../content/projects';
import type { Project } from '../content/types';
import { ButtonLink, ExternalLink } from '../components/Links';
import { DeviceFrame, HandNote, PhotoPrint } from '../components/Paper';
import { SkyboundProcess } from '../components/Figures';
import { caseHref } from '../lib/router';

const themeVars = (p: Project): CSSProperties =>
  ({ ['--panel' as string]: p.theme.panel, ['--ink' as string]: p.theme.ink, ['--signature' as string]: p.theme.signature }) as CSSProperties;

const byslug = (slug: string) => projects.find((p) => p.slug === slug)!;

function SpreadHeading({ project }: { project: Project }) {
  return (
    <>
      <p className="spread__number" aria-hidden="true">
        {project.number}
      </p>
      <h3 className="spread__title">
        <span className="visually-hidden">Projeto {project.number}: </span>
        {project.title}
      </h3>
      <p className="spread__kicker">{project.headline}</p>
    </>
  );
}

/** Ficha técnica igual para todos os projetos: o que muda é a composição em volta. */
function SpecSheet({ project, extra }: { project: Project; extra?: { label: string; value: string } }) {
  const rows = [
    { label: 'Ano', value: project.year ?? '—' },
    { label: 'Formato', value: project.format },
    { label: 'Meu papel', value: project.role },
    extra ?? { label: 'Status', value: project.status },
  ];
  return (
    <dl className="spec">
      {rows.map((r) => (
        <div key={r.label}>
          <dt>{r.label}</dt>
          <dd>{r.value}</dd>
        </div>
      ))}
      <div className="spec__stack">
        <dt>{project.stackNote ? 'Stack da equipe' : 'Feito com'}</dt>
        <dd>{project.stack.join(', ')}</dd>
      </div>
    </dl>
  );
}

function SpreadActions({ project }: { project: Project }) {
  return (
    <div className="spread__actions">
      <ButtonLink href={caseHref(project.slug)}>
        Ler estudo de caso<span className="visually-hidden"> de {project.title}</span>
      </ButtonLink>
      {project.links.map((l) => (
        <ExternalLink key={l.href} href={l.href}>
          {l.label}
        </ExternalLink>
      ))}
    </div>
  );
}

function AurisSpread() {
  const p = byslug('auris');
  return (
    <article id="projeto-auris" className="spread spread--auris" style={themeVars(p)} aria-label={`Projeto ${p.number}: ${p.title}`}>
      <div className="spread__text" data-reveal>
        <SpreadHeading project={p} />
        <p className="spread__summary">{p.summary}</p>
        <SpecSheet project={p} />
        <SpreadActions project={p} />
      </div>
      <div className="spread__visual" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
        <PhotoPrint image={aurisImages.bento} rotate={-2} className="auris-collage__bento" />
        <PhotoPrint image={{ ...aurisImages.icon, caption: 'Auris, 2025' }} rotate={6} className="auris-collage__icon" />
        <HandNote className="spread__margin-note" rotate={-4}>
          validado com uma usuária com baixa visão
        </HandNote>
      </div>
    </article>
  );
}

function ZipItSpread() {
  const p = byslug('zip-it');
  return (
    <article id="projeto-zip-it" className="spread spread--notebook" style={themeVars(p)} aria-label={`Projeto ${p.number}: ${p.title}`}>
      <div className="notebook__page notebook__page--left" data-reveal>
        <SpreadHeading project={p} />
        <p className="spread__summary">{p.summary}</p>
        <SpecSheet project={p} />
        <SpreadActions project={p} />
      </div>
      <div className="notebook__spiral" aria-hidden="true" />
      <div className="notebook__page notebook__page--right" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
        <div className="zip-collage">
          <PhotoPrint image={zipitImages.store[1]} rotate={-4} className="zip-collage__a" />
          <PhotoPrint image={zipitImages.store[2]} rotate={3} className="zip-collage__b" />
          <DeviceFrame image={zipitImages.listScreen} rotate={-2} className="zip-collage__device" />
        </div>
        <HandNote className="zip-collage__note" rotate={-3}>
          destino + clima + duração + tipo de viagem = uma lista só sua
        </HandNote>
      </div>
    </article>
  );
}

function SkyBoundSpread() {
  const p = byslug('sky-bound');
  return (
    <article id="projeto-sky-bound" className="spread spread--sky" style={themeVars(p)} aria-label={`Projeto ${p.number}: ${p.title}`}>
      <img className="spread--sky__clouds" src={skyboundImages.clouds.src} alt="" width={skyboundImages.clouds.width} height={skyboundImages.clouds.height} loading="lazy" />
      <div className="sky-collage" data-reveal>
        <PhotoPrint image={skyboundImages.icon} rotate={-5} className="sky-collage__icon" />
        <DeviceFrame image={skyboundImages.launch} rotate={4} className="sky-collage__device" />
        <PhotoPrint image={skyboundImages.store[1]} rotate={-2} className="sky-collage__print" />
      </div>
      <div className="spread__text" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
        <SpreadHeading project={p} />
        <p className="spread__summary">{p.summary}</p>
        <SkyboundProcess />
        <SpecSheet project={p} />
        <SpreadActions project={p} />
      </div>
    </article>
  );
}

function AegisSpread() {
  const p = byslug('aegis');
  return (
    <article id="projeto-aegis" className="spread spread--dossier" style={themeVars(p)} aria-label={`Projeto ${p.number}: ${p.title}`}>
      <div className="dossier" data-reveal>
        <div className="dossier__head">
          <SpreadHeading project={p} />
          <p className="dossier__stamp">Hackathon · {p.year}</p>
        </div>
        <p className="spread__summary">{p.summary}</p>
        <SpecSheet project={p} extra={{ label: 'Domínio', value: 'LGPD, GDPR e ISO 27001' }} />
        <SpreadActions project={p} />
      </div>
      <aside className="dossier__clip" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }} aria-label="Ideia central do AEGIS">
        <p className="dossier__clip-title">Quando a regra muda…</p>
        <ol>
          <li>calcula o impacto</li>
          <li>invalida só o que foi afetado</li>
          <li>refaz só o necessário</li>
        </ol>
      </aside>
    </article>
  );
}

export function Works() {
  return (
    <section id="trabalhos" className="works" aria-labelledby="works-title">
      <div className="container--wide">
        <header className="section-head">
          <p className="eyebrow">{sectionEyebrow('trabalhos')}</p>
          <h2 id="works-title" className="section-head__title">
            Trabalhos <em>selecionados</em>
          </h2>
          <p className="section-head__intro">
            Quatro projetos, quatro formatos: um app individual feito em uma semana, um app de viagem feito em dupla, um projeto de acessibilidade em equipe e um hackathon. Cada um aparece do jeito que ele pede.
          </p>
        </header>

        <div className="spreads">
          <AurisSpread />
          <ZipItSpread />
          <SkyBoundSpread />
          <AegisSpread />
        </div>
      </div>
    </section>
  );
}
