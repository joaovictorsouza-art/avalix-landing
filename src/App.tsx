import Hero from './sections/Hero'
import Problema from './sections/Problema'
import Servicos from './sections/Servicos'
import ComoFunciona from './sections/ComoFunciona'
import ParaQuem from './sections/ParaQuem'
import ComecePorAqui from './sections/ComecePorAqui'
import Calculadora from './sections/Calculadora'
import Avulsos from './sections/Avulsos'
import Clientes from './sections/Clientes'
import Casos from './sections/Casos'
import PorQue from './sections/PorQue'
import Duvidas from './sections/Duvidas'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

export default function App() {
  return (
    <>
      <main className="bg-white">
        <Hero />
        <Problema />
        <Servicos />
        <ComoFunciona />
        <ParaQuem />
        <ComecePorAqui />
        <Calculadora />
        <Avulsos />
        <Clientes />
        <Casos />
        <PorQue />
        <Duvidas />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}
