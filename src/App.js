import React, { Component } from 'react'
import './styles/app.css'
import RenderImage from './components/RenderImage'
import RenderList from './components/RenderList'
import RenderFilteredList from './components/RenderFilteredList'
import Counter from './components/Counter'
import InitialCountForm from './components/InitialCountForm'
import AddListItemForm from './components/AddListItemForm'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shoulddisplayimage: 'true',
      items: [],
      count: 0
    }

    this.deleteListItem = this.deleteListItem.bind(this)
    this.addListItem = this.addListItem.bind(this)
    this.setInitialCount = this.setInitialCount.bind(this)
    this.updateCount = this.updateCount.bind(this)
  }

  addListItem(item) {
    this.setState({ items: this.state.items.concat(item) })
  }

  deleteListItem(item) {
    this.setState({
      items: this.state.items.filter(listItem => listItem !== item)
    })
  }

  setInitialCount(initialCount) {
    this.setState({ count: initialCount })
  }

  updateCount(newCount) {
    this.setState({ count: newCount })
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">The Simpsons Memory Challenge</h1>
        <RenderImage shoulddisplayimage={this.state.shoulddisplayimage} />
        <AddListItemForm addListItem={this.addListItem} />
        <RenderList
          items={this.state.items}
          deleteListItem={this.deleteListItem}
        />
        <RenderFilteredList items={this.state.items} />
        <InitialCountForm setInitialCount={this.setInitialCount} />
        <h1 className="count">{this.state.count}</h1>
        <Counter count={this.state.count} updateCount={this.updateCount} />
      </div>
    )
  }
}

export default App
