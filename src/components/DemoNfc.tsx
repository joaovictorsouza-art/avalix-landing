import { comecePorAqui } from '../content'
import Logo from './Logo'
import { Check, Nfc, Stars } from './Icons'

/** Ilustração: o celular encosta na placa e a avaliação abre no Google. */
export default function DemoNfc() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[560px]" aria-hidden="true">
      <div className="absolute bottom-0 left-0 flex h-[340px] w-[250px] flex-col justify-between rounded-card bg-white px-6 py-7 text-preto sm:h-[400px] sm:w-[300px] sm:px-7 sm:py-8">
        <Logo tamanho="sm" />
        <Nfc animado className="h-20 w-20 text-roxo sm:h-24 sm:w-24" />
        <p className="font-display text-[20px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[24px]">
          {comecePorAqui.placa.titulo}
        </p>
        <Stars className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" />
        <p className="text-[15px] text-tinta-suave">{comecePorAqui.placa.instrucao}</p>
      </div>

      <div className="absolute left-[140px] top-6 h-[290px] w-[146px] rounded-[30px] border border-lilas/50 bg-preto p-2 shadow-flutuante motion-safe:animate-tap sm:left-[170px] sm:top-10 sm:h-[336px] sm:w-[168px] sm:rounded-[32px]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3.5 rounded-[24px] bg-nevoa p-4 text-center">
          <span className="text-[13px] font-semibold text-tinta-suave">Avaliar sua loja</span>
          <Stars className="h-5 w-5" />
          <span className="h-11 w-full rounded-[10px] bg-white" />
          <span className="flex h-9 w-full items-center justify-center rounded-botao bg-roxo text-[13px] font-bold text-white">
            Publicar
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 right-0 flex items-center gap-2.5 rounded-2xl bg-roxo px-4 py-3 text-[15px] font-semibold text-white shadow-flutuante motion-safe:animate-sent sm:bottom-16">
        <Check className="h-[18px] w-[18px]" />
        {comecePorAqui.aviso}
      </div>
    </div>
  )
}
