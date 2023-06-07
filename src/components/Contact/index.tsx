// Librarys
import { Fragment, Suspense } from 'react'

// Components
import Loading from '@components/Loading'

// Utils
import lazy from '@utils/lazy'

// Lazy components
const ContactForm = lazy(() => import('./Form'))
const DownloadCV = lazy(() => import('./DownloadCV'))
const SocialNetworks = lazy(() => import('./SocialNetworks'))

export const loadngStyle = { height: '450px' }

export default function Contact() {
  return (
    <Fragment>
      <Suspense fallback={<Loading style={loadngStyle} />}>
        <ContactForm />
      </Suspense>

      <Suspense fallback={null}>
        <SocialNetworks />
      </Suspense>

      <Suspense fallback={null}>
        <DownloadCV />
      </Suspense>
    </Fragment>
  )
}
