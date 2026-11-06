import { contato, linkInstagram, linkWhatsApp } from '../content'

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-preto px-4 text-white sm:px-6">
      <div className="container-site flex flex-wrap justify-between gap-x-8 gap-y-3 pt-16 text-base text-lavanda">
        <span>{contato.cidade}</span>
        <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="text-lavanda hover:text-white">
          WhatsApp {contato.whatsappExibicao}
        </a>
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer" className="text-lavanda hover:text-white">
          Instagram @{contato.instagramUsuario}
        </a>
      </div>
      {/* Marca em tamanho grande fechando a página (decorativa) */}
      <div
        aria-hidden="true"
        className="container-site mt-6 translate-y-[12%] select-none font-display text-[26vw] font-bold leading-[0.8] tracking-[-0.06em] text-superficie xl:text-[330px]"
      >
        Avalix
      </div>
    </footer>
  )
}
