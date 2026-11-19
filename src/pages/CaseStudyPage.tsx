import type { CSSProperties } from 'react';
import { aurisImages, projects, skyboundImages, zipitImages } from '../content/projects';
import type { Project } from '../content/types';
import { ButtonLink, ExternalLink } from '../components/Links';
import { DeviceFrame, EditorNote, PhotoPrint, TagList } from '../components/Paper';
import { ChapterFigure } from '../components/Figures';
import { caseHref, homeHref } from '../lib/router';

/*
 * Cada estudo de caso abre com uma composição própria, montada com os
 * materiais reais do projeto: o ícone, as telas, a identidade.
 */
function CaseSideVisual({ project }: { project: Project }) {
  switch (project.slug) {
    case 'auris':
      return <PhotoPrint image={{ ...aurisImages.icon, caption: 'Auris, 2025' }} rotate={-4} loading="eager" className="case-hero__print" />;
    case 'zip-it':
      return <DeviceFrame image={zipitImages.listScreen} rotate={3} loading="eager" />;
    case 'sky-bound':
      return <PhotoPrint image={{ ...skyboundImages.icon, caption: 'Sky Bound, 2025' }} rotate={-4} tape loading="eager" className="case-hero__print" />;
    case 'aegis':
      return (
        <div className="case-cover-card" aria-hidden="true">
          <p className="case-cover-card__stamp">Hackathon · {project.year}</p>
          <p className="case-cover-card__laws">
            <span>LGPD</span>
            <span>GDPR</span>
            <span>ISO 27001</span>
          </p>
          <p className="case-cover-card__note">quando a regra muda, refaz só o necessário</p>
        </div>
      );
    default:
      return project.cover ? <PhotoPrint image={project.cover} rotate={-3} loading="eager" /> : null;
  }
}

/** Faixa larga logo abaixo da abertura: a imagem que melhor resume o projeto. */
function CaseStrip({ project }: { project: Project }) {
  switch (project.slug) {
    case 'auris':
      return (
        <div className="case-strip case-strip--wide">
          <PhotoPrint image={aurisImages.bento} rotate={-0.6} loading="eager" />
        </div>
      );
    case 'zip-it':
      return (
        <div className="case-strip case-strip--devices">
          {zipitImages.v2.map((img, i) => (
            <DeviceFrame key={img.src} image={img} rotate={[-3, 1.5, -1, 2.5][i]} loading="eager" />
          ))}
        </div>
      );
    case 'sky-bound':
      return (
        <div className="case-strip case-strip--wide">
          <PhotoPrint image={skyboundImages.idvV2} rotate={0.6} loading="eager" />
        </div>
      );
    default:
      return null;
  }
}

function CaseNav({ project }: { project: Project }) {
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return (
    <nav className="case-nav" aria-label="Outros estudos de caso">
      <ButtonLink href={caseHref(prev.slug)} variant="text" arrow="left" className="case-nav__link">
        <span className="case-nav__label">Anterior</span>
        <span className="case-nav__title">
          {prev.number} {prev.title}
        </span>
      </ButtonLink>
      <ButtonLink href={homeHref('trabalhos')} variant="outline" arrow={null} className="case-nav__index">
        Todos os trabalhos
      </ButtonLink>
      <ButtonLink href={caseHref(next.slug)} variant="text" className="case-nav__link case-nav__link--next">
        <span className="case-nav__label">Próximo</span>
        <span className="case-nav__title">
          {next.number} {next.title}
        </span>
      </ButtonLink>
    </nav>
  );
}

export function CaseStudyPage({ project }: { project: Project }) {
  const style = {
    ['--panel' as string]: project.theme.panel,
    ['--ink' as string]: project.theme.ink,
    ['--signature' as string]: project.theme.signature,
  } as CSSProperties;

  return (
    <article className={`case case--${project.slug}`} style={style} aria-labelledby="case-title">
      <header className="case-hero">
        {project.slug === 'sky-bound' && (
          <img className="case-hero__clouds" src={skyboundImages.clouds.src} alt="" width={skyboundImages.clouds.width} height={skyboundImages.clouds.height} />
        )}
        <div className="container--wide case-hero__grid">
          <div className="case-hero__text">
            <ButtonLink href={homeHref('trabalhos')} variant="text" arrow="left" className="case-hero__back">
              Todos os trabalhos
            </ButtonLink>
            <p className="folio case-hero__folio">
              Estudo de caso {project.number} / {String(projects.length).padStart(2, '0')}
            </p>
            <h1 id="case-title" className="case-hero__title" tabIndex={-1}>
              {project.title}
            </h1>
            <p className="case-hero__kicker">{project.headline}</p>
            <p className="case-hero__summary">{project.summary}</p>
          </div>
          <div className="case-hero__visual">
            <CaseSideVisual project={project} />
          </div>
        </div>
        <div className="container--wide">
          <CaseStrip project={project} />
        </div>
      </header>

      <div className="container--wide case-body">
        <aside className="case-meta" aria-label="Ficha do projeto">
          <dl>
            {project.year && (
              <div>
                <dt>Ano</dt>
                <dd>{project.year}</dd>
              </div>
            )}
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Formato</dt>
              <dd>{project.format}</dd>
            </div>
            <div>
              <dt>Meu papel</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Plataforma</dt>
              <dd>{project.platform}</dd>
            </div>
            <div>
              <dt>Tecnologias</dt>
              <dd>
                <TagList items={project.stack} />
                {project.stackNote && <p className="case-meta__note">{project.stackNote}</p>}
              </dd>
            </div>
          </dl>
          {project.links.length > 0 && (
            <ul className="case-meta__links">
              {project.links.map((l) => (
                <li key={l.href}>
                  <ExternalLink href={l.href} variant="outline">
                    {l.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          )}

          <nav className="case-toc" aria-label="Capítulos deste estudo de caso">
            <p className="eyebrow">Neste estudo</p>
            <ol>
              {project.chapters.map((c, i) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    <span className="folio">{String(i + 1).padStart(2, '0')}</span> {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="case-chapters">
          {project.chapters.map((c, i) => (
            <section key={c.id} id={c.id} className="chapter" aria-labelledby={`${c.id}-title`} data-reveal>
              <p className="chapter__label eyebrow">
                <span className="folio">{String(i + 1).padStart(2, '0')}</span> {c.label}
              </p>
              <h2 id={`${c.id}-title`} className="chapter__title">
                {c.title}
              </h2>
              {c.body?.map((para, j) => (
                <p key={j} className="chapter__p">
                  {para}
                </p>
              ))}
              {c.list && (
                <ul className="chapter__list">
                  {c.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {c.quote && (
                <figure className="chapter__quote">
                  <blockquote>
                    <p>{c.quote.text}</p>
                  </blockquote>
                  <figcaption>— {c.quote.source}</figcaption>
                </figure>
              )}
              {c.stats && (
                <dl className="chapter__stats">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {c.code && (
                <figure className="chapter__code">
                  <pre tabIndex={0} aria-label="Trecho de código em Swift">
                    <code>{c.code.snippet}</code>
                  </pre>
                  <figcaption>{c.code.caption}</figcaption>
                </figure>
              )}
              {c.figure && <ChapterFigure name={c.figure} />}
              {c.images && (
                <div className="chapter__gallery">
                  {c.images.map((image, j) => (
                    <PhotoPrint
                      key={image.src}
                      image={image}
                      rotate={j % 2 ? 1.5 : -1.5}
                      className={image.width >= image.height ?'photo-print--wide' : undefined}
                    />
                  ))}
                </div>
              )}
              {c.pending && <EditorNote>{c.pending}</EditorNote>}
            </section>
          ))}
        </div>
      </div>

      <div className="container--wide">
        <CaseNav project={project} />
      </div>
    </article>
  );
}
