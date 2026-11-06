import { servicos } from '../content'
import { Icone } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

export default function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-4 bg-nevoa px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <Cabecalho rotulo={servicos.rotulo} titulo={servicos.titulo} />

        <ul className="grid list-none gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">
          {servicos.pilares.map((pilar) => (
            <li
              key={pilar.titulo}
              className={`flex flex-col gap-4 rounded-card p-7 sm:p-8 ${
                pilar.caso ? 'bg-preto text-white md:col-span-2' : 'bg-white'
              }`}
            >
              <Icone tipo={pilar.icone} className={`h-10 w-10 ${pilar.caso ? 'text-lilas' : 'text-roxo'}`} />
              <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">{pilar.titulo}</h3>
              <p className={`leading-relaxed ${pilar.caso ? 'text-lavanda' : 'text-tinta-suave'}`}>{pilar.texto}</p>
              {pilar.caso && <p className="border-l-2 border-lilas pl-4 font-medium leading-relaxed">{pilar.caso}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
