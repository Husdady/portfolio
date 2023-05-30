// Librarys
import { memo, useCallback } from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { FlagProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// JSON
import flags from '@assets/data/flags.json'

const Flag = ({ alt, url, title, language, currentLanguage, onChangeLanguage }: FlagProps) => {
  // Check if its active flag
  const isActive = useCallback(
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
        alt={alt}
        title={title}
        src={require('@images/' + url)}
        onClick={() => {
          if (isActive) return false
          onChangeLanguage(language.toUpperCase())
        }}
      />
    </li>
  )
}

export default memo(Flag)
