// Librarys
import { memo, useCallback } from 'react'
import { TypeAnimation } from 'react-type-animation'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { HashtagType } from './interfaces'

// JSON
import hashtags from '@assets/data/hashtags.json'

function Hashtags() {
  const { lang } = useLanguages()

  // Callback for create abilities
  const createAbilities = useCallback((language: string) => {
    return hashtags.reduce((acc: (string | number)[], hashtag: HashtagType) => {
      return acc.concat(hashtag.name[language as keyof typeof hashtag.name], hashtag.delay)
    }, [])
  }, [])

  return <TypeAnimation speed={5} repeat={Infinity} sequence={createAbilities(lang)} wrapper="h5" />
}

export default memo(Hashtags)
