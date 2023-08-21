import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../../context'
import { SmallButton } from './../../../components/utils'

const List = () => {
  const { rawList } = useContext(Context)

  const [list, setList] = useState([])

  const deleteListItem = item => {
    let rawListCopy = [...rawList]
    const rawListFiltered = rawListCopy.filter(listItem => listItem !== item)
    setList(rawListFiltered)
  }

  useEffect(() => {
    const allCharacters = rawList.map((character, index) => (
      <li key={`${character}-${index}`}>
        {character}
        <SmallButton text="Delete" onClick={() => deleteListItem(character)} />
      </li>
    ))
    setList(allCharacters)
  }, [rawList])

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
