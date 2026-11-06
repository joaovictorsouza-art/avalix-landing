import { comecePorAqui as c, linkWhatsApp } from '../content'
import DemoNfc from '../components/DemoNfc'
import { Chat } from '../components/Icons'

export default function ComecePorAqui() {
  return (
    <section id="nfc" className="scroll-mt-4 overflow-hidden bg-preto px-4 py-20 text-white sm:px-6 lg:py-32">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-7">
          <p className="etiqueta">{c.etiqueta}</p>
          <h2 className="titulo-lg max-w-[18ch]">{c.titulo}</h2>
          <div className="sublinhado" />
          <p className="max-w-[46ch] leading-relaxed text-lavanda md:text-xl">{c.texto}</p>
          <a
            href={linkWhatsApp(c.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-14 w-full bg-roxo px-6 text-white shadow-brilho sm:w-fit"
          >
            <Chat />
            {c.botao}
          </a>
        </div>
        <DemoNfc />
      </div>
    </section>
  )
}
