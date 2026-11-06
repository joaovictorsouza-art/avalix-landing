/**
 * ============================================================
 *  CONTEÚDO DO SITE DA NEXUS
 *  Edite preços, contatos, textos e clientes AQUI.
 *  Nenhum outro arquivo precisa ser alterado para trocar conteúdo.
 *  Procure por PENDENTE para ver o que ainda falta confirmar.
 * ============================================================
 */

// Preços Nexus 2026 — edite aqui
// Só números: 79.9 aparece como "R$ 79,90" e 590 como "R$ 590".
export const PRECOS = {
  avulsos: {
    cartaoGoogle: 79.9,
    cartaoPersonalizado: 119.9,
    totemPersonalizado: 149.9,
    criacaoGoogle: 199.9,
    otimizacaoGoogle: 59.9,
    diagnosticoInstagram: 39.9,
    gestaoInstagram: 590,
    trafegoMeta: 590,
    landingPage: 697,
  },
}

/** Escreve um número como preço: 79.9 → "R$ 79,90". */
export function reais(valor: number) {
  const casas = Number.isInteger(valor) ? 0 : 2
  return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}`
}

// ---------- Contatos ----------
export const contato = {
  // Número do WhatsApp só com dígitos: 55 + DDD + número. Ex.: 5571988887777
  whatsappNumero: '5571993964051',
  // Como o número aparece escrito no rodapé
  whatsappExibicao: '(71) 99396-4051',
  // Mensagem que já vem escrita quando a pessoa abre o WhatsApp
  whatsappMensagem: 'Olá! Vi o site da Nexus e quero saber mais.',
  instagramUsuario: 'nexus.inova',
  email: '[PLACEHOLDER: e-mail]', // PENDENTE: e-mail da Nexus
  cidade: 'Salvador, BA',
  regiao: 'Atendimento presencial em Salvador',
}

/** Monta o link do WhatsApp. Passe uma mensagem para personalizar por botão. */
export function linkWhatsApp(mensagem: string = contato.whatsappMensagem) {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export const linkInstagram = `https://instagram.com/${contato.instagramUsuario}`

// ---------- Oferta de entrada ----------
// PENDENTE: confirmar com João o diagnóstico grátis. Para trocar a oferta do site inteiro, edite só aqui.
export const oferta = {
  botao: 'Quero um diagnóstico grátis',
  mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero um diagnóstico grátis do meu Google e Instagram.',
}

// ---------- Menu ----------
export const menu = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Preços', href: '#precos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

// ---------- Hero ----------
export const hero = {
  etiqueta: 'Parceiro digital em Salvador',
  titulo: 'Seu negócio aparecendo, sendo bem avaliado e vendendo mais.',
  tituloDestaque: 'Todo mês.',
  subtitulo:
    'Google, Instagram, anúncios, site e automação com IA nas mãos de um parceiro só, aqui em Salvador. Você cuida do balcão. A gente cuida do digital.',
  linkSecundario: 'Ver preços',
  conexoes: ['Google', 'Instagram', 'Anúncios', 'Site', 'IA'],
}

// ---------- Problema ----------
export const problema = {
  rotulo: 'O problema',
  titulo: 'Você está perdendo dinheiro na mesa.',
  texto:
    'Antes de sair de casa, o cliente pesquisa no Google e olha o Instagram. Se o concorrente aparece melhor e posta toda semana, a venda vai para ele. E você não tem tempo nem equipe para cuidar disso sozinho.',
  // Exemplo ilustrativo de busca (não são dados reais)
  busca: 'barbearia perto de mim',
  concorrente: { nome: 'O concorrente', nota: '4,8', estrelas: 5, total: 212, selo: 'Mais procurado' },
  voce: { nome: 'Sua loja', nota: '4,0', estrelas: 4, total: 3 },
  legenda: 'Exemplo de busca no Google',
}

// ---------- Serviços (ecossistema) ----------
export const servicos = {
  rotulo: 'Como a Nexus resolve',
  titulo: 'Conectamos seu negócio a quem procura por ele.',
  pilares: [
    {
      icone: 'google' as const,
      titulo: 'Google',
      texto: 'Perfil da empresa completo e mais avaliações. Com o cartão ou totem NFC, o cliente satisfeito avalia em segundos.',
    },
    {
      icone: 'instagram' as const,
      titulo: 'Instagram',
      texto: 'Gestão completa, a partir de 2 Reels e 4 carrosséis por mês e stories 5 vezes por semana.',
    },
    {
      icone: 'anuncios' as const,
      titulo: 'Tráfego pago',
      texto: 'Anúncios no Instagram e no Google para levar seu negócio a quem ainda não te conhece, com otimização e relatório.',
    },
    {
      icone: 'site' as const,
      titulo: 'Sites e landing pages',
      texto: 'Uma página com os textos prontos e botão de WhatsApp, feita para transformar visita em conversa.',
    },
    {
      icone: 'ia' as const,
      titulo: 'Automação com IA',
      texto: 'Soluções sob medida para o atendimento e os processos da sua empresa.',
      caso: 'Numa empresa de varejo cliente, o lançamento de notas fiscais passou a ser feito por foto, com IA, e o tempo gasto caiu 80%.',
    },
  ],
}

// ---------- Como funciona ----------
export const comoFunciona = {
  rotulo: 'Como funciona',
  titulo: 'A gente acompanha, todo mês.',
  passos: [
    {
      icone: 'diagnostico' as const,
      titulo: 'Diagnóstico',
      texto: 'Olhamos seu Google e seu Instagram, com análise feita por IA, e mostramos o que está travando.',
    },
    {
      icone: 'implantacao' as const,
      titulo: 'Implantação',
      texto: 'Deixamos a base pronta: perfil no Google, NFC no balcão e landing page, conforme o que combinarmos com você.',
    },
    {
      icone: 'gestao' as const,
      titulo: 'Gestão mensal',
      texto: 'Todo mês a gente cuida dos posts, dos anúncios e das avaliações.',
    },
    {
      icone: 'reuniao' as const,
      titulo: 'Reunião de resultados',
      texto: 'Sentamos com você para ver o que mudou e decidir os próximos passos.',
    },
  ],
}

// ---------- Para quem é ----------
export const paraQuem = {
  rotulo: 'Para quem é',
  titulo: 'Feito para quem vive do comércio local.',
  nichos: [
    { icone: 'barbearia' as const, nome: 'Barbearias' },
    { icone: 'restaurante' as const, nome: 'Restaurantes e pizzarias' },
    { icone: 'clinica' as const, nome: 'Clínicas' },
    { icone: 'loja' as const, nome: 'Lojas e varejo' },
    { icone: 'servicos' as const, nome: 'Prestadores de serviço' },
  ],
}

// ---------- Comece por aqui (demonstração do NFC) ----------
export const comecePorAqui = {
  etiqueta: 'Comece por aqui',
  titulo: 'É assim que começa. Depois a gente cuida do resto.',
  texto: 'O cliente satisfeito aproxima o celular do cartão ou do totem e a avaliação abre no seu Google. Não precisa de app nem de QR code.',
  placa: {
    titulo: 'Gostou? Avalie a gente no Google',
    instrucao: 'Aproxime o celular aqui',
  },
  aviso: 'Nova avaliação no Google',
  botao: 'Quero o NFC no meu balcão',
  mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero saber mais sobre o cartão NFC.',
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

// ---------- Serviços avulsos ----------
export type ItemAvulso = {
  nome: string
  descricao: string
  preco: string
  mensagemWhatsApp: string
  comecePorAqui?: boolean
}

function avulso(nome: string, descricao: string, preco: string, comecePorAqui = false): ItemAvulso {
  return {
    nome,
    descricao,
    preco,
    comecePorAqui,
    mensagemWhatsApp: `Olá! Vi o site da Nexus e quero saber mais sobre: ${nome}.`,
  }
}

export const avulsos = {
  rotulo: 'Serviços e preços',
  titulo: 'Preços sem surpresa.',
  seloComece: 'Comece por aqui',
  botao: 'Quero este',
  aviso: 'Verba de anúncios paga pelo cliente direto ao Meta/Google.',
  proposta: {
    titulo: 'Precisa de mais de um serviço?',
    texto: 'Montamos propostas exclusivas, com alto custo-benefício na compra de mais de um serviço. Cada pacote é feito sob medida para a sua empresa. Fale com a gente.',
    botao: 'Montar minha proposta',
    mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero uma proposta exclusiva com mais de um serviço.',
  },
  itens: [
    avulso('Cartão NFC Google', 'Avaliação no Google por aproximação, link testado no balcão.', reais(PRECOS.avulsos.cartaoGoogle), true),
    avulso('Cartão NFC personalizado', 'Cartão com a identidade visual do seu negócio.', reais(PRECOS.avulsos.cartaoPersonalizado)),
    avulso('Totem NFC personalizado', 'Totem de balcão com a sua marca.', reais(PRECOS.avulsos.totemPersonalizado)),
    avulso('Criação de perfil no Google', 'Cadastro completo, categorias, serviços, horários, fotos e acompanhamento da verificação.', reais(PRECOS.avulsos.criacaoGoogle)),
    avulso('Otimização de perfil no Google', 'Auditoria, correções, palavras-chave, descrição, fotos e plano de avaliações.', reais(PRECOS.avulsos.otimizacaoGoogle)),
    avulso('Diagnóstico de Instagram via IA', 'Bio, destaques, feed e posts a arquivar, em relatório.', reais(PRECOS.avulsos.diagnosticoInstagram)),
    avulso('Gestão completa de Instagram', 'A partir de 2 Reels + 4 carrosséis/mês e stories 5x/semana.', `${reais(PRECOS.avulsos.gestaoInstagram)}/mês`),
    avulso('Tráfego pago Meta Ads', 'Campanhas, 4 criativos, otimização semanal e relatório.', `${reais(PRECOS.avulsos.trafegoMeta)}/mês`),
    avulso('Landing page', 'Textos, botão de WhatsApp, Pixel e 1 ano de hospedagem.', reais(PRECOS.avulsos.landingPage)),
    avulso('Automação com IA', 'Soluções sob medida para atendimento e processos.', 'Sob consulta'),
  ],
}

// ---------- Clientes ----------
export const clientes = {
  introducao: 'Quem já confia na Nexus:',
  nomes: ['Nadia Hair', 'Ribeiro', 'RJM', 'Guima Variedades', 'Adriano Flores', 'Bar do Canal', 'FH Store'],
  fechamento: 'e muitas outras.',
  // Fotos ficam em /public/images
  fotos: [
    {
      src: '/images/adriano-flores.webp',
      alt: 'Equipe da Nexus com o Adriano em frente à banca da Adriano Flores',
      legenda: 'Adriano Flores',
    },
    {
      src: '/images/bar-do-canal.webp',
      alt: 'Equipe da Nexus no balcão do Bar do Canal',
      legenda: 'Bar do Canal',
    },
  ],
}

// ---------- Casos e depoimentos ----------
export const casos = {
  rotulo: 'Resultados',
  titulo: 'O que a gente já fez.',
  destaque: {
    numero: '80%',
    texto: 'menos tempo gasto no lançamento de notas fiscais.',
    detalhe: 'Numa empresa de varejo cliente, as notas passaram a ser lançadas por foto, com IA.',
  },
  // PENDENTE: autorização do cliente antes de mostrar nome ou marca. Depois, troque os [colchetes].
  // Barber Club Itaigara: landing page de 4 páginas (barbearia, charutaria, whisky, eventos), reels 3D e cartão NFC personalizado.
  // Ultragaz: brinde NFC em formato de mini botijão / ímã de geladeira que leva ao WhatsApp da revenda ou à avaliação no Google.
  // Di Lucca (cantina/pizzaria, Pituba): proposta com IA no atendimento e NFC na mesa.
  projetos: [
    { nome: '[Projeto 1: nome do cliente]', texto: '[Barbearia em Salvador: landing page, reels e cartão NFC personalizado]' },
    { nome: '[Projeto 2: nome do cliente]', texto: '[Brinde NFC que leva ao WhatsApp da revenda ou à avaliação no Google]' },
    { nome: '[Projeto 3: nome do cliente]', texto: '[Restaurante: IA no atendimento e NFC na mesa]' },
  ],
  // PENDENTE: textos reais dos clientes. Não invente.
  depoimentos: [
    { texto: '[Depoimento real do cliente]', autor: '[Nome e negócio]' },
    { texto: '[Depoimento real do cliente]', autor: '[Nome e negócio]' },
    { texto: '[Depoimento real do cliente]', autor: '[Nome e negócio]' },
  ],
}

// ---------- Por que a Nexus ----------
export const porQue = {
  rotulo: 'Por que a Nexus',
  titulo: 'Um parceiro só, em vez de quatro fornecedores.',
  motivos: [
    { titulo: 'Atendimento presencial em Salvador', texto: 'A gente vai até a sua loja.' },
    { titulo: 'Preços abaixo da média do mercado', texto: 'Tudo na tabela, sem surpresa.' },
    { titulo: 'Tecnologia própria', texto: 'NFC e IA a serviço do seu negócio.' },
    { titulo: 'Tudo no mesmo lugar', texto: 'Google, Instagram, anúncios e site conversando entre si.' },
  ],
  comparacao: {
    separado: {
      titulo: 'Contratando separado',
      itens: ['Designer', 'Gestor de tráfego', 'Social media', 'Desenvolvedor'],
      resumo: 'Quatro conversas, quatro cobranças e ninguém olhando o todo.',
    },
    nexus: {
      titulo: 'Com a Nexus',
      itens: ['Um parceiro', 'Uma proposta sob medida', 'Reunião de resultados'],
      resumo: 'Você sabe com quem falar e o que está sendo feito.',
    },
  },
}

// ---------- Dúvidas ----------
export const duvidas = {
  rotulo: 'Dúvidas',
  titulo: 'Perguntas que todo mundo faz.',
  itens: [
    {
      pergunta: 'Tem fidelidade?',
      resposta: 'Os pacotes montados para a sua empresa têm contrato mínimo de 3 meses. Os serviços avulsos são contratados à parte.',
    },
    {
      pergunta: 'A verba dos anúncios está inclusa?',
      resposta: 'Não. A verba é paga por você direto ao Meta ou ao Google. A Nexus cuida das campanhas.',
    },
    {
      pergunta: 'Em quanto tempo vejo resultado?',
      resposta: 'Depende de como seu negócio está hoje. Por isso começamos com o diagnóstico e acompanhamos a evolução com você na reunião de resultados.',
    },
    {
      pergunta: 'Preciso gravar vídeo?',
      resposta: '[PLACEHOLDER: resposta a confirmar com o João]', // PENDENTE
    },
    {
      pergunta: 'Atendem fora de Salvador?',
      resposta: 'O foco é Salvador e região, com atendimento presencial. Fora daqui, dá para atender à distância. Fale com a gente.',
    },
    {
      pergunta: 'Como funciona o cartão NFC?',
      resposta: 'O cliente aproxima o celular do cartão ou do totem e a tela de avaliação do seu negócio abre no Google. Não precisa de app. A gente testa o link no seu balcão.',
    },
    {
      pergunta: 'Posso começar só com um serviço?',
      resposta: 'Pode. Dá para começar pelo cartão NFC ou pela otimização do perfil no Google, por exemplo. Depois, se fizer sentido, a gente monta um pacote para a sua empresa.',
    },
  ],
}

// ---------- CTA final ----------
export const cta = {
  titulo: 'Vamos olhar o seu negócio juntos?',
  texto: 'Pelo WhatsApp, rápido e sem compromisso. A gente mostra onde você está perdendo cliente e o que faz sentido para o seu negócio.',
}

// ---------- Botão flutuante ----------
export const whatsappFlutuante = {
  rotulo: 'Falar no WhatsApp',
}
