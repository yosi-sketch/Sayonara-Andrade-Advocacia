# Sayonara Andrade Advocacia

Site institucional em português, com Regularização de Imóveis, Direito das Famílias e Sucessões. Consultoria presencial em Pedro Leopoldo, MG, e on-line.

## Executar

- Desenvolvimento: `npm run dev -- --port 3005`.
- Produção: `npm run build` e `npm run start -- --port 3006`.
- Verificação: `npm run lint -- app`.

Next.js 16.3.5, React 19.2.8 e Tailwind CSS 4. Consulte AGENTS.md e os guias locais em node_modules/next/dist/docs antes de alterar APIs do Next.js.

## Conteúdo e marca

Dados e links em app/lib/brand.ts. Seções, menu móvel, FAQ e três diálogos em app/page.tsx. Cores do logo em app/globals.css por @theme inline, sem arquivo Tailwind config legado. Cormorant Garamond e Manrope via next/font em app/layout.tsx.

Telefone e WhatsApp: (31) 99877-0607, com destino 5531998770607. O link de WhatsApp fornecido no material continha uma sequência divergente; a implementação adota o telefone completo informado. Instagram: @sayonaraandrad. Endereço: Rua Amando Filho, 181 — Centro, Pedro Leopoldo — MG, 33600-000.

Os dois arquivos em public são cópias integrais dos anexos. Manifesto de origem e integridade em .impeccable/asset-origins.json. As avaliações remetem ao perfil Google pelo CID fornecido; não há integração ao vivo, nota média ou relatos inventados.

E-mail, OAB e domínio não foram fornecidos. Configure NEXT_PUBLIC_SITE_URL somente após definir o domínio real. Sem ele, imagens sociais são omitidas.

## Verificação desta atualização

Build de produção e lint da aplicação concluídos. Seis larguras verificadas: 320, 390, 518, 768, 1024 e 1440px, sem overflow horizontal. Três diálogos abrem e fecham com Escape e usam mensagens contextuais. Foco inicial, ciclo Tab/Shift+Tab, fundo inert e retorno do foco preservados. Menu móvel fecha ao selecionar um link. Evidências locais em .impeccable/review/sayonara; capturas por seção porque a captura contínua do navegador não está disponível neste ambiente.

O site está preparado para publicação; esta tarefa não o publicou em domínio externo.
