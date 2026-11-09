import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { campoDisponivel } from './campo/CampoParticulas'
import './index.css'
import './experimental.css'

// Definido antes de desenhar a página, para o símbolo estático não piscar
document.documentElement.dataset.campo = campoDisponivel() ? 'on' : 'off'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
