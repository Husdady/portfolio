/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import React from 'react'

// Components
import MultiLangText from '@components/MultiLangText'

// Interfaces
import { ProyectLinkProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Lazy components
const Button = lazy(() => import('@components/Button'))

const ProyectLink: React.FC<ProyectLinkProps> = ({ url }: ProyectLinkProps) => {
  // Callback for go to the proyect
  const goToProyect = React.useCallback(() => {
    window.open(url, '_blank')
  }, [])

  if (typeof url !== 'string') return null

  return (
    <React.Suspense fallback={null}>
      <Button
        icon={<FontAwesomeIcon icon="globe" />}
        title={<MultiLangText dictionaryKey="proyects-xbas16" />}
        className="proyect-url position-absolute rounded py-2 text-center text-decoration-none"
        onClick={goToProyect}
      />
    </React.Suspense>
  )
}

export default React.memo(ProyectLink)
