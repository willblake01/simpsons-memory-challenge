import React from 'react'

const UserInput = ({
  inputType,
  inputPattern,
  inputMode,
  inputPlaceholder,
  onChangeEvent,
  inputId
}) => (
  <input
    type={inputType}
    pattern={inputPattern}
    inputMode={inputMode}
    placeholder={inputPlaceholder}
    onChange={onChangeEvent}
    id={inputId}
  />
)

export default UserInput
