import { comoTrabalhamos } from '../content'

export default function ComoTrabalhamos() {
  return (
    <section id="como-trabalhamos" className="relative scroll-mt-16 bg-roxo-escuro px-4 py-20 text-white sm:px-6 lg:py-32">
      <div className="container-site flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <p className="destaque rv text-lavanda">{comoTrabalhamos.rotulo}</p>
          <h2 className="titulo-lg rv max-w-[20ch]">{comoTrabalhamos.titulo}</h2>
          <div className="sublinhado rv" />
        </div>

        <ol className="passos">
          {comoTrabalhamos.passos.map((passo, i) => (
            <li key={passo.titulo} className="passo rv" style={{ transitionDelay: `${i * 90}ms` }}>
              <span aria-hidden="true" className="passo-numero">
                {i + 1}
              </span>
              <h3 className="font-display text-[22px] font-bold tracking-[-0.02em]">{passo.titulo}</h3>
              <p className="leading-relaxed text-lavanda">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
