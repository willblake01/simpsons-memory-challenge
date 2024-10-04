import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context'
import type { RawList } from '../../../types/RawList'

const FilteredList = () => {
  const { rawList }: RawList = useContext(Context)

  const [filteredList, setFilteredList] = useState([])

  const theSimpsons = [
    'Homer Simpson',
    'Marge Simpson',
    'Bart Simpson',
    'Lisa Simpson',
    'Maggie Simpson',
    'Abraham Simpson',
    "Santa's Little Helper",
    'Snowball II',
    'Snowball V'
  ]

  useEffect(() => {
    const nuclearFamily = rawList
      .filter(character =>
        theSimpsons.some(familyMember => familyMember.includes(character))
      )
      .map(filtereedCharacter => filtereedCharacter)
    setFilteredList(nuclearFamily)
  }, [rawList])

  return (
    <section>
      <ul className="list">
        <h2>Filtered List</h2>
        {filteredList.map((filteredCharacter, index) => (
          <li key={`${filteredCharacter}-${index}`}>{filteredCharacter}</li>
        ))}
      </ul>
    </section>
  )
}

export default FilteredList
