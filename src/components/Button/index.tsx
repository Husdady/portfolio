// Librarys
import React from 'react'

// Components
import ButtonContent from './ButtonContent'

// Hooks
import useButton from './useButton'

// Interfaces
import { ButtonProps } from './interfaces'

// Constants
import { ButtonProps as Props } from './constants'

// Styles
import './styles.css'

const Button: React.FC<ButtonProps> = ({
  type = Props.DEFAULT_TYPE,
  disabled = Props.DEFAULT_DISABLED,
  loadingTitle = Props.DEFAULT_LOADING_TITLE,
  id,
  title,
  customTitle = {},
  titlePopup,
  icon,
  style,
  className,
  onClick,
  onDoubleClick,
  depsForDoubleClick,
  showSpin,
  customSpin = {},
  ...props
}: ButtonProps) => {
  const { buttonClassName, handleDoubleClick } = useButton({
    className: className,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    depsForDoubleClick: depsForDoubleClick
  })

  return (
    <button
      {...props}
      id={id}
      type={type}
      style={style}
      title={titlePopup}
      className={buttonClassName}
      disabled={disabled || showSpin === true}
      onClick={typeof onDoubleClick === 'undefined' ? onClick : handleDoubleClick}
    >
      <ButtonContent
        icon={icon}
        title={title}
        loading={showSpin}
        customSpin={customSpin}
        loadingTitle={loadingTitle}
        titleStyle={customTitle.style}
        titleClassName={customTitle.className}
      />
    </button>
  )
}

export default React.memo(Button, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.showSpin === nextProps.showSpin &&
    prevProps.loadingTitle === nextProps.loadingTitle &&
    prevProps.className === nextProps.className
  )
})
