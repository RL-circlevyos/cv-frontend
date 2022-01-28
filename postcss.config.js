module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  module: {
    loaders: [
      {
        test: /plugin\.css$/,
        loaders: ["style-loader", "css"],
      },
    ],
  },
};
