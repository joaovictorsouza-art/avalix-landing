import { comoFunciona } from '../content'
import { Icone } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-4 bg-roxo-escuro px-4 py-20 text-white sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14 lg:gap-20">
        <Cabecalho rotulo={comoFunciona.rotulo} titulo={comoFunciona.titulo} fundo="escuro" />
        <ol className="grid list-none gap-x-10 gap-y-12 p-0 md:grid-cols-2 lg:grid-cols-4">
          {comoFunciona.passos.map((passo, i) => (
            <li key={passo.titulo} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Icone tipo={passo.icone} className="h-12 w-12 text-lavanda" />
                <span aria-hidden="true" className="font-display text-sm font-medium tracking-[0.2em] text-lavanda">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{passo.titulo}</h3>
              <p className="leading-[1.6] text-lavanda">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
