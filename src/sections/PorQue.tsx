import { porQue } from '../content'
import { Check } from '../components/Icons'
import Cabecalho from '../components/Cabecalho'

export default function PorQue() {
  const { separado, nexus } = porQue.comparacao

  return (
    <section className="bg-preto px-4 py-20 text-white sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <Cabecalho rotulo={porQue.rotulo} titulo={porQue.titulo} fundo="escuro" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="flex list-none flex-col gap-6 p-0">
            {porQue.motivos.map((motivo) => (
              <li key={motivo.titulo} className="flex gap-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-lilas" />
                <div>
                  <h3 className="font-display text-xl font-semibold">{motivo.titulo}</h3>
                  <p className="mt-1 leading-relaxed text-lavanda">{motivo.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-card border border-lavanda/20 p-6">
              <h3 className="font-display text-lg font-semibold text-lavanda">{separado.titulo}</h3>
              <ul className="flex flex-1 list-none flex-col gap-2 p-0 text-tinta-fraca">
                {separado.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-normal text-lavanda">{separado.resumo}</p>
            </div>
            <div className="flex flex-col gap-4 rounded-card border border-lilas bg-roxo-escuro/40 p-6 shadow-brilho">
              <h3 className="font-display text-lg font-semibold">{nexus.titulo}</h3>
              <ul className="flex flex-1 list-none flex-col gap-2 p-0 font-medium">
                {nexus.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-normal text-lavanda">{nexus.resumo}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
