import Hero from './sections/Hero'
import Problema from './sections/Problema'
import ComoFunciona from './sections/ComoFunciona'
import Calculadora from './sections/Calculadora'
import Precos from './sections/Precos'
import Clientes from './sections/Clientes'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

export default function App() {
  return (
    <>
      <main className="bg-white">
        <Hero />
        <Problema />
        <ComoFunciona />
        <Calculadora />
        <Precos />
        <Clientes />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}
