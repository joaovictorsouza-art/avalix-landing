import { contato, linkInstagram, linkWhatsApp } from '../content'

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-preto px-4 text-white sm:px-6">
      <div className="container-site flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-lavanda/15 pt-12 text-base text-lavanda">
        <span className="inline-flex min-h-11 items-center">{contato.regiao}</span>
        <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lavanda hover:text-white">
          WhatsApp {contato.whatsappExibicao}
        </a>
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lavanda hover:text-white">
          Instagram @{contato.instagramUsuario}
        </a>
        {/* PENDENTE: e-mail da Nexus (src/content.ts). Quando houver, transformar em link mailto. */}
        <span className="inline-flex min-h-11 items-center">{contato.email}</span>
      </div>
      {/* Marca em tamanho grande fechando a página (decorativa) */}
      <div
        aria-hidden="true"
        className="container-site mt-6 translate-y-[12%] select-none font-display text-[30vw] font-bold leading-[0.8] tracking-[-0.05em] text-superficie xl:text-[380px]"
      >
        nexus
      </div>
    </footer>
  )
}
