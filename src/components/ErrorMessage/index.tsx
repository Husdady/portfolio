// Librarys
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { ErrorMessageProps } from '@interfaces/ErrorMessage.interface'

// Constants
import { Props } from './constants'

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  color = Props.COLOR,
  containerClassName = Props.CONTAINER_CLASSNAME,
  title,
  containerStyle
}: ErrorMessageProps) => {
  return (
    <div style={containerStyle} className={containerClassName}>
      <FontAwesomeIcon color={color} className="me-1" icon="exclamation-circle" />
      <small style={{ color: color }}>{title}</small>
    </div>
  )
}

export default React.memo(ErrorMessage)

export function renderError(extraProps: ErrorMessageProps): null | React.ReactNode {
  if (!extraProps.title) return null
  return <ErrorMessage {...extraProps} />
}
