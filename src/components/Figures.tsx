import type { CaseChapter } from '../content/types';

/* Diagramas e fluxos usados nos estudos de caso.
   São HTML semântico (listas ordenadas), então funcionam com leitor de tela
   e se reorganizam sozinhos no celular. */

function AegisPipeline() {
  const steps = [
    { name: 'Documento', note: 'política interna' },
    { name: 'Filtro de dados pessoais', note: 'Gemma' },
    { name: 'Entendimento e planejamento', note: 'Gemini Flash' },
  ];
  const specialists = ['Privacidade', 'Segurança', 'Governança'];
  const after = [
    { name: 'Trust Graph', note: 'evidências com hash SHA-256' },
    { name: 'Crítico de evidências', note: 'revisão adversarial' },
    { name: 'Plano de remediação', note: 'ações corretivas' },
  ];
  return (
    <figure className="figure figure--aegis">
      <ol className="aegis-flow" aria-label="Fluxo de análise do AEGIS">
        {steps.map((s) => (
          <li key={s.name} className="aegis-flow__step">
            <strong>{s.name}</strong>
            <span>{s.note}</span>
          </li>
        ))}
        <li className="aegis-flow__step aegis-flow__step--group">
          <strong>Especialistas em paralelo</strong>
          <ul>
            {specialists.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </li>
        {after.map((s) => (
          <li key={s.name} className="aegis-flow__step">
            <strong>{s.name}</strong>
            <span>{s.note}</span>
          </li>
        ))}
      </ol>
      <div className="aegis-drift">
        <p className="aegis-drift__title">Quando a regra muda</p>
        <ol>
          <li>Detecta a mudança regulatória</li>
          <li>Calcula o raio de impacto no Trust Graph</li>
          <li>Invalida só as evidências afetadas</li>
          <li>Reexecuta só o especialista necessário</li>
        </ol>
      </div>
      <figcaption>Arquitetura do AEGIS, simplificada a partir da documentação do projeto.</figcaption>
    </figure>
  );
}

function SkyboundProcess() {
  const steps = [
    { name: 'Conceito', note: 'escopo fechado para caber em uma semana' },
    { name: 'Interface', note: 'céu, nuvens e cores por categoria, revisados numa segunda versão' },
    { name: 'Código', note: 'SwiftUI, SwiftData e MVVM' },
    { name: 'App Store', note: 'publicado em dezembro de 2025' },
  ];
  return (
    <figure className="figure figure--process">
      <ol className="process-strip">
        {steps.map((s, i) => (
          <li key={s.name}>
            <span className="process-strip__num">0{i + 1}</span>
            <strong>{s.name}</strong>
            <span>{s.note}</span>
          </li>
        ))}
      </ol>
      <figcaption>As quatro etapas do Sky Bound, um projeto individual de uma semana.</figcaption>
    </figure>
  );
}

export function ChapterFigure({ name }: { name: NonNullable<CaseChapter['figure']> }) {
  switch (name) {
    case 'aegis-pipeline':
      return <AegisPipeline />;
    case 'skybound-process':
      return <SkyboundProcess />;
  }
}

export { AegisPipeline, SkyboundProcess };
