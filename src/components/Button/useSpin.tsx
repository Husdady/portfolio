/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useMemo } from 'react'

// Types
import type { UseSpinParams } from './types'

// Utils
import classnames from '@utils/classnames'

// Constants
import { SpinnerProps as Props } from './constants'

/**
 * Hook that implements the logic of Spin component
 * @param {UseSpinParams} params Receive some props of Spin component
 */
export default function useSpin({
  size = Props.DEFAULT_SIZE,
  align = Props.DEFAULT_ALIGN,
  center = Props.DEFAULT_CENTER,
  customTitle = {},
  customSvg = {},
  className
}: UseSpinParams) {
  // Component Settings
  const spin = useMemo(
    () => ({
      // Classes of the component
      className: classnames([
        className,
        center ? 'justify-center' : null,
        align === 'vertical' ? 'flex-direction-column' : null,
        'spinner d-flex align-items-center gap-x-3'
      ]),

      // Svg component
      svg: {
        style: customSvg?.style,
        className: classnames(['animate-spin', size, customSvg?.className])
      },

      // Title of the component
      title: {
        style: customTitle?.style,
        className: classnames([customTitle?.className, 'text-inherit catamaran'])
      }
    }),
    []
  )

  return spin
}
