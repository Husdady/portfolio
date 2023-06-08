// Librarys
import { memo, useCallback } from 'react'
import { TypeAnimation } from 'react-type-animation'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { HashtagType } from './interfaces'

// Data
import hashtags from '@assets/data/hashtags.json'
import { EN, ES } from '@hooks/useLanguages/constants'

function Hashtags() {
  const { isESLang } = useLanguages()

  // Callback for create abilities
  const createAbilities = useCallback((language: string) => {
    return hashtags.reduce((acc: (string | number)[], hashtag: HashtagType) => {
      return acc.concat(hashtag.name[language as keyof typeof hashtag.name], hashtag.delay)
    }, [])
  }, [])

  return (
    <>
      {isESLang && (
        <div>
          <TypeAnimation speed={5} wrapper="h5" repeat={Infinity} sequence={createAbilities(ES)} />
        </div>
      )}

      {!isESLang && (
        <div>
          <TypeAnimation speed={5} wrapper="h5" repeat={Infinity} sequence={createAbilities(EN)} />
        </div>
      )}
    </>
  )
}

export default memo(Hashtags)
