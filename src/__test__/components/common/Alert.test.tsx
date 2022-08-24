// Components
import { Alert } from '@common'

// Librarys
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

test('Alert component with only prop title', () => {
  const component = render(<Alert title="Warning!!" />)

  component.debug()
})
