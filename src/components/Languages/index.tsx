// Librarys
import { Suspense } from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { FlagType } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// JSON
import flags from '@assets/data/flags.json'

// Lazy components
const Flag = lazy(() => import('./Flag'))

export default function Languages() {
  const { lang, setLang } = useLanguages()

  return (
    <section id="languages">
      <ul className="d-flex justify-content-center mt-2 mb-0 p-0">
        {flags.map((flag: FlagType) => {
          return (
            <Suspense key={flag.id} fallback={null}>
              <Flag
                url={flag.imgSrc}
                alt={flag.imgAlt}
                title={flag.country}
                currentLanguage={lang}
                language={flag.language}
                onChangeLanguage={setLang}
              />
            </Suspense>
          )
        })}
      </ul>
    </section>
  )
}
