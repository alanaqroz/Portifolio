import { education, sectionEyebrow, skillGroups } from '../content/site';
import { HandNote } from '../components/Paper';

export function Formation() {
  return (
    <section id="formacao" className="formation" aria-labelledby="formation-title">
      <div className="container--wide">
        <header className="section-head section-head--on-panel">
          <p className="eyebrow">{sectionEyebrow('formacao')}</p>
          <h2 id="formation-title" className="section-head__title">
            Formação <em>&amp; ferramentas</em>
          </h2>
          <p className="section-head__intro">
            Em vez de porcentagens, o que uso — e onde usei.
          </p>
        </header>

        <ol className="index-cards" aria-label="Formação">
          {education.map((e, i) => (
            <li key={e.place} className="index-card" style={{ ['--rotate' as string]: `${i % 2 ? 1.2 : -1}deg` }} data-reveal>
              <p className="index-card__place">{e.place}</p>
              <p className="index-card__title">{e.title}</p>
              <p className="index-card__detail">{e.detail}</p>
              <p className="index-card__status folio">{e.status}</p>
            </li>
          ))}
        </ol>

        <div className="skills">
          {skillGroups.map((group, i) => (
            <section key={group.title} className="skills__group" aria-labelledby={`skills-${i}`} data-reveal style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}>
              <h3 id={`skills-${i}`} className="skills__title" lang="en">
                {group.title}
              </h3>
              <HandNote className="skills__note" rotate={-2}>
                {group.note}
              </HandNote>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="skills__name">{item.name}</span>
                    {item.usedIn && <span className="skills__used">{item.usedIn}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
