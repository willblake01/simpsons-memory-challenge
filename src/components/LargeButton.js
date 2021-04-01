import React from 'react'

const Button = ({ onClickEvent, buttonText }) => (
  <button type="button" onClick={onClickEvent} className="submit-button">
    {buttonText}
  </button>
)

export default Button
