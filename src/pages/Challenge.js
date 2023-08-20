import React, { Fragment } from 'react'
import '../public/styles/app.css'
import { useNavigate } from 'react-router-dom'
import { Constraints, FetchQuote, Lists } from '../components'
import { LargeButton } from '../components/utils'

const Challenge = () => {
  let navigate = useNavigate()

  return (
    <Fragment>
      <Constraints />
      <FetchQuote />
      <Lists />
      <LargeButton
        text="Finished"
        className="large-button"
        onClick={() => navigate('/score')}
      />
    </Fragment>
  )
}

export default Challenge
