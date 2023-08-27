import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { SmallButton } from '../../utils'

const List = () => {
  const { rawList, setRawList } = useContext(Context)

  const [list, setList] = useState([])

  const deleteListItem = item => {
    const rawListFiltered = rawList.filter(listItem => listItem !== item)
    setRawList(rawListFiltered)
  }

  useEffect(() => {
    setList(rawList)
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
