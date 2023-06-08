/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import React from 'react'

// Interfaces
import { OnlyClassNameProp } from '@custom-types/global-interfaces'
import classnames from '@utils/classnames'

interface SeparatorProps extends OnlyClassNameProp {
  color?: string
  height?: string
  withoutMarginTop?: boolean
  style?: Omit<React.CSSProperties, 'height' | 'backgroundColor'>
}

const Separator: React.FC<SeparatorProps> = ({
  height = '1px',
  color = '#5d5d5d',
  withoutMarginTop = false,
  className,
  style = {}
}: SeparatorProps) => {
  // Define styles for the Separator
  const separatorStyle = React.useMemo(() => {
    // Define the result of the styles
    const result: React.CSSProperties = {
      height: height,
      backgroundColor: color
    }

    // Add 'marginTop' style
    if ('marginTop' in style) {
      result.marginTop = style.marginTop
    }

    // Add 'marginTop' style
    if (!('marginTop' in result) && !withoutMarginTop) {
      result.marginTop = '1.25rem'
    }

    return {
      ...style,
      ...result
    }
  }, [])

  return <div className={classnames([className, 'w-100 bg-red mb-3'])} style={separatorStyle}></div>
}

export default React.memo(Separator)
