// React
import React from 'react'

// Components
import MultiLangText from './MultiLangText'

const style: React.CSSProperties = {
  borderTop: 1,
  borderTopColor: '#dc3545',
  borderStyle: 'solid'
}

export default function Footer() {
  const isTable: boolean = window.innerWidth <= 768
  const footerStyle: React.CSSProperties = isTable ? style : {}

  return (
    <footer
      style={footerStyle}
      className="d-table bg-opacity col-12 mt-md-2 mt-xl-3 py-3"
    >
      <span className="text-center d-block default-text">
        Copyright © 2019 <MultiLangText dictionaryKey="footer-d9s02" /> Husdady
      </span>
    </footer>
  )
}
