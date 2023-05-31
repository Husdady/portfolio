/* eslint-disable @typescript-eslint/no-explicit-any */
// Librarys
import { lazy as lazyImport } from 'react'

// Types
import type { ComponentType } from 'react'

/**
 * Lazy loading on components
 * @param factory Asynchronous Function returning an import => 'import("...")'
 * @param minLoadTimeMs Import load timeout
 * @returns Component
 */
export default function lazy<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  minLoadTimeMs = 1000
) {
  return lazyImport(() =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minLoadTimeMs))]).then(
      ([moduleExports]) => moduleExports
    )
  )
}
