// Librarys
import { memo, Suspense } from 'react'

// Components
import MultiLangText from '@components/MultiLangText'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Utils
import lazy from '@utils/lazy'

// Constants
import { CV_LINK_ES, CV_LINK_EN } from '@assets/data/constants'

// Lazy components
const Button = lazy(() => import('@components/Button'))

function CVLink() {
  const { isESLang } = useLanguages()

  return (
    <a target="_blank" href={isESLang ? CV_LINK_ES : CV_LINK_EN} rel="noreferrer">
      <Suspense fallback={null}>
        <Button
          icon="file-download"
          title={<MultiLangText dictionaryKey="contact-as0125" />}
          className="px-4 rounded bg-danger text-white h-100"
        />
      </Suspense>
    </a>
  )
}

export default memo(CVLink)
