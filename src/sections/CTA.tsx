import { contato, cta, linkInstagram, linkWhatsApp, oferta } from '../content'
import { Chat, Instagram } from '../components/Icons'
import { Simbolo } from '../components/Logo'

export default function CTA() {
  return (
    <section className="bg-preto px-4 pb-20 pt-20 text-white sm:px-6 lg:pt-32">
      <div className="container-site flex flex-col gap-8">
        {/* Selo do símbolo */}
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-lilas/50 bg-superficie">
          <Simbolo className="h-7 w-auto" />
        </span>
        <h2 className="titulo-xl max-w-[18ch]">{cta.titulo}</h2>
        <p className="max-w-[46ch] text-[18px] leading-[1.55] text-lavanda md:text-[20px]">{cta.texto}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={linkWhatsApp(oferta.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-[60px] w-full bg-roxo px-6 text-white shadow-brilho sm:w-auto sm:px-[30px] sm:text-lg"
          >
            <Chat />
            {oferta.botao}
          </a>
          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 text-lg font-medium text-white underline-offset-[6px]"
          >
            <Instagram />@{contato.instagramUsuario}
          </a>
        </div>
      </div>
    </section>
  )
}
