// Utils
const generateAliases = require('./src/utils/generateAliases.js')
const generateJestAliases = require('./src/utils/generateJestAliases.js')

const alias = generateAliases(__dirname) // Get aliases
const jestAlias = generateJestAliases() // Get jest aliases

module.exports = {
  webpack: {
    alias: alias
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: jestAlias
    }
  }
}
