import React from 'react'

const RenderList = ({ items }) => (
  <section className="list-container">
    <h2>Filtered List</h2>
    <ul>
      {items
        .filter(item => item.length <= 5)
        .map((item, index) => {
          if (index % 2 === 0) {
            return <li key={item}>{item}</li>
          }
        })}
    </ul>
  </section>
)

export default RenderList
