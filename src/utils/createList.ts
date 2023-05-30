/**
 * Create array with 'n' elements
 * @param {number} n Array length
 * @return {number[]} Array
 */
export default function createList(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1)
}
