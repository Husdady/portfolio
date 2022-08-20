// React
import React from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { FlagType, FlagProps } from '@interfaces/Languages.interfaces'

const flags: FlagType[] = require('@data/flags.json')

export default function Languages() {
  const { lang, setLang } = useLanguages()

  return (
    <section id="languages">
      <ul className="d-flex justify-content-center mt-2 mb-0 p-0">
        {flags.map((flag: FlagType) => {
          return (
            <Flag
              key={flag.id}
              url={flag.imgSrc}
              alt={flag.imgAlt}
              title={flag.country}
              currentLanguage={lang}
              language={flag.language}
              onChangeLanguage={setLang}
            />
          )
        })}
      </ul>
    </section>
  )
}

export const Flag = React.memo<FlagProps>(
  ({
    alt,
    url,
    title,
    language,
    currentLanguage,
    onChangeLanguage
  }: FlagProps) => {
    const isActive = currentLanguage.toLowerCase() === language

    return (
      <li
        role="button"
        className={`list-unstyled mx-1 ${
          isActive ? 'opacity-100' : 'opacity-25'
        }`}
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
)
