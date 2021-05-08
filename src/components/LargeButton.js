import React from 'react'

const LargeButton = ({ buttonText, onClickEvent, buttonClass }) => (
  <button type="button" onClick={onClickEvent} className={buttonClass}>
    {buttonText}
  </button>
)

export default LargeButton
