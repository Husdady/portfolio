// Librarys
import React from 'react'

// Librarys
import { Col, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { ProyectType, ProyectsListProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Data
import { proyectImgStyle } from './constants'

// Lazy components
const ProyectLink = lazy(() => import('./ProyectLink'))
const ProyectName = lazy(() => import('./ProyectName'))

const ProyectsList: React.FC<ProyectsListProps> = ({ grids, proyects }: ProyectsListProps) => {
  return (
    <section className="proyects-list">
      <Row as="ul" className="proyects list-unstyled mb-0 pb-4" {...grids}>
        {proyects.map((proyect: ProyectType) => (
          <li key={proyect.id} className="proyect">
            <Col as="article">
              <figure className="proyect-img position-relative w-100 mb-0">
                <div className="proyect-backdrop position-absolute top-0 start-0 bottom-0 end-0 wrap" />

                <React.Suspense fallback={null}>
                  <ProyectLink url={proyect.url} />
                </React.Suspense>

                <Image
                  fluid
                  style={proyectImgStyle}
                  src={proyect.proyectImg}
                  alt={`proyect-${proyect.id}`}
                  className="position-absolute top-0 start-0 bottom-0 w-100 h-100"
                />
              </figure>

              <div className="proyect-title d-flex justify-content-center w-100 overflow-hidden">
                <FontAwesomeIcon icon="file-code" className="me-2" />

                <React.Suspense fallback={null}>
                  <ProyectName value={proyect.name} />
                </React.Suspense>
              </div>
            </Col>
          </li>
        ))}
      </Row>
    </section>
  )
}

export default React.memo(ProyectsList)
