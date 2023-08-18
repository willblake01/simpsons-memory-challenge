import React, { useState } from 'react'
import SmallButton from './SmallButton'

const RenderList = ({ items, deleteListItem }) => {
  const [deleteButtonText] = useState('Delete')

  const handleDeleteItem = item => {
    deleteListItem(item)
  }

  return (
    <section className="list">
      <h2>List</h2>
      <ol>
        {items.map(item => (
          <li key={item}>
            {item}
            <SmallButton
              buttonText={deleteButtonText}
              onClickEvent={() => handleDeleteItem(item)}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default RenderList
