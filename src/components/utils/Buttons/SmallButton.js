import React from 'react'

const SmallButton = ({ text, onClick }) => (
  <button type="button" onClick={onClick} className="small-button">
    {text}
  </button>
)

export default SmallButton
