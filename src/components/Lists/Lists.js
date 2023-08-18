import React from 'react'
import { FilteredList, List } from './components'

const Lists = ({ items, setItems }) => {
  return (
    <div className="flex-row">
      <List items={items} setItems={setItems} />
      <FilteredList items={items} />
    </div>
  )
}

export default Lists
