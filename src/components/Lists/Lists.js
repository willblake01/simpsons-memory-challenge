import React, { Fragment } from 'react'
import { useLocalStorageState } from '../utils'
import { AddListItem, FilteredList, List } from './components'

const Lists = () => {
  const [items, setItems] = useLocalStorageState('items', [])

  return (
    <Fragment>
      <div className="flex-row">
        <List items={items} setItems={setItems} />
        <FilteredList items={items} />
      </div>
      <AddListItem items={items} setItems={setItems} />
    </Fragment>
  )
}

export default Lists
