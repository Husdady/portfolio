// Librarys
import React from 'react'

/**
 * Hook that prevents the error 'Cannot update component when it has been unmounted'
 * @param {React.EffectCallback} effect Callback that executes when component is mounted
 * @param {React.DependencyList} deps Dependency array
 * @return {void}
 */
export default function useMounted(
  effect: React.EffectCallback, // Callback that returns another callback
  deps: React.DependencyList = [] // Array dependencies
): void {
  const unmount = React.useRef<ReturnType<React.EffectCallback> | null>(null)

  React.useEffect(() => {
    let mounted = true // Mounted component

    if (mounted) {
      unmount.current = effect() // Save the callback that is returned from the effect
    }

    return () => {
      mounted = false // Unmounted component

      if (typeof unmount.current === 'function') {
        unmount.current() // Run callback when component is unmounted
      }
    }
  }, deps)
}
