import React, { useState } from 'react'
import UserInput from './UserInput'
import LargeButton from './LargeButton'

const AddListItemForm = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState('')

  const addListItem = item => {
    console.log('Now!!')
    let itemsCopy = [...items]
    itemsCopy = itemsCopy.concat(item)

    setItems(itemsCopy)
  }

  const handleSubmit = e => {
    console.log('Now!!')
    if (newItem) {
      e.preventDefault()
      addListItem(newItem)
      setNewItem('')
      document.getElementById('add-item-id').value = null
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
          type="text"
          pattern="[A-Za-z]*"
          inputMode="text"
          newItem={newItem}
          handleItemInput={handleItemInput}
          placeholder="Please Enter an Item"
          id="add-item-id"
          onChange={handleItemInput}
        />
        <LargeButton
          text="Submit"
          className="large-button"
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

export default AddListItemForm
