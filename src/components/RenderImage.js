import React, { useState } from 'react'
import LargeButton from './LargeButton'

const RenderImage = ({ shoulddisplayimage, toggleImage }) => {
  const [toggleImageButtonText] = useState('Toggle Image')

  const displayimage = shoulddisplayimage
  if (shoulddisplayimage === 'true') {
    return (
      <div className="landing">
        <img
          className="landing__logo"
          src={
            'https://www.nydailynews.com/resizer/trd7fRiQr-jLMiO1Ufo2ZcS3H18=/800x637/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ADGUPURXZRFWFPMVKZMGUV7PAI.jpg'
          }
          alt="h4i logo"
          shoulddisplayimage={displayimage}
        />
        <LargeButton
          buttonText={toggleImageButtonText}
          onClickEvent={() => toggleImage()}
        />
      </div>
    )
  } else {
    return (
      <LargeButton
        buttonText={toggleImageButtonText}
        onClickEvent={() => toggleImage()}
      />
    )
  }
}

export default RenderImage
