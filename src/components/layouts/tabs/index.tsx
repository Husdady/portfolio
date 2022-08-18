// React
import React from 'react'

// Components
import Skills from './Tab.Skills'
import Proyects from './Tab.Proyects'
import Gallery from './Tab.Gallery'
import Contact from './Tab.Contact'
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { TabType, PageTabsType } from '@interfaces/Tabs.interface'

// JSON
const tabs: TabType[] = require('@assets/data/common/tabs.json')

const pageTabs: PageTabsType = {
  skills: <Skills />,
  proyects: <Proyects />,
  galery: <Gallery />,
  contact: <Contact />
}

export { Skills, Proyects, Gallery, Contact }
export default function Tabs() {
  const [activeTab, setActiveTab] = React.useState<string>('skills')

  const currentTab: React.ReactNode = React.useMemo(() => {
    return pageTabs[activeTab as keyof typeof pageTabs]
  }, [activeTab])

  // Renderizar tabs
  const TabList = React.useCallback(() => {
    return (
      <React.Fragment>
        {tabs.map((tab: TabType, i: number) => (
          <Nav.Item key={i} onClick={() => setActiveTab(tab.name)}>
            <Nav.Link
              eventKey={tab.name}
              className="bg-transparent py-2 px-4 rounded-0 border-0"
            >
              <FontAwesomeIcon icon={tab.icon} className="me-2" />
              <span>
                <MultiLangText dictionaryKey={tab.dictionaryKey} />
              </span>
            </Nav.Link>
          </Nav.Item>
        ))}
      </React.Fragment>
    )
  }, [])

  return (
    <section className="tm-information bg-opacity inactive-tab">
      <Nav variant="tabs" defaultActiveKey="skills" className="border-opacity">
        <TabList />
      </Nav>

      <section className="px-3 pt-4 pb-3 pb-xl-5">{currentTab}</section>
    </section>
  )
}
