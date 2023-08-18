import React from 'react'

const RenderFilteredList = ({ items }) => {
  const theSimpsons = [
    'Homer',
    'Marge',
    'Bart',
    'Lisa',
    'Maggie',
    "Santa's Little Helper",
    'Snowball'
  ]

  return (
    <section>
      <ol className="list">
        <h2>Filtered List</h2>
        {items
          .filter(item =>
            theSimpsons.some(familyMember => item.includes(familyMember))
          )
          .map((item, index) => {
            if (index % 2 === 0) {
              return <li key={item}>{item}</li>
            } else {
              return null
            }
          })}
      </ol>
    </section>
  )
}

export default RenderFilteredList
