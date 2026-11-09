import { useEffect, useRef } from 'react'
import { iniciarCampo } from './motor'

/** Sem WebGL ou com "reduzir movimento": o site mostra o símbolo estático no lugar do campo. */
export function campoDisponivel() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return Boolean(document.createElement('canvas').getContext('webgl'))
  } catch {
    return false
  }
}

/** Fundo fixo da página: as seções transparentes deixam o campo aparecer. */
export default function CampoParticulas() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const luz = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (document.documentElement.dataset.campo !== 'on' || !canvas.current || !luz.current) return
    const elCanvas = canvas.current
    const elLuz = luz.current
    const controle = new AbortController()
    let parar = () => {}

    // Depois que o texto e os botões já apareceram e respondem ao toque
    const comecar = () => {
      iniciarCampo(elCanvas, elLuz, controle.signal)
        .then((f) => {
          if (controle.signal.aborted) f()
          else parar = f
        })
        .catch(() => {
          document.documentElement.dataset.campo = 'off'
        })
    }
    const ocioso = window.requestIdleCallback ? window.requestIdleCallback(comecar, { timeout: 500 }) : window.setTimeout(comecar, 200)

    return () => {
      controle.abort()
      if (window.cancelIdleCallback) window.cancelIdleCallback(ocioso)
      else window.clearTimeout(ocioso)
      parar()
    }
  }, [])

  return (
    <div aria-hidden="true" className="campo-fundo">
      <div className="faixa-luz faixa-luz-a" />
      <div className="faixa-luz faixa-luz-b" />
      <div ref={luz} className="campo-luz" />
      <canvas ref={canvas} className="campo-canvas" />
    </div>
  )
}
