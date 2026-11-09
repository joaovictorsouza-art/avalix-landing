import { criarFormas, type Forma, type NomeForma } from './formas'

/**
 * Campo de partículas em WebGL puro, sem biblioteca.
 * A posição de cada partícula é calculada na placa de vídeo. O JavaScript só
 * envia os valores que mudam, e o laço para quando nenhuma seção mostra o campo.
 *
 * No HTML:
 * - data-estacao="n|espalhado|ia|google|instagram": a seção em que o campo assume a forma;
 * - data-ancora (dentro da seção): a área do layout que a forma deve ocupar;
 * - data-alfa="0.4" (opcional): intensidade do campo naquela seção.
 */

const VERTICES = `
attribute vec3 aA, cA, aB, cB;
attribute vec4 aS;
uniform float uMix, uT, uGA, uGB, uAsp, uPx, uAlfa, uFM;
uniform vec3 uTA, uTB;
uniform vec2 uM, uInc;
varying vec3 vC;
varying float vA;

vec3 gira(vec3 p, float a) {
  float c = cos(a), s = sin(a);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

void main() {
  // Cada partícula sai num tempo próprio: a forma se monta aos poucos
  float d = 0.55;
  float t = clamp(uMix * (1.0 + d) - aS.x * d, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);

  vec3 a = gira(aA, uT * uGA);
  vec3 b = gira(aB, uT * uGB);
  a.xy *= uTA.z; a.z *= uTA.z; a.xy += uTA.xy;
  b.xy *= uTB.z; b.z *= uTB.z; b.xy += uTB.xy;
  vec3 p = mix(a, b, t);

  // No meio do caminho, as partículas se soltam antes de encontrar a nova forma
  vec3 dir = vec3(cos(aS.y * 6.283), sin(aS.y * 6.283), aS.z * 2.0 - 1.0);
  p += dir * sin(t * 3.14159) * (0.14 + 0.42 * aS.w);

  // Respiração contínua
  p.xy += 0.006 * vec2(sin(uT * (0.6 + aS.y) + aS.z * 6.28), cos(uT * (0.5 + aS.z) + aS.y * 6.28));

  // Volume: a inclinação move mais o que está perto
  p.xy += p.z * uInc;

  // Cursor ou toque empurram as partículas
  vec2 dm = p.xy - uM;
  float q = dot(dm, dm);
  p.xy += normalize(dm + 0.0001) * exp(-q / 0.03) * uFM * 0.11;

  float w = 1.0 / (1.0 - p.z * 0.3);
  gl_Position = vec4(p.x * w / uAsp, p.y * w, 0.0, 1.0);

  // Faixa de luz que atravessa a forma: o "sinal" passando pela conexão
  float luz = smoothstep(0.82, 1.0, sin(p.x * 2.1 + p.y * 1.1 - uT * 0.9));
  gl_PointSize = uPx * (0.72 + aS.w * 0.95) * w * (1.0 + luz * 0.6);
  vC = mix(cA, cB, t) + luz * 0.34;
  vA = uAlfa * (0.62 + 0.38 * aS.z);
}`

const FRAGMENTOS = `
precision mediump float;
varying vec3 vC;
varying float vA;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = dot(c, c);
  if (r > 0.25) discard;
  float a = smoothstep(0.25, 0.05, r) * vA;
  gl_FragColor = vec4(vC * a, a * 0.92);
}`

type Estacao = {
  el: HTMLElement
  forma: Forma
  nome: NomeForma
  alfa: number
  centro: number
  transf: [number, number, number]
  /** A forma tem lugar reservado no layout e sobe junto com a seção */
  presa: boolean
}

const suave = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

/** Quantidade de partículas conforme o aparelho. */
function escolherTotal() {
  const nucleos = navigator.hardwareConcurrency || 4
  const celular = Math.min(window.innerWidth, window.innerHeight) < 768
  if (celular) return nucleos <= 4 ? 3600 : 6000
  return nucleos <= 4 ? 9000 : 18000
}

function compilar(gl: WebGLRenderingContext, tipo: number, fonte: string) {
  const s = gl.createShader(tipo)!
  gl.shaderSource(s, fonte)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? 'erro no shader')
  return s
}

export async function iniciarCampo(canvas: HTMLCanvasElement, luz: HTMLElement, sinal: AbortSignal): Promise<() => void> {
  const total = escolherTotal()
  const formas = await criarFormas(total, Math.max(1, window.innerWidth / window.innerHeight))
  if (sinal.aborted) return () => {}

  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false, stencil: false, premultipliedAlpha: true, powerPreference: 'high-performance' })
  if (!gl) {
    document.documentElement.dataset.campo = 'off'
    return () => {}
  }

  const programa = gl.createProgram()!
  gl.attachShader(programa, compilar(gl, gl.VERTEX_SHADER, VERTICES))
  gl.attachShader(programa, compilar(gl, gl.FRAGMENT_SHADER, FRAGMENTOS))
  gl.linkProgram(programa)
  gl.useProgram(programa)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
  gl.clearColor(0, 0, 0, 0)

  const u = (n: string) => gl.getUniformLocation(programa, n)
  const uni = { mix: u('uMix'), t: u('uT'), gA: u('uGA'), gB: u('uGB'), asp: u('uAsp'), px: u('uPx'), alfa: u('uAlfa'), fm: u('uFM'), tA: u('uTA'), tB: u('uTB'), m: u('uM'), inc: u('uInc') }
  const atr = { aA: gl.getAttribLocation(programa, 'aA'), cA: gl.getAttribLocation(programa, 'cA'), aB: gl.getAttribLocation(programa, 'aB'), cB: gl.getAttribLocation(programa, 'cB'), aS: gl.getAttribLocation(programa, 'aS') }
  Object.values(atr).forEach((a) => gl.enableVertexAttribArray(a))

  let desenhar = total

  const sementes = new Float32Array(total * 4)
  for (let i = 0; i < sementes.length; i++) sementes[i] = Math.random()
  const bufSementes = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, bufSementes)
  gl.bufferData(gl.ARRAY_BUFFER, sementes, gl.STATIC_DRAW)
  gl.vertexAttribPointer(atr.aS, 4, gl.FLOAT, false, 0, 0)

  const buffers = new Map<Forma, WebGLBuffer>()
  Object.values(formas).forEach((f) => {
    const b = gl.createBuffer()!
    gl.bindBuffer(gl.ARRAY_BUFFER, b)
    gl.bufferData(gl.ARRAY_BUFFER, f.dados, gl.STATIC_DRAW)
    buffers.set(f, b)
  })

  let formaA: Forma | null = null
  let formaB: Forma | null = null
  const ligar = (f: Forma, pos: number, cor: number) => {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.get(f)!)
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 24, 0)
    gl.vertexAttribPointer(cor, 3, gl.FLOAT, false, 24, 12)
  }

  // ---------- Medidas ----------
  let L = 0
  let A = 0
  let aspecto = 1
  let dpr = 1
  let estacoes: Estacao[] = []

  function medirCanvas() {
    const celular = window.innerWidth < 768
    dpr = Math.min(window.devicePixelRatio || 1, celular ? 1.75 : 2)
    L = canvas.clientWidth
    A = canvas.clientHeight
    aspecto = L / A
    canvas.width = Math.round(L * dpr)
    canvas.height = Math.round(A * dpr)
    gl!.viewport(0, 0, canvas.width, canvas.height)
    gl!.uniform1f(uni.asp, aspecto)
    gl!.uniform1f(uni.px, dpr * Math.max(1.7, Math.min(2.6, A / 420)))
  }

  function medirEstacoes() {
    const vistaA = window.innerHeight
    estacoes = [...document.querySelectorAll<HTMLElement>('[data-estacao]')].map((el) => {
      const nome = el.dataset.estacao as NomeForma
      const forma = formas[nome]
      const r = el.getBoundingClientRect()
      const topo = r.top + window.scrollY
      let centro = topo + r.height / 2
      let transf: [number, number, number] = [0, 0, 1]

      const ancora = el.querySelector<HTMLElement>('[data-ancora]')
      if (ancora) {
        const ra = ancora.getBoundingClientRect()
        const ay = ra.top + window.scrollY + ra.height / 2
        // Seção maior que a tela: a forma para quando a âncora estiver visível
        if (r.height > vistaA * 1.05) centro = ay + vistaA * 0.2
        const yNaTela = ay - (centro - vistaA / 2)
        const metade = A / 2
        const escala = Math.min(ra.width / 2 / forma.extensao[0], ra.height / 2 / forma.extensao[1]) / metade
        transf = [(ra.left + ra.width / 2 - L / 2) / metade, 1 - yNaTela / metade, escala]
      }
      return { el, forma, nome, alfa: Number(el.dataset.alfa ?? 1), centro, transf, presa: Boolean(ancora) }
    })
    estacoes.sort((a, b) => a.centro - b.centro)
    // A primeira estação vale desde o topo da página
    if (estacoes[0]) estacoes[0].centro = Math.max(estacoes[0].centro, vistaA / 2)
  }

  function posicaoNaRolagem() {
    const c = window.scrollY + window.innerHeight / 2
    const n = estacoes.length
    if (!n || c <= estacoes[0].centro) return 0
    if (c >= estacoes[n - 1].centro) return n - 1
    for (let i = 0; i < n - 1; i++) {
      if (c < estacoes[i + 1].centro) {
        const local = (c - estacoes[i].centro) / (estacoes[i + 1].centro - estacoes[i].centro)
        // Segura a forma pronta por um trecho antes de começar a próxima troca
        return i + suave(0.28, 0.72, local)
      }
    }
    return n - 1
  }

  // ---------- Cursor e toque ----------
  const alvoM = { x: 0, y: 0, f: 0 }
  const m = { x: 0, y: 0, f: 0 }
  const aoMover = (e: PointerEvent) => {
    alvoM.x = (e.clientX - L / 2) / (A / 2)
    alvoM.y = 1 - e.clientY / (A / 2)
    alvoM.f = 1
  }
  const aoSair = () => {
    alvoM.f = 0
  }
  window.addEventListener('pointermove', aoMover, { passive: true })
  window.addEventListener('pointerdown', aoMover, { passive: true })
  window.addEventListener('pointerup', (e) => e.pointerType === 'touch' && aoSair(), { passive: true })
  document.addEventListener('pointerleave', aoSair)

  // ---------- Laço ----------
  let raf = 0
  let visivel = false
  let v = 0
  const inicio = performance.now()
  // Quem abre a página no meio da rolagem não vê a montagem inicial
  let abertura = window.scrollY > 40 ? 1 : 0
  let anterior = inicio
  let somaQuadros = 0
  let contaQuadros = -40
  // ?cheio na URL desliga o limite, para avaliar o visual em máquina sem placa de vídeo
  const semLimite = location.search.includes('cheio')

  function quadro(agora: number) {
    raf = 0
    const passo = Math.min(50, agora - anterior)
    anterior = agora
    const t = (agora - inicio) / 1000

    // Em aparelho lento, desenha menos partículas em vez de travar
    if (contaQuadros >= 0) somaQuadros += passo
    if (++contaQuadros === 45) {
      if (!semLimite && somaQuadros / 45 > 30 && desenhar > total * 0.35) desenhar = Math.floor(desenhar * 0.72)
      somaQuadros = 0
      contaQuadros = 0
    }

    v += (posicaoNaRolagem() - v) * (1 - Math.exp(-passo / 110))
    if (abertura < 1) abertura = Math.min(1, abertura + passo / 2600)

    const i = Math.min(Math.floor(v), Math.max(0, estacoes.length - 2))
    const eA = estacoes[i]
    const eB = estacoes[Math.min(i + 1, estacoes.length - 1)]
    if (eA && eB) {
      let fA = eA.forma
      let fB = eB.forma
      // A forma sobe com a seção, então nunca fica sobre o texto.
      // No computador sobe um pouco mais devagar que o conteúdo: dá profundidade.
      const c = window.scrollY + window.innerHeight / 2
      const seguir = window.innerWidth >= 1024 ? 0.72 : 1
      const noLugar = (e: Estacao): [number, number, number] => (e.presa ? [e.transf[0], e.transf[1] + ((c - e.centro) / (A / 2)) * seguir, e.transf[2]] : e.transf)
      let tA = noLugar(eA)
      let tB = noLugar(eB)
      let mistura = Math.min(1, v - i)
      let alfa = eA.alfa + (eB.alfa - eA.alfa) * mistura

      if (abertura < 1 && v < 0.02) {
        // Abertura: as peças soltas se encontram e formam o N
        fA = formas.espalhado
        fB = eA.forma
        tA = [0, 0, 1]
        tB = noLugar(eA)
        mistura = 1 - Math.pow(1 - abertura, 2.4)
        alfa = eA.alfa * suave(0, 0.2, abertura)
      }

      if (fA !== formaA) {
        ligar(fA, atr.aA, atr.cA)
        formaA = fA
      }
      if (fB !== formaB) {
        ligar(fB, atr.aB, atr.cB)
        formaB = fB
      }

      m.x += (alvoM.x - m.x) * 0.12
      m.y += (alvoM.y - m.y) * 0.12
      m.f += (alvoM.f - m.f) * 0.08

      gl!.uniform1f(uni.mix, mistura)
      gl!.uniform1f(uni.t, t)
      gl!.uniform1f(uni.gA, fA.giro)
      gl!.uniform1f(uni.gB, fB.giro)
      gl!.uniform3f(uni.tA, tA[0], tA[1], tA[2])
      gl!.uniform3f(uni.tB, tB[0], tB[1], tB[2])
      gl!.uniform2f(uni.m, m.x, m.y)
      gl!.uniform1f(uni.fm, m.f)
      gl!.uniform2f(uni.inc, m.x * 0.1 + Math.sin(t * 0.4) * 0.05, m.y * 0.08 + Math.cos(t * 0.33) * 0.03)
      gl!.uniform1f(uni.alfa, alfa)
      gl!.clear(gl!.COLOR_BUFFER_BIT)
      gl!.drawArrays(gl!.POINTS, 0, desenhar)

      // A luz volumétrica acompanha a forma
      const lx = tA[0] + (tB[0] - tA[0]) * mistura
      const ly = tA[1] + (tB[1] - tA[1]) * mistura
      const le = tA[2] + (tB[2] - tA[2]) * mistura
      luz.style.transform = `translate3d(${(lx * A) / 2}px, ${(-ly * A) / 2}px, 0) scale(${0.6 + le})`
      luz.style.opacity = String(Math.min(1, alfa))
    }

    if (visivel && !document.hidden) raf = requestAnimationFrame(quadro)
  }

  const retomar = () => {
    if (!raf && visivel && !document.hidden) {
      anterior = performance.now()
      raf = requestAnimationFrame(quadro)
    }
  }

  // Só anima enquanto alguma seção transparente estiver na tela
  const abertas = new Set<Element>()
  const observador = new IntersectionObserver((itens) => {
    itens.forEach((e) => (e.isIntersecting ? abertas.add(e.target) : abertas.delete(e.target)))
    visivel = abertas.size > 0
    retomar()
  })
  document.querySelectorAll('[data-campo-visivel]').forEach((el) => observador.observe(el))

  // ---------- Tamanho da tela ----------
  let larguraAnterior = window.innerWidth
  let alturaAnterior = window.innerHeight
  const aoRedimensionar = () => {
    // A barra do navegador do celular muda a altura ao rolar: isso não refaz as medidas
    const mudouLargura = window.innerWidth !== larguraAnterior
    if (!mudouLargura && Math.abs(window.innerHeight - alturaAnterior) < 120) return
    larguraAnterior = window.innerWidth
    alturaAnterior = window.innerHeight
    medirCanvas()
    medirEstacoes()
  }
  const remedir = () => medirEstacoes()
  const aoVisibilidade = () => retomar()

  window.addEventListener('resize', aoRedimensionar, { passive: true })
  document.addEventListener('visibilitychange', aoVisibilidade)
  const observadorCorpo = new ResizeObserver(remedir)
  observadorCorpo.observe(document.body)
  document.fonts?.ready.then(remedir)

  const aoPerderContexto = (e: Event) => {
    e.preventDefault()
    document.documentElement.dataset.campo = 'off'
    cancelAnimationFrame(raf)
    raf = 0
    visivel = false
  }
  canvas.addEventListener('webglcontextlost', aoPerderContexto)

  medirCanvas()
  medirEstacoes()
  v = posicaoNaRolagem()

  return () => {
    cancelAnimationFrame(raf)
    observador.disconnect()
    observadorCorpo.disconnect()
    window.removeEventListener('pointermove', aoMover)
    window.removeEventListener('pointerdown', aoMover)
    window.removeEventListener('resize', aoRedimensionar)
    document.removeEventListener('pointerleave', aoSair)
    document.removeEventListener('visibilitychange', aoVisibilidade)
    canvas.removeEventListener('webglcontextlost', aoPerderContexto)
  }
}
