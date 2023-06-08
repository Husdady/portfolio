// Librarys
import React from 'react'

// Components
import Separator from './Separator'
import ProyectsLoader from './ProyectsLoader'
import MultiLangText from '@components/MultiLangText'

// Interfaces
import { ProyectsProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Constants
import { Props } from './constants'

// Data
import mainProyects from '@assets/data/main-proyects.json'
import personalProyects from '@assets/data/personal-proyects.json'

// Lazy components
const ProyectsList = lazy(() => import('./ProyectsList'))

export default function Proyects({
  defaultResponsiveGrids = Props.defaultResponsiveGrids
}: ProyectsProps) {
  return (
    <React.Fragment>
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-danger">
          <MultiLangText dictionaryKey="proyects-xaks20" />
        </h2>

        <h4 className="mt-4 text-info">
          <MultiLangText dictionaryKey="proyects-f618is" />:
        </h4>

        <React.Suspense fallback={null}>
          <Separator height="2px" color="var(--bs-info)" withoutMarginTop />
        </React.Suspense>

        <React.Suspense fallback={<ProyectsLoader />}>
          <ProyectsList proyects={mainProyects} grids={defaultResponsiveGrids} />
        </React.Suspense>
      </div>

      <React.Suspense fallback={null}>
        <Separator className="proyects-separator" />
      </React.Suspense>

      <div className="px-4 pb-4">
        <h4 className="text-info">
          <MultiLangText dictionaryKey="proyects-yc712t" />:
        </h4>

        <React.Suspense fallback={null}>
          <Separator height="2px" color="var(--bs-info)" withoutMarginTop />
        </React.Suspense>

        <React.Suspense fallback={<ProyectsLoader />}>
          <ProyectsList proyects={personalProyects} grids={defaultResponsiveGrids} />
        </React.Suspense>
      </div>
    </React.Fragment>
  )
}
