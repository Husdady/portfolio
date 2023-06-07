// Librarys
import React from 'react'
import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { AlertProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import icons from './icons'

const CustomAlert: React.FC<AlertProps> = ({
  title,
  variant,
  className,
  isVisible,
  onClose
}: AlertProps) => {
  return (
    <Alert variant={variant} show={isVisible} className={classnames(['text-center', className])}>
      <div>
        <FontAwesomeIcon className="me-2" icon={icons[variant as keyof typeof icons]} />
        <span className="title-custom-alert fire-sans">{title}</span>
      </div>

      <FontAwesomeIcon
        role="button"
        onClick={onClose}
        icon={icons.danger}
        className="text-black-50 close-custom-alert"
      />
    </Alert>
  )
}

export default React.memo(CustomAlert, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title && prevProps.isVisible === nextProps.isVisible
})
