import React, { useState } from 'react'
import UserInput from './UserInput'
import LargeButton from './LargeButton'

const AddListItemForm = ({ addListItem }) => {
  const [inputType] = useState('text')
  const [inputPattern] = useState('[A-Za-z]*')
  const [inputMode] = useState('text')
  const [inputPlaceholder] = useState('Please Enter an Item')
  const [inputId] = useState('add-item-id')
  const [newItem, setNewItem] = useState('')

  const handleItemSubmit = e => {
    if (newItem) {
      e.preventDefault()
      addListItem(newItem)
      setNewItem('')
      document.getElementById(inputId).value = null
    }
  }

  const handleItemInput = e => {
    setNewItem(e.target.value)
  }

  return (
    <form className="form">
      <h1>Add a Simpsons Character to the List</h1>
      <div className="flex-row">
        <UserInput
          inputType={inputType}
          inputPattern={inputPattern}
          inputMode={inputMode}
          newItem={newItem}
          handleItemInput={handleItemInput}
          inputPlaceholder={inputPlaceholder}
          inputId={inputId}
          onChangeEvent={handleItemInput}
        />
        <LargeButton
          buttonText="Submit"
          buttonClass="large-button"
          onClickEvent={handleItemSubmit}
        />
      </div>
    </form>
  )
}

export default AddListItemForm
