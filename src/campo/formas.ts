/**
 * As formas que o campo de partículas assume ao longo da página.
 * Cada forma é desenhada num canvas invisível e amostrada: a partícula herda
 * a posição e a cor do pixel. Assim o N usa os mesmos degradês do logo.
 */

export type NomeForma = 'n' | 'espalhado' | 'ia' | 'google' | 'nfc' | 'site'

export type Forma = {
  /** x, y, z, r, g, b por partícula */
  dados: Float32Array
  /** Meia largura e meia altura, para caber na área reservada no layout */
  extensao: [number, number]
  /** Velocidade de giro em torno do eixo vertical */
  giro: number
}

// Cores da marca (mesmos valores de src/index.css)
const LAVANDA = '#E6DDF0'
const LILAS = '#9168F2'
const ROXO = '#6532EF'
const ROXO_CLARO = '#A888F5'
const ESTRELA = '#FBBC04'

// Resolução da amostragem. Os desenhos usam coordenadas de 0 a BASE.
const LADO = 280

// iPhone com iOS 15 não tem roundRect: desenha o canto arredondado na mão
if (typeof Path2D !== 'undefined' && !Path2D.prototype.roundRect) {
  Path2D.prototype.roundRect = function (x: number, y: number, w: number, h: number, r?: number | DOMPointInit | (number | DOMPointInit)[]) {
    const raio = typeof r === 'number' ? r : 0
    this.moveTo(x + raio, y)
    this.arcTo(x + w, y, x + w, y + h, raio)
    this.arcTo(x + w, y + h, x, y + h, raio)
    this.arcTo(x, y + h, x, y, raio)
    this.arcTo(x, y, x + w, y, raio)
    this.closePath()
  }
}
const BASE = 400

function hexParaRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

/** Sorteia `total` partículas entre os pixels desenhados. */
function amostrar(desenhar: (c: CanvasRenderingContext2D) => void, total: number, relevo: number, alturaSoltos = 1): Float32Array {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = LADO
  const c = canvas.getContext('2d', { willReadFrequently: true })!
  c.scale(LADO / BASE, LADO / BASE)
  desenhar(c)
  const { data } = c.getImageData(0, 0, LADO, LADO)

  const pixels: number[] = []
  for (let y = 0; y < LADO; y++) {
    for (let x = 0; x < LADO; x++) {
      if (data[(y * LADO + x) * 4 + 3] > 128) pixels.push(y * LADO + x)
    }
  }

  const saida = new Float32Array(total * 6)
  const soltos = Math.floor(total * 0.07)
  const corSolta = hexParaRgb(LILAS)
  for (let i = 0; i < total; i++) {
    if (i < soltos) {
      // Fragmentos em volta da forma: as peças que ainda estão chegando
      saida.set([(Math.random() - 0.5) * 2.5, (Math.random() - 0.5) * 2.2 * alturaSoltos, (Math.random() - 0.5) * 1.2, corSolta[0], corSolta[1], corSolta[2]], 0 + i * 6)
      continue
    }
    const p = pixels[Math.floor(Math.random() * pixels.length)]
    const px = p % LADO
    const py = Math.floor(p / LADO)
    const r = data[p * 4] / 255
    const g = data[p * 4 + 1] / 255
    const b = data[p * 4 + 2] / 255
    const luz = (r + g + b) / 3
    saida[i * 6] = (px + Math.random() - LADO / 2) / (LADO / 2)
    saida[i * 6 + 1] = -(py + Math.random() - LADO / 2) / (LADO / 2)
    // A parte mais clara da fita fica mais perto: dá volume ao mover o cursor
    saida[i * 6 + 2] = (luz - 0.45) * relevo + (Math.random() - 0.5) * 0.05
    saida[i * 6 + 3] = r
    saida[i * 6 + 4] = g
    saida[i * 6 + 5] = b
  }
  return saida
}

function degrade(c: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, paradas: [number, string][]) {
  const g = c.createLinearGradient(x1, y1, x2, y2)
  paradas.forEach(([o, cor]) => g.addColorStop(o, cor))
  return g
}

/** Símbolo da marca: mesmos traçados de components/Logo.tsx */
function desenharN(c: CanvasRenderingContext2D) {
  const k = BASE / 690
  c.translate(0, (BASE - 365 * k) / 2)
  c.scale(k, k)
  c.translate(-40, -60)
  const camadas: [string, CanvasGradient][] = [
    ['M448 158 545 90Q592 62 642 73 702 88 715 150 717 172 705 195L590 292 448 176Z', degrade(c, 470, 170, 710, 110, [[0, '#2A1466'], [0.55, '#4A26B0'], [1, '#7A50E8']])],
    ['M262 205 172 405Q195 400 215 385L350 275 300 230Z', degrade(c, 300, 225, 190, 400, [[0, '#2A1466'], [1, '#5B35B8']])],
    ['M128 185Q175 155 252 190L172 405Q150 418 120 415 75 410 52 365Z', degrade(c, 210, 180, 90, 410, [[0, '#5526DE'], [1, '#8A5CF5']])],
    ['M590 292 712 178 642 350Q615 405 560 412Z', degrade(c, 710, 190, 600, 400, [[0, '#8A5CF5'], [1, ROXO]])],
    ['M128 185Q175 155 240 180 270 192 300 218L490 372Q530 410 565 412 610 410 640 355L590 292 355 105Q310 70 255 70 160 72 128 185Z', degrade(c, 120, 180, 620, 400, [[0, ROXO_CLARO], [0.24, LAVANDA], [0.6, ROXO_CLARO], [1, ROXO]])],
  ]
  camadas.forEach(([d, cor]) => {
    c.fillStyle = cor
    c.fill(new Path2D(d))
  })
}

/** Pino do Google com as cinco estrelas das avaliações. */
function desenharGoogle(c: CanvasRenderingContext2D) {
  c.save()
  c.translate(44, -12)
  c.scale(13, 13)
  c.fillStyle = degrade(c, 5, 3, 19, 21, [[0, LAVANDA], [0.5, LILAS], [1, ROXO]])
  c.fill(new Path2D('M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z'))
  c.globalCompositeOperation = 'destination-out'
  c.beginPath()
  c.arc(12, 9.5, 2.6, 0, Math.PI * 2)
  c.fill()
  c.restore()

  c.fillStyle = ESTRELA
  for (let i = 0; i < 5; i++) {
    const cx = 200 + (i - 2) * 56
    const cy = 356
    c.beginPath()
    for (let p = 0; p < 10; p++) {
      const raio = p % 2 ? 9.5 : 23
      const a = -Math.PI / 2 + (p * Math.PI) / 5
      c.lineTo(cx + Math.cos(a) * raio, cy + Math.sin(a) * raio)
    }
    c.closePath()
    c.fill()
  }
}

/** Cartão NFC com as ondas de aproximação. */
function desenharNfc(c: CanvasRenderingContext2D) {
  c.save()
  c.translate(170, 215)
  c.rotate(-0.14)
  const cartao = new Path2D()
  cartao.roundRect(-130, -82, 260, 164, 22)
  c.lineWidth = 11
  c.strokeStyle = degrade(c, -130, 80, 130, -80, [[0, ROXO], [0.55, LILAS], [1, LAVANDA]])
  c.stroke(cartao)
  // Chip e marca no cartão
  c.fillStyle = LAVANDA
  const chip = new Path2D()
  chip.roundRect(-96, -40, 46, 34, 7)
  c.fill(chip)
  c.fillStyle = LILAS
  c.fillRect(-96, 30, 120, 11)
  c.fillRect(-96, 50, 74, 9)
  c.restore()
  // Ondas saindo do cartão
  c.lineCap = 'round'
  c.strokeStyle = degrade(c, 280, 220, 380, 60, [[0, LILAS], [1, LAVANDA]])
  ;[46, 82, 118].forEach((r, i) => {
    c.lineWidth = 12 - i * 2
    c.beginPath()
    c.arc(268, 132, r, -1.2, 0.35)
    c.stroke()
  })
}

/** Janela de navegador com uma landing page dentro. */
function desenharSite(c: CanvasRenderingContext2D) {
  const janela = new Path2D()
  janela.roundRect(36, 72, 328, 256, 20)
  c.lineWidth = 9
  c.strokeStyle = degrade(c, 36, 328, 364, 72, [[0, ROXO], [0.5, LILAS], [1, LAVANDA]])
  c.stroke(janela)
  c.fillStyle = LILAS
  c.fillRect(36, 112, 328, 6)
  ;[60, 82, 104].forEach((x) => {
    c.beginPath()
    c.arc(x, 93, 6, 0, Math.PI * 2)
    c.fill()
  })
  // Título, texto e botão da página
  c.fillStyle = LAVANDA
  c.fillRect(66, 148, 160, 20)
  c.fillRect(66, 176, 124, 20)
  c.fillStyle = ROXO_CLARO
  c.fillRect(66, 212, 150, 8)
  c.fillRect(66, 228, 120, 8)
  c.fillStyle = ROXO
  const botao = new Path2D()
  botao.roundRect(66, 254, 104, 34, 10)
  c.fill(botao)
  // Imagem ao lado
  c.strokeStyle = LILAS
  c.lineWidth = 6
  const imagem = new Path2D()
  imagem.roundRect(250, 148, 86, 140, 14)
  c.stroke(imagem)
}

/** Esfera com núcleos mais densos: lembra uma rede neural e gira devagar. */
function criarIa(total: number): Float32Array {
  const saida = new Float32Array(total * 6)
  const paleta = [LAVANDA, LILAS, ROXO, ROXO_CLARO].map(hexParaRgb)
  const nucleo = hexParaRgb(LAVANDA)
  const nucleos = Array.from({ length: 34 }, () => pontoNaEsfera(Math.random(), Math.random()))

  for (let i = 0; i < total; i++) {
    let x: number, y: number, z: number
    const noNucleo = Math.random() < 0.34
    if (noNucleo) {
      const n = nucleos[i % nucleos.length]
      const espalho = 0.07
      x = n[0] + (Math.random() - 0.5) * espalho
      y = n[1] + (Math.random() - 0.5) * espalho
      z = n[2] + (Math.random() - 0.5) * espalho
    } else {
      ;[x, y, z] = pontoNaEsfera(Math.random(), Math.random())
    }
    const raio = 0.82 + 0.1 * Math.sin(x * 5 + y * 3) * Math.cos(z * 4 - y * 2)
    const cor = noNucleo ? nucleo : paleta[Math.floor(Math.random() * paleta.length)]
    saida.set([x * raio, y * raio, z * raio, cor[0], cor[1], cor[2]], i * 6)
  }
  return saida
}

function pontoNaEsfera(u: number, v: number): [number, number, number] {
  const a = u * Math.PI * 2
  const y = v * 2 - 1
  const r = Math.sqrt(1 - y * y)
  return [Math.cos(a) * r, y, Math.sin(a) * r]
}

/** As peças soltas: partículas pelo quadro inteiro. */
function criarEspalhado(total: number, aspecto: number): Float32Array {
  const saida = new Float32Array(total * 6)
  const paleta = [LILAS, ROXO_CLARO, ROXO, LAVANDA].map(hexParaRgb)
  for (let i = 0; i < total; i++) {
    const cor = paleta[Math.floor(Math.random() * paleta.length)]
    saida.set([(Math.random() - 0.5) * 2.3 * aspecto, (Math.random() - 0.5) * 2.3, (Math.random() - 0.5) * 1.5, cor[0], cor[1], cor[2]], i * 6)
  }
  return saida
}

/** Cria uma forma por vez, devolvendo o controle ao navegador entre elas: a página não trava. */
export async function criarFormas(total: number, aspecto: number): Promise<Record<NomeForma, Forma>> {
  const pausa = () => new Promise((resolver) => setTimeout(resolver))
  const n: Forma = { dados: amostrar(desenharN, total, 0.5, 0.62), extensao: [1, 0.53], giro: 0 }
  await pausa()
  const espalhado: Forma = { dados: criarEspalhado(total, aspecto), extensao: [1, 1], giro: 0 }
  await pausa()
  const ia: Forma = { dados: criarIa(total), extensao: [1, 1], giro: 0.14 }
  await pausa()
  const google: Forma = { dados: amostrar(desenharGoogle, total, 0.35), extensao: [0.72, 1], giro: 0 }
  await pausa()
  const nfc: Forma = { dados: amostrar(desenharNfc, total, 0.35), extensao: [0.95, 0.85], giro: 0 }
  await pausa()
  const site: Forma = { dados: amostrar(desenharSite, total, 0.35), extensao: [0.84, 0.66], giro: 0 }
  await pausa()
  return { n, espalhado, ia, google, nfc, site }
}
