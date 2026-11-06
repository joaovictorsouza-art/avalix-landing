import { hero, linkWhatsApp, menu } from '../content'
import Logo from '../components/Logo'
import { Chat, Check, Nfc, Stars } from '../components/Icons'

export default function Hero() {
  return (
    <section className="overflow-hidden bg-preto px-4 pb-24 text-white sm:px-6 lg:pb-28">
      <div className="container-site">
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

        <div id="topo" className="grid items-center gap-12 pt-12 lg:grid-cols-2 lg:pt-[72px]">
          {/* Texto */}
          <div className="flex flex-col gap-8">
            <h1 className="titulo-xl motion-safe:animate-rise">
              {hero.titulo.map((linha) => (
                <span key={linha} className="block">
                  {linha}
                </span>
              ))}
            </h1>
            <p className="max-w-[30ch] text-[20px] leading-[1.45] text-lavanda motion-safe:animate-rise motion-safe:[animation-delay:80ms] md:text-[22px]">
              {hero.subtitulo}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-[60px] bg-roxo px-[30px] text-lg text-white"
              >
                <Chat />
                {hero.botao}
              </a>
              <a href="#precos" className="inline-flex min-h-11 items-center text-lg font-semibold text-white underline-offset-[6px]">
                {hero.linkSecundario}
              </a>
            </div>
          </div>

          {/* Ilustração: o celular encosta na placa */}
          <div
            className="relative mx-auto h-[460px] w-full max-w-[520px] motion-safe:animate-rise motion-safe:[animation-delay:240ms] sm:h-[560px]"
            aria-hidden="true"
          >
            <div className="absolute bottom-0 left-0 flex h-[340px] w-[250px] flex-col justify-between rounded-card bg-white px-6 py-7 text-preto sm:h-[400px] sm:w-[300px] sm:px-7 sm:py-8">
              <Logo tamanho="sm" />
              <Nfc animado className="h-20 w-20 text-roxo sm:h-24 sm:w-24" />
              <p className="font-display text-[21px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[25px]">
                {hero.placa.titulo}
              </p>
              <Stars className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
              <p className="text-[15px] text-tinta-suave">{hero.placa.instrucao}</p>
            </div>

            <div className="absolute left-[140px] top-6 h-[290px] w-[146px] rounded-[30px] bg-preto p-2 shadow-flutuante motion-safe:animate-tap sm:left-[170px] sm:top-10 sm:h-[336px] sm:w-[168px] sm:rounded-[32px]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 rounded-[24px] bg-nevoa p-4 text-center">
                <span className="text-[13px] font-semibold text-tinta-suave">Avaliar sua loja</span>
                <Stars className="h-5 w-5" />
                <span className="h-11 w-full rounded-[10px] bg-white" />
                <span className="flex h-9 w-full items-center justify-center rounded-full bg-roxo text-[13px] font-bold text-white">
                  Publicar
                </span>
              </div>
            </div>

            <div className="absolute bottom-10 right-0 flex items-center gap-2.5 rounded-2xl bg-roxo px-4 py-3 text-[15px] font-bold text-white shadow-flutuante motion-safe:animate-sent sm:bottom-16">
              <Check className="h-[18px] w-[18px]" />
              {hero.aviso}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
