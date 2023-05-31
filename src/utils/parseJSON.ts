/**
 *  A wrapper for "JSON.parse()"" to support "undefined" value
 * @param {string|null} value Its sring or null
 * @returns {undefined} Value or Undefined
 */
export default function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    // eslint-disable-next-line no-console
    console.warn('Parsing error on', { value: value })
    return undefined
  }
}
