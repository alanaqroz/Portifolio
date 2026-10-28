import type { Project, ProjectImage } from './types';

/*
 * Conteúdo dos quatro projetos.
 *
 * Regra deste arquivo: só entra aqui o que foi confirmado
 * (briefing da Lana, páginas dos projetos no Notion, README dos repositórios,
 * página da App Store). Tudo que ainda falta aparece como `pending`, e o site
 * mostra uma nota de edição no lugar — sem inventar pesquisa, métricas ou resultados.
 */

const img = (file: string, alt: string, width: number, height: number, caption?: string): ProjectImage => ({
  src: `images/${file}`,
  alt,
  width,
  height,
  caption,
});

export const APP_STORE = {
  zipit: 'https://apps.apple.com/us/app/zip-it-travel-packing-list/id6761031657',
  skybound: 'https://apps.apple.com/us/app/sky-bound/id6756132160',
};

export const zipitImages = {
  store: [
    img('zipit-store-1.webp', 'Tela do Zip It com a lista de bagagem para Curitiba, previsão do tempo e progresso de itens separados. Texto: Pack smarter, not harder.', 640, 1385, 'Lista gerada a partir de destino, clima e atividades'),
    img('zipit-store-2.webp', 'Telas de criação de viagem do Zip It, com tipo de viagem e categorias de atividades.', 640, 1385, 'Personalização: tipo de viagem e atividades'),
    img('zipit-store-3.webp', 'Tela inicial do Zip It listando as próximas viagens e todas as listas.', 640, 1385, 'Todas as listas em um só lugar'),
    img('zipit-store-4.webp', 'Lista de bagagem do Zip It em modo claro e escuro.', 640, 1385, 'Modo claro e escuro'),
  ],
  listScreen: img('zipit-list-screen.webp', 'Tela de lista do Zip It em modo escuro: Curitiba, 21 a 30 graus, progresso 5 de 18 itens e categoria Documentos.', 402, 874),
  icon: img('zipit-icon.webp', 'Ícone do Zip It: um zíper branco sobre fundo lilás.', 240, 240),
  v1: img('zipit-screens-v1.webp', 'Oito telas da primeira versão do Zip It, em fundo escuro com destaques verde-limão: início, cadastro da viagem, atividades, carregamento e lista.', 1000, 991, 'Primeira versão: o MVP feito para chegar rápido à App Store'),
  v2: [
    img('zipit-v2-traveler.webp', 'Tela redesenhada do Zip It perguntando como a pessoa vai viajar, com as opções Solo e Grupo ilustradas com malas.', 402, 874, 'Como você vai viajar?'),
    img('zipit-v2-activities.webp', 'Tela redesenhada de tipo de viagem e atividades, com categorias como natureza, eventos e esportes.', 402, 874, 'Tipo de viagem e atividades'),
    img('zipit-v2-home.webp', 'Tela inicial redesenhada com a próxima viagem e a lista de todas as viagens.', 402, 874, 'Início: próximas viagens'),
    img('zipit-v2-list.webp', 'Lista redesenhada com clima do destino, progresso e itens por categoria.', 402, 874, 'A lista, com clima e progresso'),
  ],
  illustration: img('zipit-illustration.webp', 'Ilustração do Zip It: malas coloridas, um balão e uma bolsa sobre um círculo lilás.', 520, 520),
  campaign: [
    img('zipit-campaign-instagram.webp', 'Painel de visualizações do Instagram do Zip It: 13.542 visualizações no período de 17 de abril a 16 de maio.', 520, 929, 'Instagram: 13 mil visualizações'),
    img('zipit-campaign-post.webp', 'Post do Zip It com dicas de bagagem para o Japão, que teve cerca de 7 mil visualizações.', 520, 900, 'Um post com 7 mil visualizações'),
    img('zipit-campaign-tiktok.webp', 'Painel de análise do TikTok do Zip It com 2.608 visualizações de publicações.', 520, 887, 'TikTok: 2,6 mil visualizações'),
  ],
  insights: img('zipit-insights.webp', 'Insights da conta do Zip It: 13.542 visualizações, 94,5% de não seguidores e 6.305 contas alcançadas.', 900, 825, 'Insights da conta durante a campanha'),
};

export const skyboundImages = {
  store: [
    img('skybound-store-1.webp', 'Logotipo do Sky Bound sobre céu azul-claro com nuvens.', 640, 1385, 'Identidade: céu, nuvens e tipografia arredondada'),
    img('skybound-store-2.webp', 'Tela Minhas conquistas do Sky Bound, com cartões de conquistas com foto.', 640, 1385, 'Todas as conquistas em um só lugar'),
    img('skybound-store-3.webp', 'Tela do Sky Bound inclinada mostrando a lista de conquistas registradas.', 640, 1385, 'Registrar vitórias, pequenas ou grandes'),
    img('skybound-store-4.webp', 'Tela de detalhe de uma conquista no Sky Bound, com foto e texto.', 640, 1385, 'Detalhe de cada conquista'),
  ],
  icon: img('skybound-icon.webp', 'Ícone do Sky Bound: o nome em letras arredondadas azul-marinho com uma ilustração de rosto entre as palavras.', 480, 480),
  launch: img('skybound-launch.webp', 'Tela de abertura do Sky Bound com nuvens no topo e na base.', 600, 1301),
  clouds: img('skybound-clouds.webp', '', 1600, 118),
  idvV1: img('skybound-idv-v1.webp', 'Primeira identidade visual do Sky Bound: ícone, ilustrações de rosto e nuvem, tipografia SF Pro, paleta de azuis e lilás e um mockup do app.', 1200, 541, 'Identidade, primeira versão'),
  idvV2: img('skybound-idv-v2.webp', 'Identidade visual ajustada do Sky Bound, com fundo azul-marinho, paleta com mais roxo e mockup do app em modo escuro.', 1200, 541, 'Identidade depois dos ajustes'),
  screensV1: img('skybound-screens-v1.webp', 'Primeiras telas do Sky Bound em pares de iPhones sobre fundo lilás.', 640, 1471, 'Primeiras telas'),
  screensLight: img('skybound-screens-light.webp', 'Telas ajustadas do Sky Bound em modo claro, em iPhones inclinados sobre degradê lilás.', 720, 1367, 'Telas ajustadas, modo claro'),
  screensDark: img('skybound-screens-dark.webp', 'Telas ajustadas do Sky Bound em modo escuro, em iPhones inclinados sobre azul-marinho.', 720, 1367, 'Telas ajustadas, modo escuro'),
};

export const aurisImages = {
  icon: img('auris-icon.webp', 'Ícone do Auris: uma cesta de compras verde-escura com um balão de fala contendo ondas sonoras, sobre círculo verde-claro.', 360, 360),
  bento: img('auris-bento.webp', 'Painel da identidade do Auris: logotipo, ícones de produtos de higiene, iPhones com a câmera apontada para uma prateleira e a tela de descrição de um produto.', 1400, 725, 'Identidade visual e telas do Auris'),
  journey: img('auris-journey.webp', 'Mapa da jornada de uma pessoa com baixa visão comprando produtos de higiene: planejamento, chegada ao mercado, busca na gôndola, verificação de informações, decisão e pagamento, com dores, oportunidades e curva de sentimentos.', 1300, 1086, 'Mapa da jornada: o momento mais crítico é a escolha do produto'),
  flow: img('auris-ui-flow.webp', 'Fluxo do Auris com anotações: tela de boas-vindas, câmera apontada para a prateleira, carregamento e descrição do produto com tipo, características, quantidade e fragrância.', 1400, 793, 'Fluxo principal: apresentação, câmera, carregamento e descrição'),
};

export const projects: Project[] = [
  {
    slug: 'auris',
    number: '01',
    title: 'Auris',
    kicker: 'A câmera do iPhone como apoio na escolha de produtos menstruais, para pessoas com baixa visão.',
    summary:
      'Auris é um app que usa a câmera do iPhone e inteligência artificial para reconhecer produtos de higiene menstrual e oferecer informações gerais e específicas sobre eles, apoiando a autonomia e a segurança de pessoas com baixa visão na hora da escolha.',
    year: '2025',
    status: 'Projeto da Apple Developer Academy',
    format: 'Em equipe',
    role: 'Tela de descrição, identidade no código e fluxo da câmera',
    platform: 'iOS · câmera',
    stack: ['Swift', 'SwiftUI', 'AVFoundation', 'API da OpenAI', 'VoiceOver', 'Dynamic Type'],
    links: [],
    theme: { panel: 'var(--color-sky)', ink: 'var(--color-ink-strong)', signature: '#1f6b4f' },
    cover: aurisImages.icon,
    chapters: [
      {
        id: 'contexto',
        label: 'Contexto',
        title: 'Acessibilidade no cotidiano',
        body: [
          'O Auris nasceu de um desafio no formato Challenge Based Learning, a partir da grande ideia "acessibilidade no cotidiano" e de uma pergunta: como explorar usos atípicos de tecnologias para promover acessibilidade nas interações com o comércio?',
          'O desafio refinado foi ressignificar tecnologias nativas do iPhone para tornar o dia a dia mais acolhedor para pessoas com visão reduzida.',
        ],
      },
      {
        id: 'pesquisa',
        label: 'Pesquisa e descoberta',
        title: 'Onde a compra fica difícil',
        body: [
          'A experiência foi moldada a partir de uma jornada do usuário, mapeada com uma entrevista semiestruturada. A jornada vai do planejamento da compra até o pagamento, passando por encontrar a gôndola e verificar as informações do produto.',
          'O momento mais crítico apareceu na escolha do produto — considerando satisfação, preferência e conforto. Daí veio a necessidade central do projeto: uma descrição filtrada, com as informações que mais ajudam a decidir.',
        ],
        images: [aurisImages.journey],
      },
      {
        id: 'solucao',
        label: 'Proposta',
        title: 'Primeiro o essencial, depois o resto',
        body: [
          'A solução é um aplicativo que mostra os detalhes de produtos de higiene íntima usando tecnologias nativas do iPhone, para diminuir o constrangimento e dar mais autonomia e segurança na escolha.',
          'A pessoa aponta a câmera para o produto e recebe primeiro os dados principais e, em seguida, uma descrição completa.',
        ],
        images: [aurisImages.flow],
      },
      {
        id: 'participacao',
        label: 'Minha participação',
        title: 'O que eu fiz neste projeto',
        body: [
          'O Auris foi desenvolvido em equipe na Apple Developer Academy. No código, minha parte foi a tela de descrição do produto — a que a pessoa realmente lê ou ouve — e a passagem da identidade visual para o app.',
        ],
        list: [
          'Construí a tela de descrição dentro da identidade: os verdes primário e secundário, o fundo em degradê e o componente de cartão arredondado usado nas informações.',
          'Ajustei hierarquia e espaçamento dos títulos e acrescentei um botão de voltar na parte de baixo da tela.',
          'Mudei o fluxo da câmera para fotografar sem pedir confirmação, tirando um passo do caminho, e ajustei o tempo da captura.',
        ],
      },
      {
        id: 'interface',
        label: 'Decisões de UX/UI',
        title: 'Pensada para além do visual',
        body: [
          'A interface tem poucos elementos para ser simples e rápida de usar — e de forma equivalente com as tecnologias de acessibilidade da Apple, como o VoiceOver e o Seleciona e Fala.',
          'As cores formam uma paleta monocromática com dois tons de verde de alto contraste. A descrição de cada produto é organizada em sequência com títulos (headings) e Dynamic Type, para que a leitura funcione tanto na tela quanto em voz.',
        ],
        images: [aurisImages.bento],
      },
      {
        id: 'tecnica',
        label: 'Implementação técnica',
        title: 'Acessibilidade escrita no código',
        body: [
          'Em SwiftUI, a equipe usou modificadores de acessibilidade para controlar o que o VoiceOver lê e como a interface reage ao tamanho de texto do sistema: ícones decorativos ficam ocultos, elementos relacionados são lidos de uma vez, ilustrações recebem descrições personalizadas e formas crescem junto com a fonte.',
          'Tudo foi conferido com o Accessibility Inspector, entre outras ferramentas.',
          'O reconhecimento funciona assim: a câmera, feita com AVFoundation, captura a foto da embalagem; a imagem vai para um modelo multimodal da OpenAI, que devolve uma resposta estruturada em JSON com os campos que importam na escolha — nome, fluxo, se tem abas, cobertura, tamanho, categoria, quantidade, se tem fragrância e uma descrição geral. Essa estrutura é o que permite mostrar primeiro o essencial e depois o resto.',
        ],
        code: {
          caption: 'Trecho real do projeto: ícone oculto para o VoiceOver e textos combinados em uma única leitura.',
          snippet: `HStack(alignment: .top) {
    Image(systemName: "waveform")
        .accessibilityHidden(true) // Impede o VoiceOver de ler
    VStack(alignment: .leading) {
        Text("Receba sua descrição")
        Text("Veja primeiro os dados principais, depois, uma descrição completa.")
    }
    .accessibilityElement(children: .combine) // Lê tudo de uma vez
}

@ScaledMetric(relativeTo: .body) private var size: CGFloat = 1
Circle().frame(width: size * 55) // Cresce com o tamanho de texto do iPhone`,
        },
      },
      {
        id: 'resultados',
        label: 'Resultados e aprendizados',
        title: 'Validado com quem usaria',
        body: [
          'O resultado é um app compatível com as tecnologias de acessibilidade nativas do iOS, com uma descrição dividida entre informações principais e gerais, validado com uma usuária com baixa visão.',
          'Reconhecimento por câmera e IA pode errar; por isso, o Auris se apresenta como apoio à escolha, e não como garantia de identificação.',
        ],
        list: [
          'Aprendemos a trabalhar com acessibilidade e a validar o que fazíamos com ferramentas como o Accessibility Inspector.',
          'Terminar o projeto e validar com uma usuária mostrou o valor social do que estávamos construindo.',
          'A organização e o planejamento da equipe desde o começo fizeram diferença.',
        ],
      },
    ],
  },

  {
    slug: 'zip-it',
    number: '02',
    title: 'Zip It',
    kicker: 'Listas de bagagem que consideram destino, clima, duração e tipo de viagem.',
    summary:
      'Zip It é um aplicativo de listas de bagagem feito em dupla. A partir do destino, das datas, do tipo de viagem e das atividades planejadas, ele monta uma lista personalizada, organizada por categorias e ajustável do jeito de cada pessoa.',
    year: '2026',
    status: 'Publicado na App Store',
    format: 'Dupla (Lana e Cami)',
    role: 'Produto e divulgação em dupla; desenvolvimento iOS',
    platform: 'iOS 26+ · iPad',
    stack: ['Swift', 'SwiftUI', 'MVVM', 'Foundation Models', 'WeatherKit', 'RevenueCat', 'PostHog'],
    links: [
      { label: 'Ver na App Store', href: APP_STORE.zipit },
      { label: 'Site do app', href: 'https://alanaqroz.github.io/ZipItWebsite/' },
    ],
    theme: { panel: 'var(--color-paper)', ink: 'var(--color-ink)', signature: '#8b7be8' },
    cover: zipitImages.listScreen,
    chapters: [
      {
        id: 'contexto',
        label: 'Contexto',
        title: 'Aprender negócios construindo um app de viagem',
        body: [
          'O Zip It veio de um desafio com a grande ideia "business em viagem": como aprender aspectos de negócio — monetização, marketing e métricas — em um app focado em organização de viagens?',
          'O problema escolhido foi a mala. Uma viagem de trabalho no inverno pede uma bagagem diferente de férias na praia com a família, e quem viaja perde tempo e esquece itens.',
        ],
      },
      {
        id: 'produto',
        label: 'O produto',
        title: 'O que o app faz',
        list: [
          'Gera uma lista personalizada com inteligência artificial a partir de destino, datas, tipo de viagem e atividades.',
          'Considera o clima e a estação do destino nas sugestões, e mostra a previsão dentro do app.',
          'Ajusta a lista para viagens sozinha ou em grupo, incluindo crianças e bebês.',
          'Organiza os itens por categoria, com quantidades editáveis e checklist de progresso.',
          'Permite compartilhar a lista com quem vai viajar junto.',
        ],
        images: zipitImages.store.slice(0, 2),
      },
      {
        id: 'participacao',
        label: 'Minha participação',
        title: 'Um app feito a quatro mãos',
        body: [
          'O Zip It foi feito em dupla, por mim e pela Cami, passando por produto, interface, publicação e divulgação. O app está publicado na App Store desde maio de 2026.',
          'No código, a implementação do app foi minha: os 47 commits do repositório, do primeiro fluxo de cadastro em março de 2026 às correções e melhorias de desempenho de julho.',
        ],
        list: [
          'Fluxo de cadastro em etapas: destino e datas, quem vai, tipo de viagem e atividades, confirmação e geração da lista.',
          'Integração com WeatherKit para o clima e com Foundation Models para as sugestões de itens.',
          'Assinatura Pro com RevenueCat, eventos de uso com PostHog e exportação da lista em PDF.',
          'Adaptação para iPad e o redesign do onboarding e das telas de cadastro.',
        ],
      },
      {
        id: 'interface',
        label: 'Decisões de UX/UI',
        title: 'Primeiro publicar, depois redesenhar',
        body: [
          'A interface foi feita em duas etapas. A primeira versão foi um MVP desenvolvido de forma ágil, com foco em chegar à App Store no menor tempo possível.',
          'Depois, avaliamos as telas e fizemos um redesign para melhorar a experiência: um cadastro que guia a pessoa etapa por etapa e uma identidade com mais personalidade e proximidade, que reflete a expectativa antes de uma viagem. A paleta foi definida por alto contraste e vivacidade.',
        ],
        images: [zipitImages.v1, ...zipitImages.v2],
      },
      {
        id: 'divulgacao',
        label: 'Marketing e métricas',
        title: 'Uma campanha de um mês',
        body: [
          'De 14 de abril a 15 de maio de 2026, fizemos uma campanha com tráfego orgânico no Instagram e no TikTok.',
          'Também testamos tráfego pago pelo Meta Business por cinco dias: reservamos R$ 50,00 e usamos R$ 20,57. As visualizações foram altas, mas as interações não aumentaram — um aprendizado sobre a diferença entre ser visto e gerar engajamento.',
        ],
        stats: [
          { value: '13 mil', label: 'visualizações no Instagram' },
          { value: '7 mil', label: 'visualizações em um único post' },
          { value: '2,6 mil', label: 'visualizações no TikTok' },
        ],
        images: zipitImages.campaign,
      },
      {
        id: 'tecnica',
        label: 'Implementação técnica',
        title: 'Regras para o básico, IA para o que falta',
        body: [
          'O app é feito em SwiftUI com MVVM. A lista nasce em duas camadas. A primeira é feita por regras: as quantidades de roupa crescem com a duração da viagem (com limites), e o clima entra como uma classificação simples — frio abaixo de 15 °C, quente a partir de 25 °C — que acrescenta casaco e luvas ou boné e protetor solar. Documentos e itens de crianças e bebês são multiplicados pelo número de viajantes.',
          'A segunda camada usa o Foundation Models, o modelo de linguagem da Apple que roda no próprio iPhone. Ele recebe o destino, o clima, o tipo de viagem, os viajantes e as atividades, e sugere no máximo seis itens que ainda faltam, em categorias que a lista básica não cobre. As respostas chegam num formato fixo (categoria#item) e são filtradas antes de entrar na lista. Se a IA falhar, a lista básica continua lá.',
          'O clima vem do WeatherKit, a partir da geocodificação do destino. Como a previsão só alcança cerca de dez dias, viagens mais distantes usam uma estimativa de estação calculada pela latitude.',
        ],
      },
      {
        id: 'desafios',
        label: 'Desafios',
        title: 'Marabá não tem inverno em julho',
        body: [
          'A primeira versão da estação do ano seguia o calendário do clima temperado: no hemisfério sul, junho a agosto era "inverno". Para um destino perto da linha do Equador, como Marabá, isso classificava como inverno um período que, lá, é seco e quente.',
          'A correção trata os trópicos (entre 23,5° N e 23,5° S) de outro jeito, alternando entre período seco e chuvoso — e a mesma lógica passou a valer também quando o WeatherKit não responde.',
          'Em julho de 2026, também trabalhei em desempenho: a gravação das viagens saiu da thread principal, formatadores de data passaram a ser reaproveitados e o agrupamento do checklist deixou de ser recalculado a cada acesso.',
        ],
        code: {
          caption: 'Trecho real do WeatherService: estações nos trópicos.',
          snippet: `// Dentro dos trópicos não existem as 4 estações do clima temperado —
// a variação real é entre período seco e período chuvoso.
if abs(latitude) <= 23.5 {
    let mesesSecosNoSul: Set<Int> = [5, 6, 7, 8, 9, 10]
    let estacaoSeca = hemisferioSul
        ? mesesSecosNoSul.contains(mes)
        : !mesesSecosNoSul.contains(mes)
    return estacaoSeca ? "Summer" : "Winter"
}`,
        },
      },
      {
        id: 'resultados',
        label: 'Resultados',
        title: 'Publicado — e com a próxima ideia pronta',
        body: [
          'O Zip It foi publicado na App Store com a proposta de facilitar o planejamento de viagens com listas personalizadas a partir de destino, clima e duração. Depois do lançamento, o app recebeu atualizações e estava na versão 1.9.2 em julho de 2026.',
          'Já temos uma nova ideia pronta para ser implementada.',
        ],
      },
    ],
  },

  {
    slug: 'sky-bound',
    number: '03',
    title: 'Sky Bound',
    kicker: 'Um lugar para registrar e celebrar conquistas — da ideia à App Store, de ponta a ponta.',
    summary:
      'Sky Bound é um app para registrar conquistas pessoais, grandes ou pequenas, com foto, descrição e categoria. É um projeto individual, feito em uma semana: passei pela concepção, pelo design da interface e pelo desenvolvimento até a publicação na App Store.',
    year: '2025',
    status: 'Publicado na App Store',
    format: 'Individual',
    role: 'Produto, UX/UI, design e desenvolvimento',
    platform: 'iOS 17.6+',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'MVVM', 'UIKit'],
    links: [
      { label: 'Ver na App Store', href: APP_STORE.skybound },
      { label: 'Código no GitHub', href: 'https://github.com/alanaqroz/SkyBound-' },
    ],
    theme: { panel: 'var(--color-cream)', ink: 'var(--color-ink)', signature: '#0c1a57' },
    cover: skyboundImages.icon,
    chapters: [
      {
        id: 'contexto',
        label: 'Contexto',
        title: 'Conquistas que passam rápido demais',
        body: [
          'Muitas vitórias do dia a dia acabam esquecidas. O Sky Bound nasceu para dar a cada uma delas um espaço próprio: uma meta alcançada, uma viagem, um hábito mantido, um projeto concluído.',
          'A ideia é simples de propósito: um espaço pessoal para acompanhar a própria jornada, sem complicações, distrações ou funções desnecessárias.',
        ],
      },
      {
        id: 'processo',
        label: 'De ponta a ponta',
        title: 'Uma semana, da ideia à App Store',
        body: [
          'O Sky Bound foi um desafio individual de uma semana na Apple Developer Academy. Passei por todas as etapas: definir o produto, desenhar a interface, implementar e publicar.',
          'Na época, eu estava aprendendo UIKit. Recebi ajuda ao longo do processo, mas também consegui fazer muita coisa sozinha.',
        ],
        figure: 'skybound-process',
      },
      {
        id: 'produto',
        label: 'O produto',
        title: 'O que dá para fazer',
        list: [
          'Registrar uma conquista com foto, título e descrição.',
          'Organizar por categorias — Saúde, Estudos, Pessoal, Fitness e Criatividade —, cada uma com cor e ícone próprios.',
          'Filtrar por categoria para encontrar algo rapidamente.',
          'Editar ou excluir conquistas quando quiser.',
          'Usar em modo claro ou escuro.',
        ],
        images: [skyboundImages.store[1], skyboundImages.store[3]],
      },
      {
        id: 'identidade',
        label: 'Identidade visual',
        title: 'Céu, nuvens e uma segunda versão',
        body: [
          'A identidade parte do nome: céu azul-claro, nuvens, ilustrações e uma tipografia arredondada no logotipo, com SF Pro na interface. Depois da primeira entrega, a identidade e as telas passaram por ajustes — a paleta ganhou mais azul-marinho e roxo, e o app ganhou uma versão escura.',
        ],
        images: [skyboundImages.idvV1, skyboundImages.idvV2],
      },
      {
        id: 'interface',
        label: 'Decisões de UX/UI',
        title: 'Telas antes e depois',
        body: [
          'As primeiras telas resolviam o fluxo principal: ver as conquistas, criar uma nova e abrir o detalhe. Na revisão, as telas foram refinadas em modo claro e escuro.',
          'Duas decisões de acessibilidade entraram no app: interface escura e suporte a texto maior.',
        ],
        images: [skyboundImages.screensV1, skyboundImages.screensLight, skyboundImages.screensDark],
      },
      {
        id: 'tecnica',
        label: 'Implementação técnica',
        title: 'SwiftUI, SwiftData e MVVM',
        body: [
          'O app segue MVVM: o modelo Conquista é uma entidade do SwiftData, a ViewModel concentra filtro e persistência, e as views cuidam da lista, do detalhe e da criação e edição.',
          'Tudo fica salvo localmente no aparelho com SwiftData. Para escolher fotos da galeria, usei uma ponte entre UIKit e SwiftUI (ImagePicker).',
        ],
      },
      {
        id: 'aprendizados',
        label: 'Resultados e aprendizados',
        title: 'Saber o que deixar de fora',
        body: [
          'Mesmo sem implementar tudo o que eu gostaria, consegui fechar o escopo dentro de uma semana. O Sky Bound foi publicado na App Store em dezembro de 2025 e recebeu atualizações depois disso.',
        ],
        quote: {
          text: 'Esse é, sem dúvida, um dos projetos individuais dos quais mais me orgulho e que mais têm significado para mim. É algo que eu realmente usaria.',
          source: 'Lana, nas reflexões do projeto',
        },
        list: [
          'Eu poderia ter distribuído meu tempo de forma mais uniforme ao longo do projeto.',
          'Ter um significado emocional para mim fez o projeto ser muito bom de construir.',
          'Respeitar o fato de que eu não conseguiria fazer tudo contribuiu muito para o resultado.',
        ],
      },
    ],
  },

  {
    slug: 'aegis',
    number: '04',
    title: 'AEGIS',
    kicker: 'Governança regulatória com agentes de IA, construída em equipe num hackathon.',
    summary:
      'AEGIS (Autonomous Enterprise Governance Intelligence System) é uma plataforma multiagente para conformidade regulatória contínua com LGPD, GDPR e ISO 27001. Foi desenvolvida em equipe de quatro pessoas no All Things Agentic Hackathon. Meu papel foi liderar a documentação e a submissão.',
    year: '2026',
    status: 'Projeto de hackathon',
    format: 'Equipe de 4 pessoas',
    role: 'Documentação e submissão (Devpost)',
    platform: 'Web · API',
    stack: ['Python', 'FastAPI', 'Next.js', 'Gemini e Gemma', 'Google Cloud Run', 'Terraform'],
    stackNote: 'Stack do projeto, construída pela equipe.',
    links: [{ label: 'Repositório no GitHub', href: 'https://github.com/josielqrozjr/aegis-autonomous-agentic' }],
    theme: { panel: 'var(--color-paper)', ink: 'var(--color-ink-strong)', signature: 'var(--color-rust)' },
    chapters: [
      {
        id: 'contexto',
        label: 'Contexto',
        title: 'Quando a regra muda, o que deixa de valer?',
        body: [
          'Empresas investem em políticas e auditorias, mas muitas vezes não conseguem responder a uma pergunta simples: quando um novo requisito entra em vigor, quais evidências deixam de valer e quais decisões precisam ser revistas?',
          'O AEGIS foi construído em torno dessa pergunta. A ideia não é responder dúvidas sobre a LGPD ou a GDPR, e sim tratar conformidade como um processo contínuo de observação, validação e resposta.',
        ],
      },
      {
        id: 'solucao',
        label: 'Proposta',
        title: 'Agentes especialistas e um grafo de confiança',
        body: [
          'O sistema analisa documentos internos com agentes especialistas por domínio — privacidade, segurança e governança —, ancora cada achado em uma evidência com origem rastreável e registra as dependências entre elas em um Trust Graph.',
          'Quando uma regra muda, o AEGIS calcula o impacto, invalida só os nós afetados e executa de novo apenas o especialista necessário, em vez de reanalisar tudo.',
        ],
        figure: 'aegis-pipeline',
      },
      {
        id: 'participacao',
        label: 'Minha participação',
        title: 'Documentação, narrativa e submissão',
        body: [
          'A equipe dividiu o trabalho por frentes: arquitetura de IA e agentes, backend e infraestrutura em nuvem, interface web e documentação. A minha frente foi a documentação e a submissão no Devpost.',
          'Na prática, isso significou explicar um sistema técnico com muitas partes de um jeito que avaliadores conseguissem entender e reproduzir.',
        ],
        list: [
          'README do projeto e instruções de reprodução.',
          'Project Story — rascunho em português e versão final em inglês.',
          'Roteiro do pitch em vídeo.',
          'Checklist de qualidade da submissão.',
          'Ajustes no cenário de demonstração para alinhar a política fictícia, as citações de evidência e as respostas determinísticas, com teste de regressão para a correspondência das citações.',
        ],
      },
      {
        id: 'aprendizados',
        label: 'Aprendizados',
        title: 'Documentar também é decidir',
        body: [
          'Três aprendizados da equipe ficaram registrados na Project Story, que eu escrevi.',
        ],
        list: [
          'O mais difícil num sistema de conformidade não é modelar a regra, e sim a dependência: uma regra se conecta a evidências, decisões, documentos e interpretações.',
          'Em áreas reguladas, explicar importa tanto quanto concluir. Não basta dizer que o agente "achou um risco"; é preciso mostrar de onde veio a conclusão e o que a sustenta.',
          'Prever falhas faz parte do produto: por isso o projeto tem um modo determinístico, que roda os testes sem nuvem nem chaves de API.',
        ],
      },
      {
        id: 'resultados',
        label: 'Entrega',
        title: 'O que foi submetido',
        body: [
          'A submissão reuniu o sistema publicado no Google Cloud Run, 79 testes automatizados reproduzíveis sem credenciais, o README com instruções passo a passo, a Project Story e o roteiro do pitch em vídeo — a parte de documentação foi a minha frente.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string | null) => projects.find((p) => p.slug === slug) ?? null;
