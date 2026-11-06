import { casos } from '../content'
import Cabecalho from '../components/Cabecalho'

export default function Casos() {
  const { destaque } = casos

  return (
    <section id="casos" className="scroll-mt-4 bg-white px-4 py-20 sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <Cabecalho rotulo={casos.rotulo} titulo={casos.titulo} />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Caso real, sem o nome do cliente */}
          <div className="flex flex-col justify-between gap-6 rounded-card bg-preto p-8 text-white sm:p-10">
            <p className="font-display text-[80px] font-bold leading-[0.9] tracking-[-0.05em] text-lilas lg:text-[120px]">{destaque.numero}</p>
            <div className="flex flex-col gap-3">
              <p className="font-display text-2xl font-semibold leading-snug">{destaque.texto}</p>
              <p className="leading-relaxed text-lavanda">{destaque.detalhe}</p>
            </div>
          </div>

          {/* PENDENTE: autorização do cliente. Nomes e textos em src/content.ts → casos.projetos */}
          <ul className="flex list-none flex-col gap-3 p-0">
            {casos.projetos.map((projeto, i) => (
              <li key={i} className="flex flex-1 flex-col justify-center gap-1.5 rounded-card border-2 border-dashed border-lilas bg-nevoa p-6">
                <h3 className="font-display text-lg font-semibold">{projeto.nome}</h3>
                <p className="text-base leading-normal text-tinta-suave">{projeto.texto}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* PENDENTE: textos reais dos clientes. Não inventar. Conteúdo em casos.depoimentos */}
        <ul className="grid list-none gap-3 p-0 md:grid-cols-3">
          {casos.depoimentos.map((depoimento, i) => (
            <li key={i} className="flex flex-col gap-3 rounded-card border-2 border-dashed border-lilas p-6">
              <p className="leading-relaxed">{depoimento.texto}</p>
              <p className="text-[15px] font-semibold text-tinta-suave">{depoimento.autor}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
