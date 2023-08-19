import React from 'react'

const LargeButton = ({ text, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {text}
  </button>
)

export default LargeButton
