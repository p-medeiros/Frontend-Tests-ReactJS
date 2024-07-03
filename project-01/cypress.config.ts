const { defineConfig } = require("cypress");

module.exports = defineConfig({
   // component:{
  //   devServer: {
  //     framework: "react",
  //     bundler: "vite",
  //   },
  // },
  e2e: {
    baseUrl: "http://localhost:5173",
    viewportHeight : 1080,
    viewportWidth : 1920,
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    },
});
 