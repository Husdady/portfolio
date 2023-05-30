// Librarys
import React from 'react'

// Components
import Spin from './Spin'

// Types
import { ButtonContentProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Styles
import './styles.scss'

const ButtonContent: React.FC<ButtonContentProps> = ({
  icon,
  title,
  loading,
  loadingTitle,
  customSpin,
  titleClassName,
  titleStyle
}: ButtonContentProps) => {
  // Define title classes
  const titleClasses = React.useMemo(() => {
    return classnames([titleClassName, 'text-inherit font-poppins leading-tight'])
  }, [])

  // Show spin when is fetching to some API
  if (loading === true) {
    return <Spin title={loadingTitle} {...customSpin} />
  }

  return (
    <React.Fragment>
      {icon}

      {title.length > 0 && (
        <span style={titleStyle} className={titleClasses}>
          {title}
        </span>
      )}
    </React.Fragment>
  )
}

export default React.memo(ButtonContent)
