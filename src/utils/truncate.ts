/**
 * Truncate text, replacing the last 3 letters with '...'
 * @param str 'String' to be truncated
 * @param limit Maximum limit of the 'String'
 * @return {string} String
 */
export default function truncate(str: string, limit = 100): string {
  if (typeof str !== 'string') return ''
  if (str.length <= limit) return str // Total length is less than limit, return current value
  return str.substring(0, limit) + '...' // Replace last characters with '...'
}
