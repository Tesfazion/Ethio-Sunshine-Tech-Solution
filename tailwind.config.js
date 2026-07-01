export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'sunrise-orange': '#FF7A00',
        'tech-blue': '#007ACC',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(255,122,0,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -22px, 0)' },
        },
        'float-xy': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(10px, -12px, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 14px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.95' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slower': 'float-slower 9s ease-in-out infinite',
        'float-xy': 'float-xy 8s ease-in-out infinite',
        'fade-up': 'fade-up 700ms ease-out both',
        shimmer: 'shimmer 2.6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.4s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
