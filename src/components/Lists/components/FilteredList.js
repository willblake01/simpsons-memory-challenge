import React, { useEffect, useState } from 'react'

const FilteredList = ({ items }) => {
  const [filteredList, setFilteredList] = useState([])

  const theSimpsons = [
    'Homer Simpson',
    'Marge Simpson',
    'Bart Simpson',
    'Lisa Simpson',
    'Maggie Simpson',
    "Santa's Little Helper",
    'Snowball II'
  ]

  useEffect(() => {
    const nuclearFamily = items
      .filter(item =>
        theSimpsons.some(familyMember => familyMember.includes(item))
      )
      .map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
    setFilteredList(nuclearFamily)
  }, [items])

  return (
    <section>
      <ul className="list">
        <h2>Filtered List</h2>
        {filteredList}
      </ul>
    </section>
  )
}

export default FilteredList
