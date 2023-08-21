import React, { useContext, useState } from 'react'
import { Context } from './../../../context'
import { LargeButton, UserInput } from './../../../components/utils'

const AddListItem = () => {
  const { rawList, setRawList } = useContext(Context)

  const [newItem, setNewItem] = useState('')

  const handleInput = e => {
    const { value } = e.target
    setNewItem(value)
  }

  const addListItem = character => {
    const rawListCopy = [...rawList]

    if (rawListCopy.includes(character)) {
      alert(`${character} already added, Please add a different character.`)
    } else {
      const updatedRawList = rawListCopy.concat(character)
      setRawList(updatedRawList)
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

  return (
    <form className="form">
      <h1>Add a Simpsons Character to the List</h1>
      <div className="flex-row">
        <UserInput
          type="text"
          pattern="[A-Za-z]*"
          inputMode="text"
          newItem={newItem}
          handleInput={handleInput}
          placeholder="Character Name"
          id="add-item-id"
          onChange={handleInput}
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
