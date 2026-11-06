import { paraQuem } from '../content'
import { Icone } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

export default function ParaQuem() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-12">
        <Cabecalho rotulo={paraQuem.rotulo} titulo={paraQuem.titulo} />
        <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-5">
          {paraQuem.nichos.map((nicho) => (
            <li key={nicho.nome} className="flex items-center gap-4 rounded-card bg-nevoa p-5 lg:flex-col lg:items-start lg:p-6">
              <Icone tipo={nicho.icone} className="h-9 w-9 shrink-0 text-roxo" />
              <span className="font-semibold leading-snug">{nicho.nome}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
