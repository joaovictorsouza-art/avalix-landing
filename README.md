# Nexus: landing page

Landing page da Nexus em **React + Vite + Tailwind CSS**.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 18 ou mais novo.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão final (pasta `dist/`, pronta para publicar na Netlify, Vercel etc.):

```bash
npm run build
npm run preview   # opcional: confere a versão final no navegador
```

## Onde editar

**Textos, preços e contatos ficam em `src/content.ts`.**

- **Preços:** objeto `PRECOS`, no topo do arquivo. Só números: `79.9` aparece como "R$ 79,90".
- **Contatos:** objeto `contato`.
- **Soluções, dúvidas e projetos:** objetos `solucoes`, `duvidas` e `projetos`.

O telefone e o Instagram também aparecem nos dados para o Google, em `index.html`. Se mudarem, atualize lá também.

## Estrutura

```
src/
  content.ts            ← textos, preços e contatos
  App.tsx               ← ordem das seções
  index.css             ← tokens da marca (cores, raios, sombras)
  experimental.css      ← layout e animações
  campo/                ← campo de partículas (WebGL, sem biblioteca)
    formas.ts           ← as formas: N, IA, Google, NFC, site
    motor.ts            ← animação e rolagem
  sections/             ← uma seção por arquivo
public/images/          ← fotos dos clientes
```

Cada seção transparente define a forma das partículas com `data-estacao`, `data-ancora` e `data-alfa`.

## Acessibilidade e animação

- As animações respeitam o modo "reduzir movimento" do celular/computador.
- Botões e links mostram um contorno lilás quando focados pelo teclado.
