import React, { useState } from 'react'
import { SmallButton } from '../..'

const List = ({ items, setItems }) => {
  const [deleteButtonText] = useState('Delete')

  const deleteListItem = item => {
    let itemsCopy = [...items]
    itemsCopy = itemsCopy.filter(listItem => listItem !== item)
    setItems(itemsCopy)
  }

  return (
    <section>
      <ol className="list">
        <h2>List</h2>
        {items.map(item => (
          <li key={item}>
            {item}
            <SmallButton
              text={deleteButtonText}
              onClick={deleteListItem(item)}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default List
