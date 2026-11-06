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

**Tudo o que é texto fica em `src/content.ts`:** preços, WhatsApp, Instagram, e-mail, títulos, clientes e fotos. Não é preciso mexer no layout.

- **Preços:** objeto `PRECOS`, no topo do arquivo. Só números: `79.9` aparece como "R$ 79,90".
- **Contatos:** objeto `contato`.
- **Oferta do site (diagnóstico grátis):** objeto `oferta`.
- **O que falta confirmar:** procure por `PENDENTE` no projeto.

O telefone e o Instagram também aparecem nos dados para o Google, em `index.html`. Se mudarem, atualize lá também.

### Fotos

As imagens ficam em `public/images/`. Para trocar ou adicionar, coloque o arquivo nessa pasta e atualize a lista `clientes.fotos` em `src/content.ts`.

## Estrutura

```
src/
  content.ts            ← preços, contatos e textos
  App.tsx               ← ordem das seções
  index.css             ← tokens da marca (cores, raios, sombras) e estilos base
  components/
    Cabecalho.tsx       ← abertura das seções
    DemoNfc.tsx         ← animação do celular na placa
    Icons.tsx           ← ícones e estrelas em SVG
    Logo.tsx            ← símbolo e logo da Nexus
    WhatsAppFlutuante.tsx
  sections/
    Hero.tsx
    Problema.tsx
    Servicos.tsx        ← os 5 pilares
    ComoFunciona.tsx
    ParaQuem.tsx
    Precos.tsx          ← pacotes
    ComecePorAqui.tsx   ← demonstração do NFC
    Calculadora.tsx     ← "Faça a conta"
    Avulsos.tsx
    Clientes.tsx
    Casos.tsx
    PorQue.tsx
    Duvidas.tsx
    CTA.tsx
    Footer.tsx
public/images/          ← fotos dos clientes
tailwind.config.js      ← nomes das cores e animações
```

## Cores (`:root` em src/index.css)

| Nome | Cor | Uso |
| --- | --- | --- |
| `preto` | `#05030C` | fundo principal e texto |
| `roxo-escuro` | `#351886` | seção "Como funciona" |
| `roxo` | `#6532EF` | botões e destaques em fundo claro |
| `lilas` | `#9168F2` | destaques em fundo escuro |
| `lavanda` | `#E6DDF0` | texto secundário em fundo escuro |
| `nevoa` | `#F3F1F9` | seções claras (derivada) |
| `estrela` | `#FBBC04` | só nas estrelas de avaliação do Google |

## Acessibilidade e animação

- As animações respeitam o modo "reduzir movimento" do celular/computador.
- Botões e links mostram um contorno lilás quando focados pelo teclado.
- A busca da seção "Problema" é um **exemplo ilustrativo**, com legenda dizendo isso.
