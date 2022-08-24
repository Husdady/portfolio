// Config
const path = require('path')
const tsConfigBase = require('./tsconfig.base.json')

// Get compilerOptions properties
const { paths, baseUrl } = tsConfigBase.compilerOptions

const keys = Object.keys(paths) // Get key of each path

// Generate craco alias
function generateAliases() {
  return keys.reduce((acc, key) => {
    const field = key.replace('/*', '') // Replace '/*' by ''
    const currentPath = paths[key][0].replace('/*', '') // Select first array el and replace
    const value = `./${baseUrl}/${currentPath}`

    return {
      ...acc,
      [field]: path.resolve(__dirname, value)
    }
  }, {})
}

// Generate jest alias
function generateJestAliases() {
  return keys.reduce((acc, key) => {
    const f = key.replace('/*', '') // Replace '/*' by ''
    const field = `^${f}/(.*)$` // Define field
    const p = paths[key][0].replace('/*', '') // Select first array el and replace
    const currentPath = `<rootDir>/src/${p}/$1` // Define path

    return {
      ...acc,
      [field]: currentPath
    }
  }, {})
}

const alias = generateAliases()
const jestAlias = generateJestAliases()

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
