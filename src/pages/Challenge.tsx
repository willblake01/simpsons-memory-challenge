import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import '../public/styles/app.css'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import { Constraints, Hints, Lists } from '../components'
import { LargeButton } from '../components/utils'
import { AddListItem } from '../components/Lists/components'

interface ChallengeContext {
  clock: number
  setClock: (value: number) => void
  setSongIsPaused: (value: boolean) => void
  setSongIsPlaying: (value: boolean) => void
  themeSong: HTMLAudioElement
}

const Challenge = () => {
  const navigate = useNavigate()

  const {
    clock,
    setClock,
    setSongIsPaused,
    setSongIsPlaying,
    themeSong
  }: ChallengeContext = useContext(Context)

  const themeSongRef = useRef(themeSong)

  const [displayHints, setDisplayHints] = useState(true)

  const challengeActive = clock > 0

  themeSongRef.current.onended = function() {
    Promise.resolve(themeSongRef.current?.load()).then(() =>
      setSongIsPlaying(false)
    )
  }

  const endChallenge = async () => {
    Promise.all([
      themeSongRef.current?.load(),
      setSongIsPlaying(false),
      setSongIsPaused(false),
      setClock(0)
    ]).then(() => navigate('/score'))
  }

  useEffect(() => {
    if (!challengeActive) {
      endChallenge()
    }
  })

  return (
    <div
      className={classNames(
        'challenge-container',
        'flex-column',
        'align-center'
      )}
    >
      <Constraints />
      {displayHints ? (
        <Fragment>
          <Hints
            displayHints={displayHints}
            setDisplayHints={setDisplayHints}
          />
        </Fragment>
      ) : (
        <LargeButton
          text="Show Hints"
          className="large-button"
          onClick={() => setDisplayHints(true)}
        />
      )}
      <Lists />
      <AddListItem />
      <LargeButton
        text="Submit"
        className="large-button"
        onClick={endChallenge}
      />
    </div>
  )
}

export default Challenge
