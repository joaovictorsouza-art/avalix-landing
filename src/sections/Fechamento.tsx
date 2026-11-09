import { contato, cta, linkInstagram, linkWhatsApp } from '../content'
import { Simbolo } from '../components/Logo'
import { Chat } from '../components/Icons'

/** Fim da história: as peças voltam a formar o N, agora com a chamada final. */
export function ChamadaFinal() {
  return (
    <section data-estacao="n" data-campo-visivel className="fechamento text-white">
      <div className="fechamento-grade container-site">
        <div data-ancora className="fechamento-ancora">
          <Simbolo className="so-sem-campo w-[70%] max-w-[420px]" />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="titulo-xl rv">{cta.titulo}</h2>
          <p className="rv max-w-[42ch] text-[18px] leading-[1.55] text-lavanda md:text-[20px]">{cta.texto}</p>
          <a href={linkWhatsApp(cta.mensagemWhatsApp)} target="_blank" rel="noopener noreferrer" className="btn btn-luz rv min-h-[60px] w-full bg-roxo px-6 text-white sm:w-fit sm:px-8 sm:text-lg">
            <Chat />
            {cta.botao}
          </a>
        </div>
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer data-campo-visivel className="relative overflow-hidden px-4 pb-[max(24px,env(safe-area-inset-bottom))] text-white sm:px-6">
      <div className="container-site flex flex-wrap justify-between gap-x-8 gap-y-1 border-t border-lavanda/15 pb-4 pt-8 text-base text-lavanda">
        <span className="inline-flex min-h-11 items-center">{contato.regiao}</span>
        <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lavanda hover:text-white">
          WhatsApp {contato.whatsappExibicao}
        </a>
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lavanda hover:text-white">
          Instagram @{contato.instagramUsuario}
        </a>
        <a href={`mailto:${contato.email}`} className="inline-flex min-h-11 items-center text-lavanda hover:text-white">
          {contato.email}
        </a>
      </div>
    </footer>
  )
}
