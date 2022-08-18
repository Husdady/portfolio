// Components
import { Button } from '@common'
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
import { Row, Col, Image, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import {
  ProyectType,
  ProyectsTabProps,
  ProyectNameProps
} from '@interfaces/Tabs.interface'

// JSON
import allMainProyects from '@assets/data/proyects/all-main-proyects.json'
import allPersonalProyects from '@assets/data/proyects/all-personal-proyects.json'
import useLanguages from '@hooks/useLanguages'

const styleImgForAppWeb: React.CSSProperties = {
  objectFit: 'cover'
}

const styleImgForAppMobile: React.CSSProperties = {
  objectFit: 'contain'
}

// Renderizar url de un producto
const renderProyectUrl = (proyect: ProyectType) => {
  if (!proyect.url) return null

  function goToProyect() {
    return window.open(proyect.url, '_blank')
  }

  return (
    <Button
      icon="globe"
      title={<MultiLangText dictionaryKey="proyects-xbas16" />}
      className="proyect-url position-absolute rounded py-2 text-center text-decoration-none"
      onClick={goToProyect}
    />
  )
}

const renderProyects = (proyects: ProyectType[]) => {
  const mq: boolean = window.innerWidth <= 600

  return proyects.map((proyect: ProyectType) => (
    <Col key={proyect.id} className="proyect px-2">
      {/* Proyect Image */}
      <section className="proyect-img position-relative w-100">
        <div className="position-absolute top-0 start-0 bottom-0 end-0 wrap" />
        {renderProyectUrl(proyect)}

        <Image
          fluid
          src={proyect.proyectImg}
          alt={`proyect-${proyect.id}`}
          className="position-absolute top-0 start-0 bottom-0 w-100 h-100"
          style={
            mq || proyect.type === 'app_mobile'
              ? styleImgForAppMobile
              : styleImgForAppWeb
          }
        />
      </section>

      {/* Proyect Name */}
      <section
        style={{ borderBottom: '1px solid var(--bs-gray-700)' }}
        className="d-flex justify-content-center text-muted pt-3 border-bottom-2 w-100 pb-2"
      >
        <FontAwesomeIcon icon="file" className="me-2" />
        <ProyectName value={proyect.name} />
      </section>
    </Col>
  ))
}

const mainProyects = renderProyects(allMainProyects)
const personalProyects = renderProyects(allPersonalProyects)

export default function Proyects({ defaultResponsiveGrids }: ProyectsTabProps) {
  return (
    <Container fluid className="text-white-50" as="article">
      <h2 className="text-danger">
        <MultiLangText dictionaryKey="proyects-xaks20" />
      </h2>

      {/* Main proyects */}
      <h4 className="my-4 text-decoration-underline">
        <MultiLangText dictionaryKey="proyects-f618is" />:
      </h4>
      <Row as="section" className="proyects" {...defaultResponsiveGrids}>
        {mainProyects}
      </Row>

      {/* Personal proyects */}
      <h4 className="my-4 text-decoration-underline">
        <MultiLangText dictionaryKey="proyects-yc712t" />:
      </h4>
      <Row as="section" className="proyects" {...defaultResponsiveGrids}>
        {personalProyects}
      </Row>
    </Container>
  )
}

Proyects.defaultProps = {
  defaultResponsiveGrids: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
    xxl: 4
  }
}

// <------------------------ Extra Components ------------------------>
function ProyectName({ value }: ProyectNameProps) {
  const { lang } = useLanguages()

  const proyectName =
    typeof value === 'string' ? value : value[lang as keyof typeof value]

  return <h6 className="mb-0 text-center">{proyectName}</h6>
}
