import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../../context'
import { SmallButton } from './../../../components/utils'

const List = () => {
  const { rawList, setRawList } = useContext(Context)

  const [list, setList] = useState([])

  const deleteListItem = item => {
    let rawListCopy = [...rawList]
    const rawListFiltered = rawListCopy.filter(listItem => listItem !== item)
    setRawList(rawListFiltered)
  }

  useEffect(() => {
    const allCharacters = [...rawList]
    setList(allCharacters)
  }, [rawList])

  return (
    <section>
      <ol className="list">
        <h2>List</h2>
        {list.map((character, index) => (
          <li key={`${character}-${index}`}>
            {character}
            <SmallButton
              text="Delete"
              onClick={() => deleteListItem(character)}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default List
