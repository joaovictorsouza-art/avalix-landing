# Avalix: landing page

Landing page da Avalix em **React + Vite + Tailwind CSS**.

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 18 ou mais novo.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão final (pasta `dist/`, pronta para publicar na Vercel, Netlify etc.):

```bash
npm run build
npm run preview   # opcional: confere a versão final no navegador
```

## Onde editar o conteúdo

**Tudo o que é texto fica em `src/content.ts`:** títulos, preços, número do WhatsApp, Instagram, cidade, clientes e fotos. Não é preciso mexer no layout.

Antes de publicar, troque o que está marcado com `TODO` nesse arquivo:

- `contato.whatsappNumero`: só dígitos, com 55 + DDD (ex.: `5571988887777`)
- `contato.whatsappExibicao`: como o número aparece no rodapé
- `contato.cidade`

### Card reservado: "Cartão NFC com logotipo"

Fica em `precos.cartaoComLogo`, dentro de `src/content.ts`:

- `disponivel: false` mostra **"Em breve"** no lugar do preço (é o que está agora)
- para lançar: preencha `preco` (ex.: `"R$ 120"`) e mude `disponivel` para `true`
- para esconder o card: `mostrar: false`

No layout, o card está marcado com um comentário em `src/sections/Precos.tsx`.

### Fotos

As imagens ficam em `public/images/`. Para trocar ou adicionar, coloque o arquivo nessa pasta e atualize a lista `clientes.fotos` em `src/content.ts`.

## Estrutura

```
src/
  content.ts            ← textos, preços e contatos
  App.tsx               ← ordem das seções
  index.css             ← estilos base (botões, foco, títulos)
  components/
    Icons.tsx           ← ícones e estrelas em SVG
    Logo.tsx
    WhatsAppFlutuante.tsx
  sections/
    Hero.tsx
    Problema.tsx
    ComoFunciona.tsx
    Calculadora.tsx     ← "Faça a conta"
    Precos.tsx
    Clientes.tsx
    CTA.tsx
    Footer.tsx
public/images/          ← fotos dos clientes
tailwind.config.js      ← cores da marca e animações
```

## Cores (tailwind.config.js)

| Nome | Cor | Uso |
| --- | --- | --- |
| `navy` | `#0B1F3A` | fundo principal |
| `accent` | `#2F80ED` | azul de destaque |
| `accent-strong` | `#1C6BD6` | fundo dos botões (contraste com texto branco) |
| `white` | `#FFFFFF` | |
| `star` | `#FBBC04` | estrelas |
| `mist` | `#F1F4F8` | seções claras |

## Acessibilidade e animação

- As animações respeitam o modo "reduzir movimento" do celular/computador.
- Botões e links mostram um contorno amarelo quando focados pelo teclado.
- A busca da seção "Problema" é um **exemplo ilustrativo**, com legenda dizendo isso.
