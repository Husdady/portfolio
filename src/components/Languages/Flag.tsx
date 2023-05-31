// Librarys
import { memo, useMemo } from 'react'

// Interfaces
import { FlagProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

const Flag = ({ alt, url, title, language, currentLanguage, onChangeLanguage }: FlagProps) => {
  // Check if its active flag
  const isActive = useMemo(
    () => currentLanguage.toLowerCase() === language,
    [language, currentLanguage]
  )

  return (
    <li
      role="button"
      className={classnames(['list-unstyled mx-1', isActive ? 'opactity-100' : 'opacity-25'])}
    >
      <img
        width={30}
        height={30}
        role="button"
        className="scale"
        loading="lazy"
        alt={alt}
        title={title}
        src={require('@assets/images' + url)}
        onClick={() => {
          if (isActive) return false
          onChangeLanguage(language.toUpperCase())
        }}
      />
    </li>
  )
}

export default memo(Flag)
