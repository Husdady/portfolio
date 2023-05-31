// Utils
import isObject from './isObject'

/**
 * Copy an object
 * @param {object} obj Object for copy
 * @return {object} object
 */
export default function copyObject(obj: object) {
  // Param not is an object
  if (!isObject(obj)) return obj

  // Return object copy
  return JSON.parse(JSON.stringify(obj))
}
