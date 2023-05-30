// React
import React from 'react'

// Librarys
import { ProgressBar } from 'react-bootstrap'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { SkillProps } from '@interfaces/Skill.interface'

const Skill: React.FC<SkillProps> = ({
  level,
  height,
  barColor
}: SkillProps) => {
  const refProgressBar = React.useRef<HTMLDivElement | null>(null)
  const [defaultLevel, setDefaultLevel] = React.useState<number>(0)

  useMounted(() => {
    if (level) {
      setDefaultLevel(level)
    }

    if (refProgressBar.current !== null) {
      const inner = refProgressBar.current.querySelector('.progress-bar')

      if (inner) {
        refProgressBar.current.style.backgroundColor = barColor
      }
    }
  }, [])

  const barStyle: React.CSSProperties = {
    height: height,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255, .75)'
  }

  return (
    <ProgressBar
      ref={refProgressBar}
      style={barStyle}
      now={defaultLevel}
      variant={barColor}
      label={defaultLevel + '%'}
      className="mb-3"
    />
  )
}

export default Skill
