import { hero, linkWhatsApp, menu, oferta } from '../content'
import Logo, { Simbolo } from '../components/Logo'
import { Chat } from '../components/Icons'

// Posição de cada serviço em volta do símbolo, em % da área da ilustração
const POSICOES = [
  { x: 22, y: 11, curva: 'M50 44 Q24 38 22 11' },
  { x: 78, y: 11, curva: 'M50 44 Q76 38 78 11' },
  { x: 80, y: 66, curva: 'M50 44 Q78 46 80 66' },
  { x: 20, y: 66, curva: 'M50 44 Q22 46 20 66' },
  { x: 50, y: 90, curva: 'M50 44 Q50 70 50 90' },
]

/** Ilustração: a Nexus no centro, conectada aos canais onde o cliente procura. */
function Conexoes() {
  return (
    <div
      className="relative mx-auto h-[360px] w-full max-w-[520px] motion-safe:animate-rise motion-safe:[animation-delay:240ms] sm:h-[480px]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" className="absolute inset-0 h-full w-full text-lilas">
        {POSICOES.map((p) => (
          <path
            key={p.curva}
            d={p.curva}
            stroke="currentColor"
            strokeWidth={1.5}
            strokeDasharray="6 6"
            strokeOpacity={0.6}
            vectorEffect="non-scaling-stroke"
            className="motion-safe:animate-fluxo"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-[44%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--cor-roxo)/0.4),transparent_68%)]" />
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
        <Simbolo className="h-[92px] w-auto sm:h-[124px]" />
      </div>

      {hero.conexoes.map((nome, i) => (
        <div
          key={nome}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${POSICOES[i].x}%`, top: `${POSICOES[i].y}%` }}
        >
          <span className="block rounded-botao border border-lilas/50 bg-superficie px-4 py-2.5 text-sm font-semibold text-white shadow-flutuante sm:px-5 sm:py-3 sm:text-base">
            {nome}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-preto px-4 pb-20 text-white sm:px-6 lg:pb-28">
      {/* Arcos finos do cartão da marca */}
      <div aria-hidden="true" className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full border border-lilas/25" />
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-lilas/25" />

      <div className="container-site relative">
        {/* Navegação */}
        <header className="flex flex-wrap items-center justify-between gap-4 py-5">
          <a href="#topo" aria-label="Nexus, início" className="flex min-h-11 items-center text-white no-underline">
            <Logo />
          </a>
          <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-7 gap-y-1 text-base font-medium">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden min-h-11 items-center text-lavanda no-underline transition-colors hover:text-white md:inline-flex"
              >
                {item.label}
              </a>
            ))}
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn min-h-11 bg-white px-5 text-preto"
            >
              WhatsApp
            </a>
          </nav>
        </header>

        <div id="topo" className="grid items-center gap-12 pt-10 lg:grid-cols-[1.25fr_1fr] lg:pt-[72px]">
          {/* Texto */}
          <div className="flex flex-col gap-7">
            <p className="etiqueta motion-safe:animate-rise">{hero.etiqueta}</p>
            <h1 className="titulo-xl xl:text-[60px] motion-safe:animate-rise">
              {hero.titulo} <span className="block text-lilas">{hero.tituloDestaque}</span>
            </h1>
            <p className="max-w-[46ch] text-[18px] leading-[1.55] text-lavanda motion-safe:animate-rise motion-safe:[animation-delay:80ms] md:text-[20px]">
              {hero.subtitulo}
            </p>
            <div className="flex flex-wrap items-center gap-4 motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
              <a
                href={linkWhatsApp(oferta.mensagemWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[60px] w-full bg-roxo px-6 text-white shadow-brilho sm:w-auto sm:px-[30px] sm:text-lg"
              >
                <Chat />
                {oferta.botao}
              </a>
              <a href="#precos" className="btn-contorno min-h-[60px] w-full text-white sm:w-auto">
                {hero.linkSecundario} ›
              </a>
            </div>
          </div>

          <Conexoes />
        </div>
      </div>
    </section>
  )
}
