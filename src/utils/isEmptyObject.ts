// Utils
import isObject from './isObject'

/**
 * Check if is an empty object
 * @param {Record<string, unknown>} obj Object to be checked
 * @return {boolean} Boolean
 */
export default function isEmptyObject(obj: Record<string, unknown>): boolean {
  if (!isObject(obj)) return false

  // eslint-disable-next-line no-unreachable-loop
  for (const _ in obj) {
    return false
  }

  return true
}
