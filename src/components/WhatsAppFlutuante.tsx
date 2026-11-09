import { useEffect, useState } from 'react'
import { linkWhatsApp, whatsappFlutuante } from '../content'
import { Chat } from './Icons'

/** Aparece depois do hero, que já tem o botão principal. */
export default function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => {
      const final = document.querySelector('.fechamento')?.getBoundingClientRect().top ?? Infinity
      setVisivel(window.scrollY > window.innerHeight * 0.7 && final > window.innerHeight * 0.6)
    }
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappFlutuante.rotulo}
      className={`flutuante btn h-14 w-14 bg-roxo text-white shadow-flutuante sm:h-auto sm:w-auto sm:px-6 sm:py-4 ${visivel ? 'flutuante-on' : ''}`}
      tabIndex={visivel ? 0 : -1}
    >
      <Chat className="h-6 w-6" />
      <span className="hidden sm:inline">{whatsappFlutuante.rotulo}</span>
    </a>
  )
}
