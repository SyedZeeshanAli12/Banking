const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    "watchForFileChanges": false,
    "exprimentalSessionSupport": true,
    testIsolation: false,
    "compilerOptions": {

        "types": ["Cypress"]
        
},
  },
});
