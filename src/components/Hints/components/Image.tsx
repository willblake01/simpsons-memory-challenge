import React from 'react'
import { Tilt } from '../../utils'

interface ImageProps {
  image: string
}

const Image = ({ image }: ImageProps) => (
  <div className="width-max-content">
    <Tilt>
      <img className="quote-image" src={image} alt="character" />
    </Tilt>
  </div>
)

export default Image
