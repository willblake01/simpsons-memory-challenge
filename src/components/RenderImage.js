import React, { useState } from 'react'
import LargeButton from './LargeButton'
import Tilt from './ImageTilt'

const RenderImage = ({ shoulddisplayimage, toggleImage }) => {
  const [toggleImageButtonText] = useState('Toggle Image')

  const displayimage = shoulddisplayimage
  if (shoulddisplayimage === 'true') {
    return (
      <div className="landing">
        <Tilt>
          <img
            className="landing__logo"
            src={
              'https://www.nydailynews.com/resizer/trd7fRiQr-jLMiO1Ufo2ZcS3H18=/800x637/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ADGUPURXZRFWFPMVKZMGUV7PAI.jpg'
            }
            alt="simpsons-memory-challenge"
            shoulddisplayimage={displayimage}
          />
        </Tilt>
        <LargeButton
          buttonText={toggleImageButtonText}
          onClickEvent={() => toggleImage()}
        />
      </div>
    )
  } else {
    return (
      <div className="landing">
        <Tilt></Tilt>
        <LargeButton
          buttonText={toggleImageButtonText}
          onClickEvent={() => toggleImage()}
        />
      </div>
    )
  }
}

export default RenderImage
