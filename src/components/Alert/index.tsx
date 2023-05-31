// Librarys
import React from 'react'
import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { AlertRef, AlertProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import icons from './icons'

const CustomAlert = React.forwardRef<AlertRef, AlertProps>(
  ({ title, variant, className }: AlertProps, ref) => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const showAlert = React.useCallback(() => setVisible(true), [])
    const hideAlert = React.useCallback(() => setVisible(false), [])

    // Create refs for use in another component
    const handleRef = React.useCallback(() => ({ show: showAlert, hide: hideAlert }), [])

    // Use imperative hook
    React.useImperativeHandle(ref, handleRef)

    if (!visible) return null

    return (
      <Alert variant={variant} className={classnames(['text-center', className])}>
        <div>
          <FontAwesomeIcon className="me-2" icon={icons[variant as keyof typeof icons]} />
          <span className="title-custom-alert">{title}</span>
        </div>

        <FontAwesomeIcon
          role="button"
          onClick={hideAlert}
          icon={icons.danger}
          className="text-black-50 close-custom-alert"
        />
      </Alert>
    )
  }
)

export default React.memo(CustomAlert)
