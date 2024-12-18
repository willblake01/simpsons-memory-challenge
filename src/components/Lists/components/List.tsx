import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context'
import { SmallButton } from '../../utils'
import type { RawList } from '../../../types/RawList'

const List = () => {
  const { rawList, setRawList }: RawList = useContext(Context)

  const [list, setList] = useState([])

  interface DeleteListItem {
    (item: string): void
  }

  const deleteListItem: DeleteListItem = item => {
    const rawListFiltered = rawList.filter((listItem: string) => listItem !== item)
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
