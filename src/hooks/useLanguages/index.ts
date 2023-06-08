/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useMemo, useCallback } from 'react'
import useLocalStorage from '@hooks/useLocalStorage'

// Interfaces
import { LanguageType } from './interfaces'

// Utils
import parseLanguage from '@utils/parseLanguage'

// Data
import { LANG } from '@assets/data/constants'
import { ENGLIGH_PAGE_TITLE, SPANISH_PAGE_TITLE } from './constants'
import languages from '@assets/data/languages.json'

export default function useLanguages() {
  const [lang, setLang] = useLocalStorage(LANG, parseLanguage(navigator.language))

  // Spanish language actived
  const isESLang = useMemo(() => lang === 'es', [lang])

  // Get current language in lowercase
  const currentLanguage = useMemo(() => lang.toLowerCase(), [lang])

  // Change the current language by the other
  const onChangeLanguage = useCallback(
    (newLang: string) => {
      setLang(newLang)
      document.title = isESLang ? SPANISH_PAGE_TITLE : ENGLIGH_PAGE_TITLE
    },
    [isESLang]
  )

  // Get language actived
  const language = useMemo(() => {
    return languages.find((item: LanguageType) => item.language === currentLanguage)
  }, [currentLanguage])

  return {
    setLang: setLang,
    isESLang: isESLang,
    lang: currentLanguage,
    onChangeLanguage: onChangeLanguage,
    dictionary: typeof language !== 'undefined' ? language.dictionary : {}
  }
}
