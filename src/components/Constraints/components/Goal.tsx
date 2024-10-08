import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { Context } from '../../../context'
import { Counter } from '.'
import { SmallButton } from '../../utils'

const Goal = () => {
  interface GoalContext {
    clock: number
    goal: number
    revisionsRemaining: number
    setRevisionsRemaining: (value: number) => void
  }

  const {
    clock,
    goal,
    revisionsRemaining,
    setRevisionsRemaining
  }: GoalContext = useContext(Context)

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
        <>
          <Counter />
          <SmallButton text="Done" onClick={() => setRevise(false)} />
        </>
      ) : revisionsRemaining > 0 ? (
        <SmallButton text="Revise" onClick={handleRevise} />
      ) : null}
    </div>
  )
}

export default Goal
