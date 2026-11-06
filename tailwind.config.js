/** @type {import('tailwindcss').Config} */
// Os valores das cores ficam em src/index.css (:root). Aqui só damos nome a eles.
const cor = (nome) => `rgb(var(--cor-${nome}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores da marca Nexus
        preto: cor('preto'),
        'roxo-escuro': cor('roxo-escuro'),
        roxo: cor('roxo'),
        lilas: cor('lilas'),
        lavanda: cor('lavanda'),
        white: cor('branco'),
        // Derivadas das cores da marca
        nevoa: cor('nevoa'), // fundo das seções claras
        superficie: cor('superficie'), // cards sobre fundo preto
        'tinta-suave': cor('tinta-suave'), // texto secundário em fundo claro
        'tinta-fraca': cor('tinta-fraca'), // notas pequenas em fundo preto
        apagada: cor('apagada'), // estrela vazia
        estrela: cor('estrela'), // só nas estrelas de avaliação do Google
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        botao: 'var(--raio-botao)',
        card: 'var(--raio-card)',
      },
      boxShadow: {
        flutuante: 'var(--sombra-flutuante)',
        brilho: 'var(--sombra-brilho)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        tap: {
          '0%, 8%': { transform: 'translate(28px, -56px) rotate(10deg)' },
          '34%, 70%': { transform: 'translate(0, 0) rotate(4deg)' },
          '92%, 100%': { transform: 'translate(28px, -56px) rotate(10deg)' },
        },
        wave: {
          '0%': { opacity: '0', transform: 'scale(.85)' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(1.15)' },
        },
        sent: {
          '0%, 36%': { opacity: '0', transform: 'translateY(10px) scale(.95)' },
          '44%, 82%': { opacity: '1', transform: 'none' },
          '92%, 100%': { opacity: '0', transform: 'translateY(6px) scale(.97)' },
        },
        fluxo: {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        rise: 'rise 800ms cubic-bezier(.23,1,.32,1) both',
        tap: 'tap 5s cubic-bezier(.77,0,.175,1) infinite',
        wave: 'wave 2.5s cubic-bezier(.23,1,.32,1) infinite',
        sent: 'sent 5s cubic-bezier(.23,1,.32,1) infinite',
        fluxo: 'fluxo 1.6s linear infinite',
      },
    },
  },
  plugins: [],
}
