import React, { useState } from 'react'
import './styles/app.css'
import RenderImage from './components/RenderImage'
import RenderList from './components/RenderList'
import RenderFilteredList from './components/RenderFilteredList'
import Counter from './components/Counter'
import InitialCountForm from './components/InitialCountForm'
import AddListItemForm from './components/AddListItemForm'
import { useLocalStorageState } from './utils/useLocalStorageState'

const App = () => {
  const [shoulddisplayimage, setshoulddisplayimage] = useState('true')
  const [items, setItems] = useLocalStorageState('items', [])
  const [count, setCount] = useLocalStorageState('count', 0)

  const addListItem = item => {
    let itemsCopy = [...items]
    itemsCopy = itemsCopy.concat(item)
    setItems(itemsCopy)
  }

  const deleteListItem = item => {
    let itemsCopy = [...items]
    itemsCopy = itemsCopy.filter(listItem => listItem !== item)
    setItems(itemsCopy)
  }

  const setInitialCount = initialCount => {
    let countCopy = count
    countCopy = initialCount
    setCount(countCopy)
  }

  const updateCount = newCount => {
    let countCopy = count
    countCopy = newCount
    setCount(countCopy)
  }

  return (
    <div className="app">
      <h1 className="heading">The Simpsons Memory Challenge</h1>
      <RenderImage shoulddisplayimage={shoulddisplayimage} />
      <AddListItemForm addListItem={addListItem} />
      <RenderList items={items} deleteListItem={deleteListItem} />
      <RenderFilteredList items={items} />
      <InitialCountForm setInitialCount={setInitialCount} />
      <h1 className="count">{count}</h1>
      <Counter count={count} updateCount={updateCount} />
    </div>
  )
}

export default App
