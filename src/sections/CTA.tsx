import { contato, cta, linkInstagram, linkWhatsApp } from '../content'
import { Chat, Instagram } from '../components/Icons'

export default function CTA() {
  return (
    <section className="bg-navy px-4 pb-20 pt-24 text-white sm:px-6 lg:pt-40">
      <div className="container-site flex flex-col gap-9">
        <h2 className="titulo-xl">{cta.titulo}</h2>
        <p className="max-w-[40ch] text-[20px] leading-[1.45] text-ink-muted md:text-[22px]">{cta.texto}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={linkWhatsApp(cta.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-[60px] bg-accent-strong px-[30px] text-lg text-white"
          >
            <Chat />
            {cta.botao}
          </a>
          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2.5 text-lg font-semibold text-white underline-offset-[6px]"
          >
            <Instagram />@{contato.instagramUsuario}
          </a>
        </div>
      </div>
    </section>
  )
}
