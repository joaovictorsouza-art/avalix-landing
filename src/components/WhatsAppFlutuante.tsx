import { linkWhatsApp, whatsappFlutuante } from '../content'
import { Chat } from './Icons'

/** Botão fixo no canto inferior direito, visível em toda a página. */
export default function WhatsAppFlutuante() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappFlutuante.rotulo}
      className="btn fixed bottom-4 right-4 z-50 h-14 w-14 bg-accent-strong text-white shadow-[0_12px_28px_rgba(7,21,40,0.35)] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-6 sm:py-4"
    >
      <Chat className="h-6 w-6" />
      <span className="hidden sm:inline">{whatsappFlutuante.rotulo}</span>
    </a>
  )
}
