import React from 'react'
import '../styles/app.css'
import { useNavigate } from 'react-router-dom'
import { FetchQuote, LargeButton, Lists } from '../components'

const Landing = () => {
  let navigate = useNavigate()

  return (
    <div className="container">
      <h1 className="heading">The Simpsons Memory Challenge</h1>
      <FetchQuote />
      <Lists />
      <LargeButton
        text="Finished"
        className="large-button"
        onClick={() => navigate('/score')}
      />
    </div>
  )
}

export default Landing
