// React
import React from 'react'

// Librarys
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Hooks
import Helper from '@utils/Helper'

// Interfaces
import { ButtonProps, LoadingActions } from '@interfaces/Button.interface'

const Button = React.forwardRef<LoadingActions, ButtonProps>(
  (
    {
      icon,
      title,
      style,
      className,
      attributes,
      backgroundColor,
      onClick,
      loading
    }: ButtonProps,
    ref
  ) => {
    const [isLoading, setLoading] = React.useState<boolean>(false)

    const buttonStyle: React.CSSProperties = {
      ...style,
      backgroundColor: backgroundColor
    }

    const buttonClassName = Helper.classnames(['border-0', 'scale', className])

    // Mostrar "loading" en el botón
    const showLoading = React.useCallback(() => setLoading(true), [])

    // Ocultar "loading" en el botón
    const hideLoading = React.useCallback(() => setLoading(false), [])

    // Funciones que se pueden usar con las "refs"
    const handleRef = React.useCallback(
      () => ({ showLoading: showLoading, hideLoading: hideLoading }),
      []
    )

    React.useImperativeHandle(ref, handleRef)

    // Evento 'click' en el botón
    const handleClick = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!onClick) return false

        return onClick({
          event: event,
          showLoading: showLoading,
          hideLoading: hideLoading
        })
      },
      []
    )

    // Renderizar ícono del botón
    const Icon = React.useCallback(() => {
      if (
        (typeof icon === 'object' && 'name' in icon) ||
        (typeof icon === 'object' && 'size' in icon) ||
        (typeof icon === 'object' && 'color' in icon)
      ) {
        return (
          <FontAwesomeIcon
            size={icon.size}
            icon={icon.name}
            color={icon.color}
          />
        )
      }

      return <FontAwesomeIcon icon={icon} />
    }, [icon])

    // Renderizar contenido del botón
    const Content = React.useCallback(() => {
      if (isLoading) {
        return (
          <span
            role="status"
            className="spinner-border spinner-border-sm text-light"
            {...loading}
          />
        )
      }

      return (
        <React.Fragment>
          {/* Ícono del botón */}
          <Icon />

          {/* Titulo del botón */}
          <span className="ms-2">{title}</span>
        </React.Fragment>
      )
    }, [icon, title, loading, isLoading])

    return (
      <button
        style={buttonStyle}
        className={buttonClassName}
        onClick={handleClick}
        {...attributes}
      >
        <Content />
      </button>
    )
  }
)

export default React.memo(Button)

Button.defaultProps = {
  style: {},
  title: 'button'
}
