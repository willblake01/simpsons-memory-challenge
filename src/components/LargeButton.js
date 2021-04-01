import React from 'react'

const SubmitButton = ({ onClickEvent, buttonText }) => (
  <button type="button" onClick={onClickEvent} className="submit-button">
    {buttonText}
  </button>
)

export default SubmitButton
