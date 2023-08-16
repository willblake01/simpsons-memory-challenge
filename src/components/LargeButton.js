import React from 'react'

const LargeButton = ({ buttonText, onClick, buttonClass }) => (
  <button type="button" onClick={onClick} className={buttonClass}>
    {buttonText}
  </button>
)

export default LargeButton
