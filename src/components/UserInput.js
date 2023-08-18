import React from 'react'

const UserInput = ({ type, inputMode, placeholder, onChange, pattern, id }) => (
  <input
    type={type}
    pattern={pattern}
    inputMode={inputMode}
    placeholder={placeholder}
    onChange={onChange}
    id={id}
  />
)

export default UserInput
