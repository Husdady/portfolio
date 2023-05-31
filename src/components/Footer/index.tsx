// Librarys
import { memo } from 'react'

// Components
import MultiLangText from '@components/MultiLangText'

// Constants
import { style } from './constants'
import { isTablet } from '@assets/data/constants'

function Footer() {
  return (
    <footer
      style={isTablet ? style : undefined}
      className="d-table bg-opacity col-12 mt-md-2 mt-xl-3 py-3"
    >
      <span className="text-center d-block default-text">
        Copyright © 2019 <MultiLangText dictionaryKey="footer-d9s02" /> Husdady
      </span>
    </footer>
  )
}

export default memo(Footer)
