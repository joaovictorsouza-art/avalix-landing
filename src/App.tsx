import { useEffect } from 'react'
import CampoParticulas from './campo/CampoParticulas'
import Cabecalho from './sections/Cabecalho'
import Hero from './sections/Hero'
import Apresentacao from './sections/Apresentacao'
import Solucoes from './sections/Solucoes'
import ComoTrabalhamos from './sections/ComoTrabalhamos'
import Precos from './sections/Precos'
import Diferenciais from './sections/Diferenciais'
import Duvidas from './sections/Duvidas'
import Projetos from './sections/Projetos'
import { ChamadaFinal, Rodape } from './sections/Fechamento'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

/** Revela os blocos marcados com .rv quando entram na tela. */
function useRevelar() {
  useEffect(() => {
    const observador = new IntersectionObserver(
      (itens) => {
        itens.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('rv-ok')
            observador.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.rv').forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])
}

export default function App() {
  useRevelar()

  return (
    <>
      <CampoParticulas />
      <Cabecalho />
      <main className="relative z-10">
        <Hero />
        <Apresentacao />
        <Solucoes />
        <ComoTrabalhamos />
        <Precos />
        <Diferenciais />
        <Projetos />
        <Duvidas />
        <ChamadaFinal />
      </main>
      <div className="relative z-10">
        <Rodape />
      </div>
      <WhatsAppFlutuante />
    </>
  )
}
