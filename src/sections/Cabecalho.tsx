import { useEffect, useState } from 'react'
import { linkWhatsApp, menu } from '../content'
import Logo from '../components/Logo'

/** Topo fixo: transparente no início, ganha fundo depois da primeira rolagem. */
export default function Cabecalho() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header className={`topo ${rolou || aberto ? 'topo-cheio' : ''}`}>
      <div className="container-site flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#topo" aria-label="Nexus, início" onClick={() => setAberto(false)} className="flex min-h-11 items-center text-white no-underline">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {menu.map((item) => (
            <a key={item.href} href={item.href} className="flex min-h-11 items-center text-lavanda no-underline transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn min-h-11 bg-white px-5 text-preto">
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto(!aberto)}
          className="flex h-11 w-11 items-center justify-center rounded-botao border border-lilas/50 text-white lg:hidden"
        >
          <span aria-hidden="true" className={`menu-icone ${aberto ? 'menu-icone-aberto' : ''}`} />
        </button>
      </div>

      {aberto && (
        <nav id="menu-celular" aria-label="Principal no celular" className="flex flex-col gap-1 border-t border-lavanda/15 px-4 pb-5 pt-3 sm:px-6 lg:hidden">
          {menu.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setAberto(false)} className="flex min-h-12 items-center text-lg font-medium text-white no-underline">
              {item.label}
            </a>
          ))}
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn mt-2 min-h-14 bg-white px-5 text-preto">
            Conversar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
