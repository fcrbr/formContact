const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },

  webpack: {
    plugins: [
      new ESLintPlugin({
        // Adjust ESLint configuration as needed
      }),
    ],
  },
};


