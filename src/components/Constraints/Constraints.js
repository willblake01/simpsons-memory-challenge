import React from 'react'
import classNames from 'classnames'
import Clock from './components/Clock'
import Goal from './components/Goal'

const Constraints = () => (
  <div
    className={classNames(
      'constraints',
      'flex-row',
      'space-around',
      'align-start'
    )}
  >
    <Clock />
    <Goal />
  </div>
)

export default Constraints
