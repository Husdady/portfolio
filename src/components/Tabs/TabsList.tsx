// React
import { memo, Fragment } from 'react'

// Components
import MultiLangText from '@components/MultiLangText'

// Librarys
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { TabType, TabListProps } from './interfaces'

// JSON
import tabs from '@assets/data/tabs.json'

function TabList({ updateTab }: TabListProps) {
  return (
    <Fragment>
      {(tabs as TabType[]).map((tab: TabType, i: number) => (
        <Nav.Item key={i} as="li" role="button" onClick={() => updateTab(tab.name)}>
          <Nav.Link eventKey={tab.name} className="bg-transparent py-2 px-4 rounded-0 border-0">
            <FontAwesomeIcon icon={tab.icon} className="me-2" />

            <span>
              <MultiLangText dictionaryKey={tab.dictionaryKey} />
            </span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Fragment>
  )
}

export default memo(TabList)
