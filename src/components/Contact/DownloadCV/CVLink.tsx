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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Lazy components
const Button = lazy(() => import('@components/Button'))

function CVLink() {
  const { isESLang } = useLanguages()

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="text-white"
      href={isESLang ? CV_LINK_ES : CV_LINK_EN}
    >
      <Suspense fallback={null}>
        <Button
          icon={<FontAwesomeIcon icon="file-download" />}
          title={<MultiLangText dictionaryKey="contact-as0125" />}
          className="download-cv px-4 rounded bg-danger text-white h-100"
        />
      </Suspense>
    </a>
  )
}

export default memo(CVLink)
