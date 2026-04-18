/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#09090b',
          900: '#0c0c0f',
          850: '#121218',
          800: '#18181f',
        },
        accent: {
          DEFAULT: '#3b82f6',
          muted: '#2563eb',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
      },
      boxShadow: {
        'elevate': '0 24px 48px -12px rgba(0, 0, 0, 0.45)',
        'card': '0 0 0 1px rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.5)',
        'card-hover': '0 0 0 1px rgba(59, 130, 246, 0.25), 0 28px 60px -16px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent 55%)',
        'glow-radial-violet': 'radial-gradient(ellipse 60% 40% at 100% 0%, rgba(139, 92, 246, 0.12), transparent 50%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
