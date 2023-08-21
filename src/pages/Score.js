import React, { useContext } from 'react'
import classNames from 'classnames'
import { Context } from '../context'

const Score = () => {
  const { rawList } = useContext(Context)
  const score = rawList.length

  return (
    <div
      className={classNames('flex-column', 'align-center', 'justify-center')}
    >
      <h1>Score</h1>
      <h2>{score}</h2>
    </div>
  )
}

export default Score
