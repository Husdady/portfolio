// React
import App from '../App'

// Librarys
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

test('Render App Loading', () => {
  const component = render(<App />)

  const tag = component.container.getElementsByTagName('main')
  const classNames = {
    main: 'tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2',
    loadingContainer:
      'w-100 h-100vh d-flex align-items-center justify-content-center',
    skChase: 'sk-chase',
    dot: 'sk-chase-dot'
  }

  const main = tag[0] // Get main element
  const loadingContainer = main.nextSibling as HTMLDivElement
  const skChase = loadingContainer.getElementsByClassName('sk-chase')[0]
  const dots = skChase.getElementsByClassName('sk-chase-dot')

  component.debug() // Debug component

  expect(main).toHaveClass(classNames.main) // Check main tag classes
  expect(main).toHaveStyle('display: none;') // Check main tag styles
  expect(loadingContainer).toHaveClass(classNames.loadingContainer) // Check loading classes
  expect(skChase).toHaveClass(classNames.skChase) // Check classes sk-chase
  expect(skChase.childElementCount).toEqual(6) // Check total childs of sk-chase element

  for (let i = 0; i < dots.length; i++) {
    expect(dots[i]).toHaveClass(classNames.dot) // Check dot classes
  }
})
