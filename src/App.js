import React, { useState } from 'react'
import './styles/app.css'
import { AddListItem, Lists, FetchQuote } from './components'
import { useLocalStorageState } from './utils/useLocalStorageState'

const App = () => {
  const [items, setItems] = useLocalStorageState('items', [])

  return (
    <div className="container">
      <h1 className="heading">The Simpsons Memory Challenge</h1>
      <FetchQuote />
      <Lists items={items} setItems={setItems} />
      <AddListItem items={items} setItems={setItems} />
    </div>
  )
}

export default App
