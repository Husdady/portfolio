/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import React from 'react'

// Types
import type { UseButtonParams } from './types'

// Utils
import classnames from '@utils/classnames'

/**
 * Generate the logic of the Button component
 * @param {UseButtonParams} props Receive Button component props
 */
export default function useButton({
  className,
  onClick,
  onDoubleClick,
  depsForDoubleClick
}: UseButtonParams) {
  // Define component classes
  const buttonClassName = React.useMemo(
    () =>
      classnames([
        className,
        'btn rounded overflow-hidden position-relative outline-none d-flex flex-wrap align-items-center justify-content-center'
      ]),
    [className]
  )

  // Event 'click' of the Button
  const handleDoubleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // One click on button
      if (e.detail === 1) {
        typeof onClick === 'function' && onClick(e)
      }

      // Double click on button
      if (e.detail === 2) {
        typeof onDoubleClick === 'function' && onDoubleClick(e)
      }
    },
    [depsForDoubleClick]
  )

  return {
    buttonClassName: buttonClassName,
    handleDoubleClick: handleDoubleClick
  }
}
