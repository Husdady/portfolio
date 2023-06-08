// Librarys
import { memo, Suspense } from 'react'
import { Container } from 'react-bootstrap'

// Components
import MultiLangText from '@components/MultiLangText'

// Utils
import lazy from '@utils/lazy'

// Lazy components
const CVLink = lazy(() => import('./CVLink'))

function DownloadCV() {
  return (
    <Container
      fluid
      as="section"
      className="d-flex align-items-center justify-content-between px-0 px-md-3 px-lg-3 flex-wrap"
    >
      <h2 className="text-danger mb-0">
        <MultiLangText dictionaryKey="contact-yc712t" />:
      </h2>

      <Suspense fallback={null}>
        <CVLink />
      </Suspense>
    </Container>
  )
}

export default memo(DownloadCV)
