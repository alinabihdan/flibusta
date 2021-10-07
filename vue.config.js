module.exports = {
  // publicPath: "/flibusta/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
};
