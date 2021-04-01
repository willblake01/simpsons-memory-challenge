import React from 'react'

const RenderList = ({ items }) => (
  <section className="list-container">
    <h2>List</h2>
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
)

export default RenderList
