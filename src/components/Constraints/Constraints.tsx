import React from 'react'
import classNames from 'classnames'
import { Clock, Goal } from './components'

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
