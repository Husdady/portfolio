// React
import ReactDOM from 'react-dom'

// Components
import App from './App'

// Services
import reportWebVitals from '@services/reportWebVitals'

// Get root element
const root = document.getElementById('root') as HTMLElement

// Render React application
ReactDOM.render(<App />, root)

if (process.env.NODE_ENV === 'development') {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log)
}
