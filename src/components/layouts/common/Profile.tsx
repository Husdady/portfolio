// React
import React from 'react'

// Components
import { HusdadyPhoto } from '@common'
import Languages from '@layouts/common/Languages'
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { HashtagType } from '@interfaces/Profile.interface'

// JSON
import hashtags from '@data/hashtags.json'
import useLanguages from '@hooks/useLanguages'

export default function Profile() {
  return (
    <section className="tm-profile bg-opacity p-4 p-md-5 p-xl-4">
      <HusdadyPhoto />
      <AboutMe />
    </section>
  )
}

const Hashtags = () => {
  const { lang } = useLanguages()

  const abilities = React.useCallback((language: string) => {
    return hashtags.reduce((acc: (string | number)[], hashtag: HashtagType) => {
      return acc.concat(
        hashtag.name[language as keyof typeof hashtag.name],
        hashtag.delay
      )
    }, [])
  }, [])

  return (
    <TypeAnimation
      speed={5}
      repeat={Infinity}
      sequence={abilities(lang)}
      wrapper="h5"
    />
  )
}

const AboutMe = () => {
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
        <TypeAnimation
          speed={5}
          wrapper="h5"
          cursor={false}
          sequence={['', 1000, '@Husdady']}
        />

        <Hashtags />
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
