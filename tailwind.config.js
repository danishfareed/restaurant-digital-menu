const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // ... your other plugins
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '@keyframes moveStripes': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        '.animate-move-stripes': {
          backgroundImage: 'repeating-linear-gradient(90deg, #ff0000, #ff0000 20px, transparent 20px, transparent 40px)',
          animation: 'moveStripes 10s linear infinite', // Slowed down the animation
          backgroundSize: '40px 100%',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};