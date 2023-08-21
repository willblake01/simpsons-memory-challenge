import React, { Fragment } from 'react'
import { AddListItem, FilteredList, List } from './components'

const Lists = () => {
  return (
    <Fragment>
      <div className="flex-row">
        <List />
        <FilteredList />
      </div>
      <AddListItem />
    </Fragment>
  )
}

export default Lists
