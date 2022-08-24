// React
import App from '../App'

// Librarys
import '@testing-library/jest-dom'
import { prettyDOM } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'

test('render app loading', () => {
  const component = render(<App />)

  const tag = component.container.getElementsByTagName('main')
  const classNames = {
    main: 'tm-container d-flex flex-wrap justify-content-between  pt-md-3 pt-xl-5 pb-md-3 px-xl-5 px-lg-3 px-md-2',
    loadingContainer:
      'w-100 h-100vh d-flex align-items-center justify-content-center'
  }

  const main = tag[0] // Get main element
  // const loadingContainer = main.nextSibling

  // if (loadingContainer !== null) {
  //   const skChase: HTMLDivElement = loadingContainer.getElementsByClassName('sk-chase')
  // }

  // eslint-disable-next-line no-console
  console.log('[prettyMain]', prettyDOM(main))
  component.debug() // Debug component

  expect(main.getAttribute('class')).toBe(classNames.main)
  expect(main.getAttribute('style')).toBe('display: none;')
  // expect(loadingContainer.getAttribute('class')).toBe(classNames.loadingContainer)
  // expect(main.getAttribute('class')).toBe(mainClassName)
})
