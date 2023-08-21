import React from 'react'
import { Tilt } from './../../utils'

const Image = ({ image }) => (
  <div className="width-max-content">
    <Tilt>
      <img className="quote-image" src={image} alt="character" />
    </Tilt>
  </div>
)

export default Image
