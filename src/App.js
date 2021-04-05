import React, { useState } from 'react'
import './styles/app.css'
import RenderImage from './components/RenderImage'
import RenderList from './components/RenderList'
import RenderFilteredList from './components/RenderFilteredList'
import Counter from './components/Counter'
import InitialCountForm from './components/InitialCountForm'
import AddListItemForm from './components/AddListItemForm'

const App = () => {
  const [shoulddisplayimage, setshoulddisplayimage] = useState('true')
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)

  const addListItem = item => {
    setItems(items.concat(item))
  }

  const deleteListItem = item => {
    setItems(items.filter(listItem => listItem !== item))
  }

  const setInitialCount = initialCount => {
    setCount(initialCount)
  }

  const updateCount = newCount => {
    setCount(newCount)
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
