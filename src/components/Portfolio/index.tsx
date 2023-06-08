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
    <main className="tm-container d-flex flex-wrap justify-content-between pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2 p-sm-4 p-2">
      <Suspense
        fallback={<section style={{ minHeight: 1000 }} className="tm-profile bg-opacity"></section>}
      >
        <Profile />
      </Suspense>

      <Suspense
        fallback={
          <section style={{ minHeight: 1000 }} className="tm-information bg-opacity"></section>
        }
      >
        <Tabs />
      </Suspense>

      <Suspense
        fallback={<section style={{ height: 60 }} className="mt-4 w-100 bg-opacity"></section>}
      >
        <Footer />
      </Suspense>
    </main>
  )
}
