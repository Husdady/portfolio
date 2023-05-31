// JSON
const tsConfigBase = require('../../tsconfig.base.json')

// Get compilerOptions properties
const { paths } = tsConfigBase.compilerOptions

const keys = Object.keys(paths) // Get key of each path

/**
 * Generate jest aliases
 */
function generateJestAliases() {
  return keys.reduce((acc, key) => {
    const property = key.replace('/*', '') // Replace '/*' by ''
    const item = paths[key] // Get shortcuts of path
    const pathValue = Array.isArray(item) ? item[0].replace('/*', '') : '' // Get path value

    // Field contains /*, return ^@path/(.*)$ else return @path
    const field = /\/\*/g.test(key) ? `^${property}/(.*)$` : key

    // Define current path
    let currentPath = `<rootDir>/src/${pathValue}`

    // Path contains /*, concat /$1 to currentPath
    if (/\/\*/g.test(item[0])) {
      currentPath += '/$1'
    }

    return {
      ...acc,
      [field]: currentPath
    }
  }, {})
}

module.exports = generateJestAliases
