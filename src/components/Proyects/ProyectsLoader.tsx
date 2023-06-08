// Librarys
import React from 'react'

// Librarys
import { Row } from 'react-bootstrap'

// Utils
import createList from '@utils/createList'

// Constants
import { Props, MAX_PROYECTS_LOADER } from './constants'

function ProyectsLoader() {
  return (
    <section className="proyects-list loader">
      <Row
        as="ul"
        className="proyects list-unstyled mb-0 pb-4 row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1"
        {...Props.defaultResponsiveGrids}
      >
        {createList(MAX_PROYECTS_LOADER).map((i) => (
          <li key={i} className="proyect px-2">
            <article className="col"></article>
          </li>
        ))}
      </Row>
    </section>
  )
}

export default React.memo(ProyectsLoader)
