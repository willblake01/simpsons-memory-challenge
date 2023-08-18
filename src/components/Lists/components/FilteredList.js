import React from 'react'

const FilteredList = ({ items }) => {
  const theSimpsons = [
    'Homer Simpson',
    'Marge Simpson',
    'Bart Simpson',
    'Lisa Simpson',
    'Maggie Simpson',
    "Santa's Little Helper",
    'Snowball II'
  ]

  return (
    <section>
      <ol className="list">
        <h2>Filtered List</h2>
        {items
          .filter(item =>
            theSimpsons.some(familyMember => familyMember.includes(item))
          )
          .map((item, index) => {
            if (index % 2 === 0) {
              return <li key={`item-${index}`}>{item}</li>
            } else {
              return null
            }
          })}
      </ol>
    </section>
  )
}

export default FilteredList
