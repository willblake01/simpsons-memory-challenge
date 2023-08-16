import React, { useState } from 'react'
import './styles/app.css'
import RenderList from './components/RenderList'
import RenderFilteredList from './components/RenderFilteredList'
import Counter from './components/Counter'
import InitialCountForm from './components/InitialCountForm'
import AddListItemForm from './components/AddListItemForm'
import { useLocalStorageState } from './utils/useLocalStorageState'
import SimpsonsQuotesApi from './components/SimpsonsQuotesApi'

const App = () => {
  const [count, setCount] = useLocalStorageState('count', 0)
  const [displayImage, setDisplayImage] = useState(true)
  const [items, setItems] = useLocalStorageState('items', [])

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

  const toggleImage = () => {
    displayImage === true ? setDisplayImage(false) : setDisplayImage(true)
  }

  return (
    <div className="app">
      <h1 className="heading">The Simpsons Memory Challenge</h1>
      <SimpsonsQuotesApi
        displayImage={displayImage}
        toggleImage={toggleImage}
      />
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
