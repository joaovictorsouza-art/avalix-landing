import { useState } from 'react'

type Foto = { src: string; alt: string; tipo: string; cliente: string }

// A faixa anda a largura de uma volta e recomeça: as cópias escondem o recomeço
const VOLTAS = 4

/** Fotos passando sozinhas. Param ao passar o mouse, pelo botão ou com "reduzir movimento". */
export default function FaixaFotos({ fotos, rotulo }: { fotos: Foto[]; rotulo: string }) {
  const [parada, setParada] = useState(false)

  return (
    <div role="group" aria-label={rotulo} className="faixa-fotos">
      <div className={`faixa-fotos-trilho ${parada ? 'faixa-fotos-parada' : ''}`}>
        {Array.from({ length: VOLTAS }, (_, volta) => (
          <ul key={volta} aria-hidden={volta > 0} className="faixa-fotos-volta">
            {fotos.map((foto) => (
              <li key={foto.src}>
                <figure className="faixa-fotos-item">
                  <img src={foto.src} alt={volta > 0 ? '' : foto.alt} loading="lazy" decoding="async" width={600} height={800} />
                  <figcaption>
                    <strong>{foto.tipo}</strong>
                    <span>{foto.cliente}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <button type="button" onClick={() => setParada(!parada)} className="faixa-fotos-botao">
        {parada ? 'Continuar' : 'Pausar'}
        <span className="sr-only"> as fotos</span>
      </button>
    </div>
  )
}
