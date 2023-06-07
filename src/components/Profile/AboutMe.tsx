// Librarys
import { memo, Suspense } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import MultiLangText from '@components/MultiLangText'

// Utils
import lazy from '@utils/lazy'

// Data
import { fallbackStyle } from '@components/Languages'

// Lazy components
const Hashtags = lazy(() => import('./Hashtags'))
const Languages = lazy(() => import('@components/Languages'))

function AboutMe() {
  return (
    <>
      <Suspense fallback={<div style={fallbackStyle}></div>}>
        <Languages />
      </Suspense>

      <h3 className="tm-profile-title mb-0 text-center text-danger">Imanol Enrique</h3>

      <div className="mb-3 text-muted text-center">
        <FontAwesomeIcon icon="map-marked-alt" className="me-1" />
        <span>Piura, Perú</span>
      </div>

      <div className="mb-1 d-flex flex-wrap justify-content-between text-muted">
        <TypeAnimation speed={5} wrapper="h5" cursor={false} sequence={['', 1000, '@Husdady']} />

        <Suspense fallback={null}>
          <Hashtags />
        </Suspense>
      </div>

      <span className="tm-profile-description">
        <MultiLangText dictionaryKey="profile-dajs10" />
        &nbsp;<span className="emoticon">&#9996;</span>,{' '}
        <MultiLangText dictionaryKey="profile-pa34sj" />{' '}
        <MultiLangText dictionaryKey="profile-ald12s" /> &#128584;,{' '}
        <MultiLangText dictionaryKey="profile-ansoc9" />{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learndigital.withgoogle.com/activate/course/web-development-I"
        >
          <MultiLangText dictionaryKey="profile-xmaks8" />
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://learndigital.withgoogle.com/activate/course/web-development-I"
        >
          <MultiLangText dictionaryKey="profile-xmaks9" />
        </a>
        .
      </span>

      <br />
      <br />

      <span>
        <MultiLangText dictionaryKey="profile-fa09s1" /> &#128523;.{' '}
        <MultiLangText dictionaryKey="profile-canjs1" /> &#128154;
      </span>

      <br />
      <br />

      <FontAwesomeIcon icon="quote-left" size="lg" className="quote" />

      <blockquote className="text-center">
        <i>
          <MultiLangText dictionaryKey="profile-as4pc7" />
        </i>
      </blockquote>

      <div className="text-end">
        <FontAwesomeIcon icon="quote-right" size="lg" className="quote" />
      </div>

      <cite className="d-block mt-3 text-end">- Brian Kernigan -</cite>
    </>
  )
}

export default memo(AboutMe)
