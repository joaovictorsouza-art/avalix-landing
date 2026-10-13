/**
 * ============================================================
 *  CONTEÚDO DO SITE DA AVALIX
 *  Edite textos, preços, contatos e clientes AQUI.
 *  Nenhum outro arquivo precisa ser alterado para trocar conteúdo.
 * ============================================================
 */

// ---------- Contatos ----------
export const contato = {
  // Número do WhatsApp só com dígitos: 55 + DDD + número. Ex.: 5571988887777
  whatsappNumero: '5571999999999', // TODO: trocar pelo número real
  // Como o número aparece escrito no rodapé
  whatsappExibicao: '(71) 99999-9999', // TODO: trocar pelo número real
  // Mensagem que já vem escrita quando a pessoa abre o WhatsApp
  whatsappMensagem: 'Olá! Vim pelo site da Avalix e quero saber mais.',
  instagramUsuario: 'aavalix',
  cidade: '[CIDADE]', // TODO: ex.: "Salvador, BA"
}

/** Monta o link do WhatsApp. Passe uma mensagem para personalizar por botão. */
export function linkWhatsApp(mensagem: string = contato.whatsappMensagem) {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export const linkInstagram = `https://instagram.com/${contato.instagramUsuario}`

// ---------- Menu ----------
export const menu = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Faça a conta', href: '#conta' },
  { label: 'Preços', href: '#precos' },
]

// ---------- Hero ----------
export const hero = {
  titulo: ['Mais avaliações.', 'Mais confiança.', 'Mais clientes.'],
  subtitulo: 'Aproxime o celular e avalie no Google. Em segundos, sem procurar nada.',
  botao: 'Chamar no WhatsApp',
  linkSecundario: 'Placa por R$ 80',
  placa: {
    titulo: 'Gostou? Avalie a gente no Google',
    instrucao: 'Aproxime o celular aqui',
  },
  aviso: 'Nova avaliação 5 estrelas',
}

// ---------- Problema ----------
export const problema = {
  titulo: 'Sem avaliação, o cliente vai para o vizinho.',
  texto:
    'Antes de sair de casa, o cliente pesquisa no Google. Entre duas lojas parecidas, ele escolhe a que tem mais avaliações. Cliente satisfeito você já tem: falta ele deixar a nota.',
  // Exemplo ilustrativo de busca (não são dados reais)
  busca: 'salão de beleza perto de mim',
  concorrente: { nome: 'Salão do concorrente', nota: '4,8', estrelas: 5, total: 212, selo: 'Mais procurado' },
  voce: { nome: 'Sua loja', nota: '4,0', estrelas: 4, total: 3 },
  legenda: 'Exemplo de busca no Google',
}

// ---------- Como funciona ----------
export const comoFunciona = {
  titulo: 'Encostou. Avaliou.',
  passos: [
    {
      icone: 'celular' as const,
      titulo: 'O cliente aproxima o celular',
      texto: 'A placa fica no balcão, no caixa ou na mesa. Não precisa de app nem de QR code.',
    },
    {
      icone: 'avaliacao' as const,
      titulo: 'A avaliação abre no Google',
      texto: 'Cai direto na tela de avaliar o seu negócio. É só escolher as estrelas e publicar.',
    },
    {
      icone: 'grafico' as const,
      titulo: 'Sua nota sobe',
      texto: 'Mais avaliações, mais confiança, e mais gente escolhendo você quando pesquisa.',
    },
  ],
}

// ---------- Calculadora ("Faça a conta") ----------
export const calculadora = {
  titulo: 'Faça a conta da sua loja.',
  rotuloClientes: 'Clientes atendidos por dia:',
  rotuloTaxa: 'Quantos aproximam o celular?',
  clientesPadrao: 60,
  clientesMin: 10,
  clientesMax: 300,
  clientesPasso: 10,
  taxas: [10, 20, 50], // "1 em cada N"
  taxaPadrao: 20,
  diasAbertosNoMes: 26,
  resultado: 'avaliações novas por mês',
}

// ---------- Preços ----------
export type ItemPreco = {
  nome: string
  descricao: string
  preco: string
  botao: string
  mensagemWhatsApp: string
  destaque?: boolean
}

export const precos = {
  titulo: 'Preços sem surpresa.',
  itens: [
    {
      nome: 'Cartão NFC de avaliação',
      descricao: 'A placa pronta para o balcão, ligada direto ao seu perfil no Google. O mais pedido.',
      preco: 'R$ 80',
      botao: 'Comprar pelo WhatsApp',
      mensagemWhatsApp: 'Olá! Quero comprar o Cartão NFC de avaliação (R$ 80).',
      destaque: true,
    },
    {
      nome: 'Otimização do perfil no Google',
      descricao: 'Fotos, horários, categorias e descrição ajustados para você aparecer melhor nas buscas.',
      preco: 'R$ 120',
      botao: 'Quero otimizar',
      mensagemWhatsApp: 'Olá! Quero a Otimização do perfil no Google (R$ 120).',
    },
    {
      nome: 'Site profissional',
      descricao: 'Um site para o seu negócio passar confiança e receber clientes.',
      preco: 'Orçamento em reunião',
      botao: 'Agendar reunião',
      mensagemWhatsApp: 'Olá! Quero agendar uma reunião sobre um Site profissional.',
    },
    {
      nome: 'Automação de IA',
      descricao: 'Atendimento e tarefas do dia a dia funcionando sozinhos.',
      preco: 'Orçamento em reunião',
      botao: 'Agendar reunião',
      mensagemWhatsApp: 'Olá! Quero agendar uma reunião sobre Automação de IA.',
    },
  ] satisfies ItemPreco[],

  /**
   * CARD RESERVADO: "Cartão NFC com logotipo"
   * - Enquanto `disponivel` for false, o card aparece como "Em breve".
   * - Para lançar: preencha `preco` e mude `disponivel` para true.
   * - Para esconder o card de vez: mude `mostrar` para false.
   */
  cartaoComLogo: {
    mostrar: true,
    disponivel: false,
    nome: 'Cartão NFC com seu logotipo',
    descricao: 'A placa personalizada com a marca do seu negócio.',
    preco: '', // TODO: ex.: "R$ 120"
    textoEmBreve: 'Em breve',
    botao: 'Quero saber mais',
    mensagemWhatsApp: 'Olá! Quero saber do Cartão NFC com o logotipo da minha loja.',
  },
}

// ---------- Clientes ----------
export const clientes = {
  introducao: 'Quem já confia na Avalix:',
  nomes: ['Nadia Hair', 'Ribeiro', 'RJM', 'Guima Variedades', 'Adriano Flores', 'Bar do Canal', 'FH Store'],
  fechamento: 'e muitas outras.',
  // Fotos ficam em /public/images
  fotos: [
    {
      src: '/images/adriano-flores.jpg',
      alt: 'Equipe da Avalix com o Adriano em frente à banca da Adriano Flores',
      legenda: 'Adriano Flores',
    },
    {
      src: '/images/bar-do-canal.jpg',
      alt: 'Equipe da Avalix no balcão do Bar do Canal',
      legenda: 'Bar do Canal',
    },
  ],
}

// ---------- CTA final ----------
export const cta = {
  titulo: 'Agende uma reunião.',
  texto: 'Pelo WhatsApp, rápido e sem compromisso. A gente mostra o que faz sentido para o seu negócio.',
  botao: 'Chamar no WhatsApp',
  mensagemWhatsApp: 'Olá! Quero agendar uma reunião com a Avalix.',
}

// ---------- Botão flutuante ----------
export const whatsappFlutuante = {
  rotulo: 'Falar no WhatsApp',
}
