import { about, sectionEyebrow } from '../content/site';
import { HandNote, PhotoPrint } from '../components/Paper';

/** Régua de meridiano: Marabá e Curitiba estão quase na mesma longitude (~49° O). */
function Meridian() {
  const { from, to, distance } = about.route;
  return (
    <figure className="meridian" aria-labelledby="meridian-caption">
      <div className="meridian__ruler" aria-hidden="true">
        <span className="meridian__tick meridian__tick--top" />
        <span className="meridian__line" />
        <span className="meridian__tick meridian__tick--bottom" />
        <span className="meridian__lon">49° O</span>
      </div>
      <ol className="meridian__stops">
        <li className="meridian__stop">
          <span className="meridian__city">
            {from.city}, {from.state}
          </span>
          <span className="meridian__coords">
            {from.lat} · {from.lon}
          </span>
        </li>
        <li className="meridian__stop meridian__stop--middle">
          <span className="meridian__age">aos 17</span>
          <span className="meridian__coords">{distance}</span>
        </li>
        <li className="meridian__stop">
          <span className="meridian__city">
            {to.city}, {to.state}
          </span>
          <span className="meridian__coords">
            {to.lat} · {to.lon}
          </span>
        </li>
      </ol>
      <HandNote className="meridian__note" rotate={-5}>
        quase a mesma longitude: no mapa, é só descer
      </HandNote>
      <figcaption id="meridian-caption" className="visually-hidden">
        De Marabá, no Pará, a Curitiba, no Paraná: cerca de 2.200 quilômetros em linha reta para o sul, quase sobre o mesmo meridiano.
      </figcaption>
    </figure>
  );
}

export function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="container--wide about__grid">
        <header className="about__head" data-reveal>
          <p className="eyebrow">{sectionEyebrow('sobre')}</p>
          <h2 id="about-title" className="about__title" lang="en">
            A little far <em>from home.</em>
          </h2>
          <HandNote className="about__translation" rotate={-3}>
            um pouco longe de casa
          </HandNote>
        </header>

        <div className="about__text" data-reveal>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'about__lead' : undefined}>
              {p}
            </p>
          ))}
        </div>

        <div className="about__aside" data-reveal style={{ ['--reveal-delay' as string]: '150ms' }}>
          {about.photo && (
            <PhotoPrint image={{ ...about.photo, caption: 'Lana' }} rotate={-3} tape className="about__photo" />
          )}
          <Meridian />
        </div>
      </div>
    </section>
  );
}
