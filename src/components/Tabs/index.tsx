// Librarys
import { Suspense } from 'react'
import { Nav } from 'react-bootstrap'

// Hooks
import useTabs from './useTabs'

// Utils
import lazy from '@utils/lazy'

// Constants
import { PROYECTS_TAB } from './constants'

// Lazy components
const TabsList = lazy(() => import('./TabsList'))

export default function Tabs() {
  const { activeTab, currentTab, setActiveTab } = useTabs()

  return (
    <section className="tm-information bg-opacity inactive-tab">
      <Nav as="ul" variant="tabs" defaultActiveKey="skills" className="border-opacity">
        <Suspense fallback={null}>
          <TabsList updateTab={setActiveTab} />
        </Suspense>
      </Nav>

      <section className={activeTab !== PROYECTS_TAB ? 'px-3 pt-4 pb-3' : undefined}>
        {currentTab}
      </section>
    </section>
  )
}
