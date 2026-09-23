# Landing Page — Dani Hoffman (Curso + Planilha)

Landing page de vendas em React + TypeScript + Vite + CSS Modules, construída a partir da estrutura do portfólio da TeamZ.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist para deploy
```

## Antes de publicar

1. **Link do checkout, nome, preço e garantia:** tudo fica em `src/config/offer.ts`.
2. **Foto:** coloque `DANI_2.png` em `public/dani-hoffman.png`. Ela é usada no Hero, na seção Sobre e como imagem de compartilhamento (`og:image`).
3. **Conteúdo do produto:** módulos do curso e recursos da planilha estão em `src/sections/Produto/Produto.tsx`.

## Estrutura

- `src/components/`: Button, Container, Header, Footer, SectionHeading, StickyCta (barra de compra fixa no mobile)
- `src/sections/`: Hero → Dor → Historia → Produto → ParaQuem → Sobre → Oferta → Faq → CtaFinal
- `src/styles/variables.css`: tokens da paleta preto → marrom → dourado e das fontes (Cormorant Garamond + Manrope)
