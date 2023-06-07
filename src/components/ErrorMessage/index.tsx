/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { ErrorMessageProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { Props } from './constants'

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  color = Props.COLOR,
  containerClassName,
  title,
  containerStyle
}: ErrorMessageProps) => {
  // Define styles for the error title
  const errorTitleStyles = React.useMemo<React.CSSProperties>(() => {
    return { color: color, marginLeft: '0.32rem' }
  }, [color])

  // Validate title
  if (typeof title !== 'string') return null
  if (title.length === 0) return null

  return (
    <div
      style={containerStyle}
      className={classnames([Props.CONTAINER_CLASSNAME, containerClassName])}
    >
      <FontAwesomeIcon color={color} size="sm" icon="exclamation-circle" />
      <small style={errorTitleStyles}>{title}</small>
    </div>
  )
}

export default React.memo(ErrorMessage)
