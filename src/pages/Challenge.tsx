import React, { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import '../public/styles/app.css'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import { Constraints, Hints, Lists } from '../components'
import { LargeButton } from '../components/utils'
import themeSongMP3 from '../public/audio/The_Simpsons_Theme_Song.mp3'
import { AddListItem } from '../components/Lists/components'

interface ChallengeContext {
  clock: number
  setClock: (value: number) => void
  setSongIsPaused: (value: boolean) => void
  songIsPlaying: boolean
  setSongIsPlaying: (value: boolean) => void
}

const Challenge = () => {
  const themeSong = useRef<HTMLAudioElement>(new Audio(themeSongMP3))

  const {
    clock,
    setClock,
    setSongIsPaused,
    songIsPlaying,
    setSongIsPlaying
  }: ChallengeContext = useContext(Context)

  const navigate = useNavigate()

  const [displayHints, setDisplayHints] = useState(true)

  const endChallenge = async () => {
    Promise.all([stopSong(), setClock(0)]).then(() => navigate('/score'))
  }

  const playSong = () => {
    if (!songIsPlaying) {
      Promise.all([setSongIsPaused(false), setSongIsPlaying(true)]).then(() =>
        themeSong.current?.play()
      )
    }
  }

  const pauseSong = () => {
    if (songIsPlaying) {
      Promise.all([setSongIsPaused(true), setSongIsPlaying(false)]).then(() =>
        themeSong.current?.pause()
      )
    }
  }

  const stopSong = () => {
    Promise.all([setSongIsPaused(false), setSongIsPlaying(false)]).then(() =>
      themeSong.current?.load()
    )
  }

  themeSong.current.onended = function() {
    Promise.resolve(setSongIsPlaying(false)).then(() => stopSong())
  }

  useEffect(() => {
    if (clock === 0) {
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
        <Hints
          displayHints={displayHints}
          pauseSong={pauseSong}
          playSong={playSong}
          stopSong={stopSong}
          setDisplayHints={setDisplayHints}
        />
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
        text="Finished"
        className="large-button"
        onClick={endChallenge}
      />
    </div>
  )
}

export default Challenge
