---
name: Sayonara Andrade Advocacia
description: Advocacia próxima, com bronze, preto quente e superfícies claras.
colors:
  brand-50: "#f4efe7"
  brand-100: "#f0e0d0"
  brand-200: "#e1d1b9"
  brand-300: "#d0c0a0"
  brand-400: "#b59b75"
  brand-500: "#947753"
  brand-600: "#8b6944"
  brand-700: "#806040"
  brand-800: "#65492f"
  brand-900: "#302820"
  brand-950: "#201a17"
  ink: "#201a17"
  ink-soft: "#665c54"
  paper: "#ffffff"
  ivory: "#faf8f4"
  linen: "#eee7dd"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.6rem"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  display-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  display-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.8rem"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  headline-desktop:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.55rem"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-0.035em"
  service-title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.55rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  service-title-tablet:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.8rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: "2rem"
    letterSpacing: "-0.025em"
  professional-name:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: "2.25rem"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "28px"
  body-hero-tablet:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "32px"
  body-small:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "28px"
  compact-body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "24px"
  navigation:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
  label-large:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "24px"
  label-compact:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "15px"
    letterSpacing: "0.13em"
rounded:
  sm: "4px"
  sheet: "16px"
  full: "9999px"
spacing:
  icon-gap: "8px"
  control-gap: "12px"
  content-gap: "16px"
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "48px"
  panel-mobile: "28px"
  panel-tablet: "40px"
  section-mobile: "80px"
  section-tablet: "112px"
  section-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-800}"
    textColor: "{colors.paper}"
  button-primary-small:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-large:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "16px 20px"
  button-primary-large-tablet:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.paper}"
    typography: "{typography.label-large}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brand-800}"
    rounded: "{rounded.full}"
    padding: "16px 24px"
  address-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "28px"
  dialog:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "28px"
---

# Design System: Sayonara Andrade Advocacia

## Overview

**Creative North Star: "Clareza com cuidado"**

O bronze e o preto quente do logo orientam uma presença profissional e acolhedora. Superfícies claras, títulos expressivos e leitura espaçada dão atenção à pessoa, ao patrimônio e à história de cada família. Cormorant Garamond traz presença aos títulos; Manrope sustenta textos e controles.

A identidade usa o logo e o retrato originais da Dra. Sayonara Andrade. Divisórias finas e mudanças de superfície organizam o conteúdo; a fotografia real é o principal elemento de reconhecimento. Este registro descreve o sistema implementado, extraído de app/globals.css, app/layout.tsx, app/page.tsx e app/components/GlowingButton.tsx.

**Key Characteristics:**

- Bronze para ações e ênfases; preto quente e dourado claro nos trechos escuros.
- Logo integral sobre superfície clara e retrato em sua proporção original.
- Títulos serifados, leitura sem serifa e composição arejada.
- Serviços em linhas, controles planos e movimento breve que respeita a preferência do usuário.

## Colors

### Primary

O bronze de brand-700 ancora CTAs, links, ícones e ênfases. brand-800 aprofunda o estado de interação. A escala complementar vai das superfícies brand-50 ao preto quente brand-950; brand-100 e brand-200 mantêm a leitura nas seções escuras. brand-300 e brand-100 registram os dourados claros amostrados do logo. Os demais degraus permanecem disponíveis no tema, sem exigir que todos apareçam em cada tela.

### Neutral

Ink sustenta os títulos e o texto principal; ink-soft serve à leitura secundária. Paper é usado no cabeçalho, painéis e seções brancas; ivory é o fundo principal. Linen é um neutro complementar declarado no tema. Valores normativos estão no frontmatter; rampas e metadados estão no sidecar.

**The Logo Integrity Rule.** Preservar o logo original, sem recoloração, distorção ou corte, e oferecer uma superfície clara para sua leitura.

## Typography

A família de títulos é Cormorant Garamond, com Georgia e serif como alternativas. O carregamento oferece pesos 500 e 600; os títulos implementados usam 500. A família de leitura e controles é Manrope, seguida por system-ui e sans-serif.

Display cresce de celular a tablet e desktop; headline faz o mesmo nas seções. Títulos de serviço usam service-title e service-title-tablet. Title atende legendas, etapas e endereço; professional-name destaca a profissional. Body tem largura máxima recorrente de 36rem; textos auxiliares usam body-small e compact-body. Labels usam peso 600; caixa alta fica nos links compactos de mapa e na chamada final. Títulos principais usam quebra balanceada.

## Layout

O contêiner principal centralizado tem largura máxima de 80rem. As margens internas passam de gutter-mobile para gutter-tablet em 640px e gutter-desktop em 1024px. A maioria das seções usa a sequência section-mobile, section-tablet e section-desktop. FAQ e chamada final têm espaçamento próprio, mais compacto.

A base é uma coluna. Em 640px, as linhas de serviço passam a ícone de 48px, texto flexível e ação; as informações de atendimento viram três colunas. Em 768px, o cabeçalho da seção de atuação pode se distribuir horizontalmente. Em 1024px, navegação desktop e composições de duas colunas entram em cena. O hero usa proporção 1.05fr/0.95fr, com retrato de até 440px; no celular, o retrato vem depois do texto e limita-se a 400px.

O logo do cabeçalho mede 190px abaixo de 360px, 230px a partir desse ponto e 280px a partir de 640px, sempre com altura automática. O cabeçalho fixo no topo mede 100px no celular e 112px a partir de 640px. Âncoras reservam espaço para ele. O diálogo ocupa a base da tela no celular; a partir de 640px fica centralizado, com largura máxima de 36rem e altura máxima de 90dvh.

## Elevation & Depth

A página usa profundidade por contraste tonal, divisórias e fotografia. A única sombra estrutural registrada é a do diálogo: 0 18px 48px rgb(32 26 23 / 18%). O fundo do diálogo combina ink a 55% e desfoque leve. Serviços, painéis e CTAs permanecem planos.

**The Flat Surface Rule.** Organizar a página por superfícies e divisórias; reservar a sombra registrada para o diálogo.

## Shapes

Painéis e fotografia têm contornos retos. CTAs e controles retangulares usam sm; ícones, botão de fechar e ações compactas usam full. A folha de diálogo tem cantos superiores sheet no celular e sm em todos os cantos a partir de 640px. Bordas de 1px em ink a 10–15% separam conteúdo; sobre fundo escuro, divisórias claras mantêm a hierarquia.

## Components

### Buttons

O CTA principal combina fundo bronze, texto branco, altura mínima de 44px e espaçamento definido por tamanho no frontmatter. O estado hover aprofunda fundo e borda durante 200ms. O tamanho amplo aumenta fonte e margens laterais a partir de 640px. A chamada final usa uma ação branca em cápsula sobre bronze, com deslocamento de 2px no hover. O foco tem contorno de 2px; nos fundos escuros e bronze, o contorno é branco.

### Navigation

Os links desktop usam Manrope semibold e uma linha bronze de 1px que se revela em 180ms. A navegação completa aparece em 1024px. Abaixo disso, o botão de menu de 44px abre uma lista com animação de altura e opacidade de 220ms; Escape e a escolha de seção fecham o menu. O link de salto aparece ao receber foco.

### Service rows and dialogs

As três áreas são Regularização de Imóveis, Direito das Famílias e Sucessões. Cada linha reúne ícone circular, título, resumo e botão de detalhes. O diálogo usa transição de 240ms, rolagem interna e CTA contextual. Ao abrir, o fundo fica inerte e a rolagem da página é bloqueada; o foco vai para fechar, circula entre os controles e retorna ao acionador após o fechamento. Escape e clique fora fecham.

### FAQ and address

Perguntas usam details/summary nativos, peso 600 e divisórias finas. O painel de endereço é branco, com borda discreta, espaçamento panel-mobile/panel-tablet, um traço bronze de 112 × 4px e link de mapa em cápsula. Não há campos de formulário.

### Identity and motion

O logo está em public/sayonara-andrade-logo.png (2172 × 724); o retrato, em public/sayonara-andrade-retrato.png (1086 × 1448). Os arquivos integrais permanecem preservados; origens e hashes constam em .impeccable/asset-origins.json e nos sidecars PNG. A revelação do retrato usa clip-path durante 1s, termina com a imagem inteira e não altera seus bytes.

Blocos editoriais usam initial=false e permanecem acessíveis desde a carga. As variantes declaradas de revelação e escalonamento estão registradas no sidecar. MotionConfig respeita reducedMotion=user; a preferência de movimento reduzido desativa a assinatura, reduz durações CSS e troca a rolagem suave por automática.

## Do's and Don'ts

### Do:

- **Do** preservar integralmente logo e retrato, com suas proporções e cores originais.
- **Do** usar bronze nas ações e dourados claros para leitura sobre preto quente.
- **Do** manter foco visível, navegação por teclado e movimento reduzido.
- **Do** manter os tokens alinhados aos fontes do tema e aos componentes implementados.
- **Do** usar somente dados institucionais fornecidos e centralizados em app/lib/brand.ts.

### Don't:

- **Don't** recolorir o logo ou aplicar corte permanente ao retrato.
- **Don't** acrescentar brilhos aos CTAs planos ou sombras às linhas de serviços.
- **Don't** ocultar conteúdo até a rolagem nem exigir animação para acessar informações.
- **Don't** inventar notas, depoimentos, credenciais ou promessas de resultado.
