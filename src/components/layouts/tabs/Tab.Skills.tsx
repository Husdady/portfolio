// React
import React from 'react'

// Components
import Skill from '@layouts/common/Skill'
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
import { Container } from 'react-bootstrap'

// Interfaces
import { SkillType } from '@interfaces/Tabs.interface'

const allMainTechnologies: SkillType[] = require('@data/all-main-technologies.json')
const allBasicTechnologies: SkillType[] = require('@data/all-basic-technologies.json')

const renderSkills = (skills: SkillType[]) => {
  return skills.map((skill: SkillType, i: number) => (
    <React.Fragment key={i}>
      <h6 className="mb-1">{skill.name}</h6>
      <Skill level={skill.level} height="2.75em" barColor="danger" />
    </React.Fragment>
  ))
}

const mainSkills = renderSkills(allMainTechnologies)
const basicSkills = renderSkills(allBasicTechnologies)

export default function Skills() {
  const mq: boolean = window.innerWidth <= 900

  const style: React.CSSProperties = {
    maxHeight: mq ? 'initial' : 300,
    overflowY: mq ? 'hidden' : 'auto'
  }

  return (
    <div className="text-white-50">
      <h2 className="text-danger">
        <MultiLangText dictionaryKey="skills-xaks20" />
      </h2>

      {/* Main Techonologies */}
      <h4 className="mt-3 mb-2 ms-xl-3">
        <u>
          <MultiLangText dictionaryKey="skills-f618is" />:
        </u>
      </h4>
      <Container
        as="section"
        style={style}
        className="py-3 px-1 px-sm-0 px-md-0 px-lg-0 px-xl-5"
      >
        {mainSkills}
      </Container>

      {/* Basic Techonologies */}
      <h4 className="mt-3 mb-2 ms-xl-3">
        <u>
          <MultiLangText dictionaryKey="skills-yc712t" />:
        </u>
      </h4>
      <Container
        as="section"
        style={style}
        className="py-3 px-1 px-md-0 px-sm-0 px-lg-0 px-xl-5"
      >
        {basicSkills}
      </Container>
    </div>
  )
}
