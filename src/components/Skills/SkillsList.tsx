// Librarys
import React from 'react'

// Interfaces
import { SkillListProps } from './interfaces'

export const skillStyle = { color: '#dadada' }

const SkillsList: React.FC<SkillListProps> = ({ skills }: SkillListProps) => {
  if (skills.length === 0) return null

  return (
    <ul className="skill-list list-unstyled mb-0 d-flex flex-wrap">
      {skills.map((skill, i) => (
        <li key={i}>
          <h6 className="mb-1" style={skillStyle}>
            {skill}
            {i !== skills.length - 1 ? ',' : null}&nbsp;
          </h6>
        </li>
      ))}
    </ul>
  )
}

export default React.memo(SkillsList)
