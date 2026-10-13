import { comoFunciona } from '../content'
import { IconePasso } from '../components/Icons'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-4 bg-accent-strong px-4 py-24 text-white sm:px-6 lg:py-40">
      <div className="container-site flex flex-col gap-16 lg:gap-20">
        <h2 className="titulo-xl">{comoFunciona.titulo}</h2>
        <ol className="grid list-none gap-x-12 gap-y-14 p-0 md:grid-cols-3">
          {comoFunciona.passos.map((passo) => (
            <li key={passo.titulo} className="flex flex-col gap-4">
              <IconePasso tipo={passo.icone} />
              <h3 className="font-display text-[26px] font-bold tracking-[-0.02em] md:text-[28px]">{passo.titulo}</h3>
              <p className="text-[19px] leading-[1.55]">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
