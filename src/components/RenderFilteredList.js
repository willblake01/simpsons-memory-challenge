import React from 'react'

const RenderList = ({ items }) => (
  <section className="list">
    <h2>Filtered List</h2>
    <ol>
      {items
        .filter(item => item.length <= 5)
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

export default RenderList
