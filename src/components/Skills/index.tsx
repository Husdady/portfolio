// Components
import MultiLangText from '@components/MultiLangText'

// Librarys
import { Container } from 'react-bootstrap'

// Utils
import lazy from '@utils/lazy'

// Data
import programsUsed from '@assets/data/programs-used.json'
import mainTechnologies from '@assets/data/main-technologies.json'
import methodologiesUsed from '@assets/data/methodologies-used.json'
import basicTechnologies from '@assets/data/basic-technologies.json'

// Lazy components
const SkillsList = lazy(() => import('./SkillsList'))

export default function Skills() {
  return (
    <div className="text-white-50">
      <h2 className="text-danger">
        <MultiLangText dictionaryKey="skills-xaks20" />
      </h2>

      <h5 className="mt-3 mb-4 ms-xl-3 text-decoration-underline text-warning">
        <MultiLangText dictionaryKey="skills-f618is" />:
      </h5>

      <Container as="section" className="pb-2 px-1 px-sm-0 px-md-0 px-lg-0 px-xl-5">
        <SkillsList skills={mainTechnologies} />
      </Container>

      <h5 className="mt-3 mb-4 ms-xl-3 text-decoration-underline text-warning">
        <MultiLangText dictionaryKey="skills-yc712t" />:
      </h5>

      <Container as="section" className="px-1 px-md-0 px-sm-0 px-lg-0 px-xl-5">
        <SkillsList skills={basicTechnologies} />
      </Container>

      <h5 className="mt-3 mb-4 ms-xl-3 text-decoration-underline text-warning">
        <MultiLangText dictionaryKey="skills-yc712h" />:
      </h5>

      <Container as="section" className="px-1 px-md-0 px-sm-0 px-lg-0 px-xl-5">
        <SkillsList skills={programsUsed} />
      </Container>

      <h5 className="mt-3 mb-4 ms-xl-3 text-decoration-underline text-warning">
        <MultiLangText dictionaryKey="skills-yc712z" />:
      </h5>

      <Container as="section" className="px-1 px-md-0 px-sm-0 px-lg-0 px-xl-5 text-warning">
        <SkillsList skills={methodologiesUsed} />
      </Container>
    </div>
  )
}
