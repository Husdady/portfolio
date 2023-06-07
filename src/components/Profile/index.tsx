// Librarys
import { Suspense } from 'react'

// Utils
import lazy from '@utils/lazy'

// Lazy components
const AboutMe = lazy(() => import('./AboutMe'))
const HusdadyPhoto = lazy(() => import('@components/HusdadyPhoto'))

export default function Profile() {
  return (
    <section className="tm-profile bg-opacity p-4 p-md-5 p-xl-4">
      <Suspense fallback={<div className="rounded-circle tm-profile-picture mx-auto"></div>}>
        <HusdadyPhoto />
      </Suspense>

      <Suspense fallback={null}>
        <AboutMe />
      </Suspense>
    </section>
  )
}
