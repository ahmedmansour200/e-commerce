const config = {
  plugins: ["@tailwindcss/postcss"],
   theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
};

export default config;
