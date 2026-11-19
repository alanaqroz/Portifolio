import type { ExternalLink } from './types';
import { APP_STORE } from './projects';

export const person = {
  name: 'Alana Queiroz',
  nickname: 'Lana',
  tagline: 'Desenho e programo apps para iPhone.',
  intro:
    'Estudo Ciência da Computação na PUCPR, faço parte da Apple Developer Academy e aprendo construindo. Dois dos meus apps já estão na App Store.',
  disciplines: ['Computer Science', 'Product Design', 'iOS Development'],
  based: 'Curitiba, PR',
  coords: '25°25′ S · 49°16′ O',
};

/**
 * Seções da página inicial, na ordem em que aparecem.
 * O menu e os rótulos "Seção 0X" usam esta lista, então a numeração fica sempre igual.
 */
export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'trabalhos', label: 'Trabalhos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

export const sectionNumber = (id: SectionId) =>
  String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0');

export const sectionEyebrow = (id: SectionId) =>
  `${sectionNumber(id)} — ${sections.find((s) => s.id === id)!.label}`;

export const socialLinks: ExternalLink[] = [
  { label: 'GitHub', href: 'https://github.com/alanaqroz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alanaqroz/' },
];

export const publishedApps: ExternalLink[] = [
  { label: 'Zip It na App Store', href: APP_STORE.zipit },
  { label: 'Sky Bound na App Store', href: APP_STORE.skybound },
];

export const about = {
  title: 'A little far from home.',
  paragraphs: [
    'Sou a Lana — Alana Queiroz no papel. Estudo Ciência da Computação na PUCPR e desenvolvo produtos digitais.',
    'Sou de Marabá, no Pará. Aos 17 anos, saí de lá para morar sozinha em Curitiba e continuar meus estudos. Foi uma mudança enorme: uma cidade nova, uma rotina nova e muita coisa para descobrir por conta própria.',
    'Hoje divido o tempo entre a PUCPR e a Apple Developer Academy. Nos projetos, gosto de passar por mais de uma etapa — no Sky Bound, passei por todas: produto, interface, código e publicação.',
    'Este portfólio reúne um pouco desse caminho: projetos que construí, coisas que aprendi e ideias que ainda quero explorar.',
  ],
  /**
   * Foto opcional. Para adicionar: coloque o arquivo em public/images/
   * e preencha { src: 'images/lana.webp', alt: 'Descrição da foto', width, height }.
   */
  photo: null as null | { src: string; alt: string; width: number; height: number },
  // Coordenadas aproximadas das duas cidades (fonte: IBGE / dados geográficos públicos)
  route: {
    from: { city: 'Marabá', state: 'PA', lat: '5°22′ S', lon: '49°07′ O' },
    to: { city: 'Curitiba', state: 'PR', lat: '25°25′ S', lon: '49°16′ O' },
    distance: '≈ 2.200 km em linha reta',
  },
};

/**
 * "Como eu trabalho": hábitos que aparecem nos projetos.
 * Cada um aponta para o projeto que serve de prova — nada de qualidade solta.
 */
export const habits = [
  {
    title: 'Fecho o escopo antes de começar.',
    proof: 'O Sky Bound tinha uma semana. Ficou pronto porque aceitei que não ia fazer tudo o que queria.',
    project: 'sky-bound',
  },
  {
    title: 'Publico cedo, redesenho depois.',
    proof: 'A primeira versão do Zip It foi feita para chegar rápido à App Store. O redesign veio depois, avaliando as telas que já estavam no ar.',
    project: 'zip-it',
  },
  {
    title: 'Testo com quem vai usar.',
    proof: 'O Auris foi validado com uma usuária com baixa visão — e com o Accessibility Inspector antes disso.',
    project: 'auris',
  },
  {
    title: 'Escrevo para quem não estava lá.',
    proof: 'No AEGIS, minha parte foi o README, a Project Story e o roteiro do pitch: fazer quem avalia entender e reproduzir o sistema.',
    project: 'aegis',
  },
] as const;

export const education = [
  {
    place: 'PUCPR',
    title: 'Bacharelado em Ciência da Computação',
    detail: 'Pontifícia Universidade Católica do Paraná · Curitiba',
    status: 'Em andamento',
  },
  {
    place: 'Apple Developer Academy',
    title: 'Participante',
    detail: 'Desenvolvimento iOS, design e produto, em projetos individuais e em equipe',
    status: 'Em andamento',
  },
];

export type SkillGroup = {
  title: string;
  note: string;
  items: { name: string; usedIn?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Development',
    note: 'o que uso para construir',
    items: [
      { name: 'Swift', usedIn: 'Zip It, Sky Bound' },
      { name: 'SwiftUI', usedIn: 'Zip It, Sky Bound' },
      { name: 'SwiftData', usedIn: 'Sky Bound' },
      { name: 'Foundation Models e WeatherKit', usedIn: 'Zip It' },
      { name: 'RevenueCat e PostHog', usedIn: 'Zip It' },
      { name: 'AVFoundation e API da OpenAI', usedIn: 'Auris' },
      { name: 'MVVM', usedIn: 'Zip It, Sky Bound' },
      { name: 'UIKit ↔ SwiftUI', usedIn: 'Sky Bound (ImagePicker)' },
      { name: 'Python, Java, JavaScript', usedIn: 'projetos da graduação' },
    ],
  },
  {
    title: 'Product Design',
    note: 'como penso antes de codar',
    items: [
      { name: 'UX e UI para iOS', usedIn: 'Sky Bound, Zip It' },
      { name: 'Prototipação', usedIn: 'Figma' },
      { name: 'Pesquisa com usuários e jornada', usedIn: 'Auris' },
      { name: 'Acessibilidade (VoiceOver, Dynamic Type)', usedIn: 'Auris, Sky Bound' },
      { name: 'Marketing e métricas de app', usedIn: 'Zip It' },
      { name: 'Documentação e narrativa de produto', usedIn: 'AEGIS' },
    ],
  },
  {
    title: 'Tools & Workflow',
    note: 'onde o trabalho acontece',
    items: [
      { name: 'Xcode' },
      { name: 'Figma' },
      { name: 'Git e GitHub' },
      { name: 'App Store Connect', usedIn: '2 apps publicados' },
    ],
  },
];
