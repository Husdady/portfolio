// Librarys
const path = require('path')

// JSON
const tsConfigBase = require('../../tsconfig.base.json')

const { paths, baseUrl } = tsConfigBase.compilerOptions // Get compilerOptions properties
const keys = Object.keys(paths) // Get key of each path

/**
 * Generate craco aliases
 * @param {string} dirname Receive the dirname of the initial path of the application 
 */
function generateAliases(dirname) {
  return keys.reduce((acc, key) => {
    const field = key.replace('/*', '') // Replace '/*' by ''
    const item = paths[key] // Get shortcuts of path
    const pathValue = Array.isArray(item) ? item[0]?.replace('/*', '') : '' // Get path value
    const value = `./${baseUrl}/${pathValue}` // Define value

    return {
      ...acc,
      [field]: path.resolve(dirname, value)
    }
  }, {})
}

module.exports = generateAliases
