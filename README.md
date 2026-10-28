# Alana Queiroz — Caderno de produto

Portfólio pessoal de **Alana Queiroz (Lana)**: estudante de Ciência da Computação na PUCPR e participante da Apple Developer Academy.

> Eu penso, desenho e desenvolvo produtos digitais.

O site é pensado como uma publicação editorial — painéis de cor, tipografia serifada de alto contraste, fotos impressas, post-its e anotações à mão — apresentando quatro projetos: **Auris**, **Zip It**, **Sky Bound** e **AEGIS**, cada um com seu estudo de caso.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # checa tipos e gera dist/
npm run preview    # serve o build
```

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Textos dos projetos e estudos de caso | `src/content/projects.ts` |
| Sobre mim, formação, habilidades, links | `src/content/site.ts` |
| Cores, fontes, espaçamentos, animações | `src/styles/tokens.css` |

**Notas de edição.** Nos estudos de caso, todo capítulo com `pending` aparece no site como uma nota tracejada "A preencher". São os lugares onde ainda falta informação real (por exemplo, a participação no Auris). Quando escrever o texto, coloque em `body` e apague o `pending`.

**Foto no "Sobre".** Coloque a imagem em `public/images/` e preencha `about.photo` em `src/content/site.ts`.

## Imagens

Os originais ficam em `assets-src/`. Para gerar as versões otimizadas (WebP) em `public/images/`:

```bash
npm run images     # converte e redimensiona
npm run og         # gera a imagem de compartilhamento (public/og-image.png)
```

Origem das imagens: capturas publicadas pela própria Alana na App Store (Zip It e Sky Bound), assets dos repositórios dos apps e materiais das páginas de cada projeto no Notion (em `assets-src/notion/`, já reduzidos). Nenhum banco de imagens foi usado.

## Estrutura

```
src/
├── content/      # dados: projetos, textos, links
├── components/   # Paper (post-it, polaroid, iPhone, etiquetas), links, header, footer, figuras
├── sections/     # Capa, Trabalhos, Sobre, Formação, Contato
├── pages/        # Estudo de caso
├── lib/          # roteador (?caso=slug) e animação de entrada
└── styles/       # tokens, base, componentes, seções, estudo de caso
```

As páginas de estudo de caso usam a URL `?caso=auris`, `?caso=zip-it` etc. Isso funciona em qualquer hospedagem estática (GitHub Pages incluído) sem configurar redirecionamentos.

## Acessibilidade

HTML semântico, hierarquia de títulos, link "pular para o conteúdo", foco visível, navegação por teclado (o menu móvel fecha com Esc), textos alternativos nas imagens informativas, contraste revisado contra WCAG AA e animações desligadas quando o sistema pede redução de movimento.

## Créditos

- Tipografia: [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda), [Inter](https://fonts.google.com/specimen/Inter) e [Caveat](https://fonts.google.com/specimen/Caveat), todas sob SIL Open Font License, servidas localmente via [Fontsource](https://fontsource.org).
- Construído com React, TypeScript e Vite.

## Contato

- [GitHub](https://github.com/alanaqroz)
- [LinkedIn](https://www.linkedin.com/in/alanaqroz/)
