import React from 'react'

const LargeButton = ({ buttonText, onClickEvent }) => (
  <button type="button" onClick={onClickEvent} className="large-button">
    {buttonText}
  </button>
)

export default LargeButton
