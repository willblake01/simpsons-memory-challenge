import React from 'react'

const SmallButton = ({ buttonText, onClickEvent }) => (
  <button type="button" onClick={onClickEvent} className="small-button">
    {buttonText}
  </button>
)

export default SmallButton
