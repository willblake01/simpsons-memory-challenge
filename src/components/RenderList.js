import React, { useState } from 'react'
import SmallButton from './SmallButton'

const RenderList = ({ items, deleteListItem }) => {
  const [deleteButtonText] = useState('Delete')

  const handleDeleteItem = item => {
    deleteListItem(item)
  }

  return (
    <section className="list-container">
      <h2>List</h2>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
            <SmallButton
              buttonText={deleteButtonText}
              onClickEvent={() => handleDeleteItem(item)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RenderList
