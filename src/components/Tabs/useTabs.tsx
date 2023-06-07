// Librarys
import React from 'react'

// Components
import Skills from '@components/Skills'
import Gallery from '@components/Gallery'
import Contact from '@components/Contact'
import Proyects from '@components/Proyects'

// Interfaces
import { PageTabsType } from './interfaces'

// Constants
import { SKILLS_TAB } from './constants'

const pageTabs: PageTabsType = {
  skills: <Skills />,
  proyects: <Proyects />,
  galery: <Gallery />,
  contact: <Contact />
}

/**
 * Hook for implements the logic in the Tabs component
 */
export default function useTabs() {
  const [activeTab, setActiveTab] = React.useState<string>(SKILLS_TAB)

  // Get current tab
  const currentTab: React.ReactNode = React.useMemo(() => {
    return pageTabs[activeTab as keyof typeof pageTabs]
  }, [activeTab])

  return {
    activeTab: activeTab,
    currentTab: currentTab,
    setActiveTab: setActiveTab
  }
}
