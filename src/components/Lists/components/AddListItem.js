import React, { useState } from 'react'
// import { LargeButton, UserInput } from '../../../utils'
import { LargeButton, UserInput } from '../..'

const AddListItem = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState('')

  const addListItem = item => {
    let itemsCopy = [...items]

    if (itemsCopy.includes(item)) {
      alert(`${item} already added, Please add a different character.`)
    } else {
      itemsCopy = itemsCopy.concat(item)
      setItems(itemsCopy)
    }
  }

  const handleSubmit = e => {
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
          placeholder="Character Name"
          id="add-item-id"
          onChange={handleItemInput}
        />
        <LargeButton
          text="Add"
          className="large-button"
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

export default AddListItem
