/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores da marca Avalix
        navy: {
          DEFAULT: '#0B1F3A', // fundo principal
          deep: '#071528', // tom mais escuro (detalhes)
          soft: '#16325C', // marca d'água do rodapé
        },
        accent: {
          DEFAULT: '#2F80ED', // azul de destaque (check do "A")
          strong: '#1C6BD6', // fundo de botões: garante contraste com texto branco
          dark: '#154F9E', // texto azul sobre fundo claro
        },
        white: '#FFFFFF',
        star: '#FBBC04', // amarelo das estrelas, só como detalhe
        mist: '#F1F4F8', // cinza-azulado das seções claras
        ink: {
          soft: '#3B4B63', // texto secundário em fundo claro
          muted: '#DCE6F3', // texto secundário em fundo navy
          faint: '#A9B8CF', // notas pequenas em fundo navy
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
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
      },
      animation: {
        rise: 'rise 800ms cubic-bezier(.23,1,.32,1) both',
        tap: 'tap 5s cubic-bezier(.77,0,.175,1) infinite',
        wave: 'wave 2.5s cubic-bezier(.23,1,.32,1) infinite',
        sent: 'sent 5s cubic-bezier(.23,1,.32,1) infinite',
      },
    },
  },
  plugins: [],
}
