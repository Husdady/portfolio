// React
import React from 'react'

// Librarys
import { Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { AlertRef, AlertProps, IconType } from '@interfaces/Alert.interface'

// React
import Helper from '@utils/Helper'

const icons: IconType = {
  success: 'check-circle',
  danger: 'times-circle'
}

const CustomAlert = React.forwardRef<AlertRef, AlertProps>(
  ({ title, variant, className }: AlertProps, ref) => {
    const [visible, setVisible] = React.useState<boolean>(false)

    const showAlert = React.useCallback(() => setVisible(true), [])
    const hideAlert = React.useCallback(() => setVisible(false), [])

    // Create refs for use in another component
    const handleRef = React.useCallback(
      () => ({ show: showAlert, hide: hideAlert }),
      []
    )

    React.useImperativeHandle(ref, handleRef)

    if (!visible) return null

    const alertClasses = Helper.classnames(['text-center', className])

    return (
      <Alert variant={variant} className={alertClasses}>
        <div>
          {/* ícono de la alerta */}
          <FontAwesomeIcon
            className="me-2"
            icon={icons[variant as keyof typeof icons]}
          />

          {/* Título de la alerta */}
          <span className="title-custom-alert">{title}</span>
        </div>

        {/* Ícono parar cerrar alerta */}
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
