// Librarys
import { Suspense } from 'react'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Tabs = lazy(() => import('@components/Tabs'))
const Footer = lazy(() => import('@components/Footer'))
const Profile = lazy(() => import('@components/Profile'))

export default function Portfolio() {
  return (
    <main className="tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2">
      <Suspense fallback={null}>
        <Profile />
      </Suspense>

      <Suspense fallback={null}>
        <Tabs />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  )
}
