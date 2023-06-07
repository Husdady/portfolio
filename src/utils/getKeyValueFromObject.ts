/**
 * Get the key value of the an object
 * @param {object} obj Object
 * @param {string} key Object key
 * @returns {string} Key value
 */
export default function getKeyValueFromObject(obj: object, key: string): string {
  return key in obj ? (obj[key as keyof typeof obj] as string) : ''
}
