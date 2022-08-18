// React
import { Suspense, lazy } from 'react'

// Components
import Loading from '@layouts/common/Loading'

// Librarys
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library, IconPack } from '@fortawesome/fontawesome-svg-core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/global.css'
import '@styles/loading.css'
import '@styles/page-not-found/index.css'
import '@styles/profile/index.css'
import '@styles/tabs/contact.css'
import '@styles/tabs/index.css'
import '@styles/tabs/proyects.css'

library.add(far as IconPack, fas as IconPack, fab as IconPack)

// Lazy Components
const Tabs = lazy(() => import('@layouts/tabs'))
const Footer = lazy(() => import('@layouts/common/Footer'))
const Profile = lazy(() => import('@layouts/common/Profile'))
const PageNotFound = lazy(() => import('@layouts/common/PageNotFound'))

function Portfolio() {
  return (
    <main className="tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2">
      <Profile />
      <Tabs />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/" exact component={Portfolio} />
          <Route path="/pagina-no-encontrada" component={PageNotFound} />
          <Redirect to="/pagina-no-encontrada" />
        </Switch>
      </Router>
    </Suspense>
  )
}
