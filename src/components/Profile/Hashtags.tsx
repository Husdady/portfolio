// Librarys
import { memo, useCallback, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { HashtagType } from './interfaces'

// JSON
import hashtags from '@assets/data/hashtags.json'
import useMounted from '@hooks/useMounted'

function Hashtags() {
  const { lang, isESLang } = useLanguages()

  // Callback for create abilities
  const createAbilities = useCallback((language: string) => {
    return hashtags.reduce((acc: (string | number)[], hashtag: HashtagType) => {
      return acc.concat(hashtag.name[language as keyof typeof hashtag.name], hashtag.delay)
    }, [])
  }, [])

  if (lang === 'es') {
    console.log(lang)
    return (
      <TypeAnimation speed={5} wrapper="h5" repeat={Infinity} sequence={createAbilities(lang)} />
    )
  }

  return <TypeAnimation speed={5} wrapper="h5" repeat={Infinity} sequence={createAbilities(lang)} />
}

export default memo(Hashtags)
