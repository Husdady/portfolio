// Librarys
import { Fragment, Suspense } from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library, IconPack } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Components
import Loading from '@components/Loading'
import AppTitle from '@components/AppTitle'

// Utils
import lazy from '@utils/lazy'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/global.css'
import '@styles/loading.css'
import '@styles/page-not-found.css'
import '@styles/profile.css'
import '@styles/tabs/contact.css'
import '@styles/tabs/index.css'
import '@styles/tabs/proyects.css'

library.add(far as IconPack, fas as IconPack, fab as IconPack)

// Lazy Components
const Portfolio = lazy(() => import('@components/Portfolio'))
const PageNotFound = lazy(() => import('@components/PageNotFound'))

export default function App() {
  return (
    <Fragment>
      <AppTitle />

      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route path="/" exact component={Portfolio} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  )
}
