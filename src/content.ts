/**
 * ============================================================
 *  CONTEÚDO DA VERSÃO EXPERIMENTAL DA NEXUS
 *  Edite contatos e textos AQUI.
 * ============================================================
 */

// Preços Nexus 2026: edite aqui
// Só números: 79.9 aparece como "R$ 79,90" e 590 como "R$ 590".
export const PRECOS = {
  cartaoGoogle: 79.9,
  cartaoPersonalizado: 119.9,
  totemPersonalizado: 149.9,
  criacaoGoogle: 199.9,
  otimizacaoGoogle: 59.9,
  diagnosticoInstagram: 39.9,
  gestaoInstagram: 590,
  landingPage: 697,
}

/** Escreve um número como preço: 79.9 → "R$ 79,90". */
export function reais(valor: number) {
  const casas = Number.isInteger(valor) ? 0 : 2
  return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}`
}

// ---------- Contatos ----------
export const contato = {
  whatsappNumero: '5571993964051',
  whatsappExibicao: '(71) 99396-4051',
  whatsappMensagem: 'Olá! Vi o site da Nexus e quero conversar sobre a minha empresa.',
  instagramUsuario: 'nexus.inova',
  email: 'nexusinova.ssa@gmail.com',
  regiao: 'Atendimento presencial em Salvador',
}

/** Monta o link do WhatsApp. Passe uma mensagem para personalizar por botão. */
export function linkWhatsApp(mensagem: string = contato.whatsappMensagem) {
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}

export const linkInstagram = `https://instagram.com/${contato.instagramUsuario}`

// ---------- Menu ----------
export const menu = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como trabalhamos', href: '#como-trabalhamos' },
  { label: 'Preços', href: '#precos' },
  { label: 'Projetos', href: '#projetos' },
]

// ---------- Hero ----------
export const hero = {
  etiqueta: 'Soluções digitais e IA em Salvador',
  titulo: ['Eleve', 'o', 'patamar', 'da', 'sua', 'empresa.'],
  subtitulo: 'Entre na era do digital e da IA com um parceiro só: automação com inteligência artificial, Google, Instagram, landing pages e NFC.',
  botao: 'Conversar no WhatsApp',
  linkSecundario: 'Conhecer as soluções',
  pilares: ['Automação com IA', 'Google', 'NFC', 'Instagram', 'Landing pages'],
}

// ---------- Apresentação ----------
export const apresentacao = {
  rotulo: 'Quem é a Nexus',
  titulo: 'Sua operação, seu Google e seu Instagram não se conversam.',
  texto:
    'Cada parte fica num lugar, e o tempo vai embora em tarefa repetida. A Nexus Inova junta essas peças: entende o seu negócio e coloca tecnologia para trabalhar onde faz diferença.',
  paraQuem: ['Barbearias', 'Restaurantes', 'Clínicas', 'Lojas', 'Prestadores de serviço'],
}

// ---------- Soluções ----------
export type Solucao = {
  forma: 'ia' | 'google' | 'nfc' | 'instagram' | 'site'
  icone: 'ia' | 'google' | 'nfc' | 'instagram' | 'site'
  rotulo: string
  titulo: string
  texto: string
  itens: string[]
  nota?: string
  botao: string
  mensagemWhatsApp: string
}

export const solucoes = {
  rotulo: 'Nossas soluções',
  itens: [
    {
      forma: 'ia',
      icone: 'ia',
      rotulo: 'Automação com IA',
      titulo: 'Menos tarefa repetida. Mais tempo para o negócio.',
      texto: 'Soluções inteligentes sob medida, feitas para a rotina da sua empresa.',
      itens: ['Processos automatizados', 'Operação mais organizada', 'Atendimento mais ágil'],
      nota: 'Numa empresa de varejo cliente, o lançamento de notas fiscais passou a ser feito por foto, com IA, e o tempo gasto caiu 80%.',
      botao: 'Falar sobre automação',
      mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero conversar sobre automação com IA na minha empresa.',
    },
    {
      forma: 'google',
      icone: 'google',
      rotulo: 'Google Meu Negócio',
      titulo: 'Quem procura no Google precisa achar você.',
      texto: 'Seu perfil completo e bem cuidado, para fortalecer a empresa nas buscas da sua região.',
      itens: ['Implantação e configuração do perfil', 'Otimização de perfis existentes', 'Informações comerciais em ordem', 'Mais facilidade para o cliente avaliar, com cartão e totem NFC'],
      botao: 'Falar sobre o Google',
      mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero melhorar o perfil da minha empresa no Google.',
    },
    {
      forma: 'nfc',
      icone: 'nfc',
      rotulo: 'Cartão e totem NFC',
      titulo: 'O cliente aproxima o celular. A avaliação abre.',
      texto: 'No balcão, no caixa ou na mesa. Sem app e sem QR code: quem saiu satisfeito avalia seu Google em segundos.',
      itens: ['Cartão Google pronto para usar', 'Cartão ou totem com a sua marca', 'Link testado no seu balcão'],
      botao: 'Quero o NFC',
      mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero o cartão NFC de avaliação no Google.',
    },
    {
      forma: 'instagram',
      icone: 'instagram',
      rotulo: 'Instagram e presença digital',
      titulo: 'Um perfil que passa a confiança que sua empresa merece.',
      texto: 'Da estratégia ao conteúdo, a gente faz tudo. Você só colabora com o que só você sabe.',
      itens: ['Estratégia de posicionamento', 'A partir de 2 Reels e 4 carrosséis por mês', 'Stories 5 vezes por semana'],
      botao: 'Falar sobre o Instagram',
      mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero organizar o Instagram da minha empresa.',
    },
    {
      forma: 'site',
      icone: 'site',
      rotulo: 'Landing pages',
      titulo: 'Você está numa landing page da Nexus.',
      texto: 'Fazemos a da sua empresa no estilo que combina com o seu negócio: direta e leve, ou com efeitos como estes.',
      itens: ['Textos escritos por nós', 'Botão de WhatsApp em destaque', '1 ano de hospedagem incluso'],
      nota: 'A do Barber Club Itaigara tem 4 páginas: barbearia, charutaria, whisky e eventos.',
      botao: 'Quero uma assim',
      mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero uma landing page para a minha empresa.',
    },
  ] satisfies Solucao[],
}

// ---------- Como trabalhamos ----------
export const comoTrabalhamos = {
  rotulo: 'Como trabalhamos',
  titulo: 'Da primeira conversa ao acompanhamento.',
  passos: [
    { titulo: 'Diagnóstico grátis', texto: 'Olhamos sua empresa e mostramos como aplicar o digital e a IA no seu negócio.' },
    { titulo: 'Proposta sob medida', texto: 'Você recebe uma proposta exclusiva, só com o que faz sentido para você.' },
    { titulo: 'Implantação', texto: 'Colocamos tudo para funcionar, sem você precisar entender de tecnologia.' },
    { titulo: 'Acompanhamento', texto: 'Seguimos juntos, com reuniões para ver o que mudou e os próximos passos.' },
  ],
}

// ---------- Preços ----------
export type ItemPreco = { nome: string; descricao: string; preco: string; mensagemWhatsApp: string }

function item(nome: string, descricao: string, preco: string): ItemPreco {
  return { nome, descricao, preco, mensagemWhatsApp: `Olá! Vi o site da Nexus e quero saber mais sobre: ${nome}.` }
}

export const precos = {
  rotulo: 'Preços',
  titulo: 'Preços sem surpresa.',
  botao: 'Quero',
  itens: [
    item('Cartão NFC Google', 'Avaliação no Google por aproximação, link testado no balcão.', reais(PRECOS.cartaoGoogle)),
    item('Cartão NFC personalizado', 'Com a identidade visual do seu negócio.', reais(PRECOS.cartaoPersonalizado)),
    item('Totem NFC personalizado', 'Totem de balcão com a sua marca.', reais(PRECOS.totemPersonalizado)),
    item('Criação de perfil no Google', 'Cadastro completo, categorias, serviços, horários, fotos e verificação.', reais(PRECOS.criacaoGoogle)),
    item('Otimização de perfil no Google', 'Auditoria, palavras-chave, descrição, fotos e plano de avaliações.', reais(PRECOS.otimizacaoGoogle)),
    item('Diagnóstico de Instagram via IA', 'Bio, destaques, feed e posts a arquivar, em relatório.', reais(PRECOS.diagnosticoInstagram)),
    item('Gestão completa de Instagram', 'A partir de 2 Reels + 4 carrosséis por mês e stories 5x por semana.', `${reais(PRECOS.gestaoInstagram)}/mês`),
    item('Landing page', 'Textos, botão de WhatsApp e 1 ano de hospedagem.', reais(PRECOS.landingPage)),
    item('Automação com IA', 'Sob medida para o atendimento e os processos.', 'Sob consulta'),
  ],
  proposta: {
    titulo: 'Mais de um serviço?',
    texto: 'Montamos uma proposta exclusiva, com mais custo-benefício na compra de mais de um serviço.',
    botao: 'Montar minha proposta',
    mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero uma proposta exclusiva com mais de um serviço.',
  },
}

// ---------- Diferenciais ----------
export const diferenciais = {
  rotulo: 'Diferenciais',
  titulo: 'Um parceiro só, em vez de quatro fornecedores.',
  itens: [
    { titulo: 'Presencial em Salvador', texto: 'A gente vai até a sua empresa.' },
    { titulo: 'Tudo em um', texto: 'IA, Google, NFC, Instagram e site conversando entre si.' },
    { titulo: 'Tecnologia aplicada', texto: 'IA a serviço do seu negócio, não da moda.' },
    { titulo: 'Sem fidelidade', texto: 'Você fica porque está valendo a pena.' },
  ],
  separado: {
    titulo: 'Contratando separado',
    itens: ['Designer', 'Especialista em Google', 'Social media', 'Desenvolvedor'],
    resumo: 'Quatro conversas, quatro cobranças e ninguém olhando o todo.',
  },
  nexus: {
    titulo: 'Com a Nexus',
    itens: ['Um parceiro', 'Uma proposta sob medida', 'Reunião de resultados'],
    resumo: 'Você sabe com quem falar e o que está sendo feito.',
  },
}

// ---------- Projetos ----------
export const projetos = {
  rotulo: 'Projetos',
  titulo: 'O que a gente já fez.',
  destaque: {
    numero: '80%',
    texto: 'menos tempo gasto no lançamento de notas fiscais.',
    detalhe: 'Numa empresa de varejo cliente, as notas passaram a ser lançadas por foto, com IA.',
  },
  // Só entra aqui projeto com autorização do cliente.
  casos: [
    {
      nome: 'Barber Club Itaigara',
      texto: 'Landing page de 4 páginas (barbearia, charutaria, whisky e eventos), reels 3D e cartão NFC personalizado.',
    },
  ],
  introducaoClientes: 'Quem já confia na Nexus:',
  clientes: ['Nadia Hair', 'Ribeiro', 'RJM', 'Guima Variedades', 'Adriano Flores', 'Bar do Canal', 'FH Store'],
  fechamento: 'e muitas outras.',
  fotos: [
    { src: '/images/adriano-flores.webp', alt: 'Equipe da Nexus com o Adriano em frente à banca da Adriano Flores', legenda: 'Adriano Flores' },
    { src: '/images/bar-do-canal.webp', alt: 'Equipe da Nexus no balcão do Bar do Canal', legenda: 'Bar do Canal' },
  ],
}

// ---------- Dúvidas ----------
export const duvidas = {
  rotulo: 'Dúvidas',
  titulo: 'Perguntas frequentes.',
  itens: [
    { pergunta: 'Tem fidelidade?', resposta: 'Não. A Nexus não tem fidelidade.' },
    { pergunta: 'Em quanto tempo vejo resultado?', resposta: 'Depende de como sua empresa está hoje. Por isso começamos pelo diagnóstico e acompanhamos a evolução nas reuniões de resultado.' },
    { pergunta: 'Preciso gravar vídeo?', resposta: 'Não. A gente faz tudo. Só precisamos da sua colaboração no dia a dia do negócio.' },
    { pergunta: 'Atendem fora de Salvador?', resposta: 'O foco é Salvador e região, com atendimento presencial. Fora daqui, dá para atender à distância.' },
    { pergunta: 'Como funciona o cartão NFC?', resposta: 'O cliente aproxima o celular do cartão ou do totem e a avaliação do seu negócio abre no Google. Não precisa de app. A gente testa o link no seu balcão.' },
    { pergunta: 'Posso começar só com um serviço?', resposta: 'Pode. Dá para começar pelo cartão NFC ou pela otimização do Google, por exemplo. Depois, se fizer sentido, montamos uma proposta com mais serviços.' },
  ],
}

// ---------- CTA final ----------
export const cta = {
  titulo: 'Eleve o patamar.',
  texto: 'Entre na era do digital e da IA. A primeira conversa é pelo WhatsApp, e o diagnóstico é grátis.',
  botao: 'Quero meu diagnóstico grátis',
  mensagemWhatsApp: 'Olá! Vi o site da Nexus e quero um diagnóstico grátis para a minha empresa.',
}

// ---------- Botão flutuante ----------
export const whatsappFlutuante = {
  rotulo: 'Falar no WhatsApp',
}
