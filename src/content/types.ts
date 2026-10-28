export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** largura/altura reais do arquivo, para evitar saltos de layout */
  width: number;
  height: number;
};

/**
 * Um capítulo do estudo de caso.
 * - Com `body`: o texto aparece normalmente.
 * - Só com `pending`: aparece uma nota de edição indicando o que falta escrever.
 */
export type CaseChapter = {
  id: string;
  label: string;
  title: string;
  body?: string[];
  list?: string[];
  pending?: string;
  images?: ProjectImage[];
  /** trecho em destaque, sempre com palavras reais (ex.: reflexão escrita no Notion) */
  quote?: { text: string; source: string };
  /** números reais, com fonte — nunca estimativas */
  stats?: { value: string; label: string }[];
  /** trecho de código real do projeto */
  code?: { caption: string; snippet: string };
  /** nome de um bloco visual especial (ex.: diagrama do AEGIS) */
  figure?: 'aegis-pipeline' | 'skybound-process';
};

export type ProjectTheme = {
  /** cor de fundo do painel principal */
  panel: string;
  /** cor do texto/títulos sobre o painel */
  ink: string;
  /** detalhe de cor própria do projeto (vinda da identidade do app) */
  signature: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  /** frase curta de apresentação */
  kicker: string;
  summary: string;
  year?: string;
  status: string;
  format: string;
  role: string;
  platform: string;
  stack: string[];
  stackNote?: string;
  links: ExternalLink[];
  theme: ProjectTheme;
  cover?: ProjectImage;
  chapters: CaseChapter[];
};
