import React, { useEffect, useState } from 'react'
import { SmallButton } from './../../../components/utils'

const List = ({ items, setItems }) => {
  const [list, setList] = useState([])

  const deleteListItem = item => {
    let itemsCopy = [...items]
    itemsCopy = itemsCopy.filter(listItem => listItem !== item)
    setItems(itemsCopy)
  }

  useEffect(() => {
    const allCharacters = items.map((item, index) => (
      <li key={`${item}-${index}`}>
        {item}
        <SmallButton text="Delete" onClick={() => deleteListItem(item)} />
      </li>
    ))
    setList(allCharacters)
  }, [items])

  return (
    <section>
      <ul className="list">
        <h2>List</h2>
        {list}
      </ul>
    </section>
  )
}

export default List
