import {defineConfig} from 'cypress'

export default defineConfig({
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,ts,jsx,tsx}',
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  env: {
    'cypress-react-selector': {
      root: '#__cy_root',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
