// React
import React from 'react'

// Components
import { HusdadyPhoto } from '@common'
import Languages from '@layouts/common/Languages'
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
// import Typist from 'react-typist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { HashtagType } from '@interfaces/Profile.interface'

// JSON
import hashtags from '@assets/data/common/hashtags.json'

export default function Profile() {
  return (
    <section className="tm-profile bg-opacity p-4 p-md-5 p-xl-4">
      <HusdadyPhoto />
      <AboutMe />
    </section>
  )
}

const AboutMe = () => {
  const HashTags = React.useCallback(() => {
    return (
      <React.Fragment>
        {hashtags.map((hash: HashtagType, i, totalHashTags: HashtagType[]) => {
          // const count = i !== totalHashTags.length - 1 ? hash.name.length : 0

          return (
            <article key={i}>
              <h5>{hash.name}</h5>
              {/* <Typist.Backspace count={count} delay={hash.delay} /> */}
            </article>
          )
        })}
      </React.Fragment>
    )
  }, [])

  return (
    <React.Fragment>
      <Languages />

      <h3 className="tm-profile-title mb-0 text-center text-danger">
        Imanol Enrique
      </h3>

      <div className="mb-3 text-muted text-center">
        <FontAwesomeIcon icon="map-marked-alt" className="me-1" />
        <span>Piura, Perú</span>
      </div>

      <div className="mb-1 d-flex flex-wrap justify-content-between text-muted">
        {/* <Typist className="d-flex" startDelay={500}>
          <h5>@Husdady</h5>
        </Typist>

        <Typist className="d-flex" startDelay={2000} avgTypingDelay={100}>
          {renderHashTags()}
          
        </Typist> */}
        <HashTags />
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
    </React.Fragment>
  )
}
