const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
    },
    baseUrl: 'http://localhost:3000',
  },
})
