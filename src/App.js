import React from 'react'
import './styles/app.css'
import { FetchQuote, Lists } from './components'

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">The Simpsons Memory Challenge</h1>
      <FetchQuote />
      <Lists />
    </div>
  )
}

export default App
