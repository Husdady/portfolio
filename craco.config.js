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
    const p = paths[key][0].replace('/*', '') // Select first array el and replace

    // Field contains /*, return ^@path/(.*)$ else return @path
    const field = /\/\*/g.test(key) ? `^${f}/(.*)$` : key

    let currentPath = `<rootDir>/src/${p}`

    // Path contains /*, concat /$1 to currentPath
    if (/\/\*/g.test(paths[key][0])) {
      currentPath += '/$1'
    }

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
