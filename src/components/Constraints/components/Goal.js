import React, { Fragment, useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Context } from '../../../context'
import { Counter } from './../components'
import { SmallButton } from '../../../components/utils'

const Goal = () => {
  const { clock, goal, revisionsRemaining, setRevisionsRemaining } = useContext(
    Context
  )

  const [revise, setRevise] = useState(false)

  const handleRevise = () => {
    Promise.resolve(setRevise(true)).then(() => {
      if (revisionsRemaining > 0) {
        setRevisionsRemaining(revisionsRemaining - 1)
      }
    })
  }

  useEffect(() => {
    // Revisions only allowed in the first 5 minutes
    if (clock <= 180000) {
      setRevisionsRemaining(0)
    }
  }, [clock])

  return (
    <div
      className={classNames('flex-column', 'justify-center', 'align-center')}
    >
      <h1>Goal</h1>
      <h1>{goal}</h1>
      {revise ? (
        <Fragment>
          <Counter />
          <SmallButton
            text="Done"
            className="small-button"
            onClick={() => setRevise(false)}
          />
        </Fragment>
      ) : revisionsRemaining > 0 ? (
        <SmallButton
          text="Revise"
          className="small-button"
          onClick={handleRevise}
        />
      ) : null}
    </div>
  )
}

export default Goal
