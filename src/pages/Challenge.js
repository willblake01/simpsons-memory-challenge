import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import '../public/styles/app.css'
import { Context } from '../context'
import { useNavigate } from 'react-router-dom'
import { Constraints, Hints, Lists } from '../components'
import { LargeButton } from '../components/utils'
import audio from '../public/audio/The_Simpsons_Theme_Song.mp3'
import { AddListItem } from '../components/Lists/components'

const themeSong = new Audio(audio)

const Challenge = () => {
  const {
    clock,
    setClock,
    setSongIsPaused,
    songIsPlaying,
    setSongIsPlaying
  } = useContext(Context)

  const navigate = useNavigate()

  const [displayHints, setDisplayHints] = useState(true)

  const endChallenge = async () => {
    Promise.all([stopSong(), setClock(0)]).then(() => navigate('/score'))
  }

  const playSong = () => {
    if (!songIsPlaying) {
      Promise.all([setSongIsPlaying(true), setSongIsPaused(false)]).then(() =>
        themeSong.play()
      )
    }
  }

  const pauseSong = () => {
    if (songIsPlaying) {
      Promise.all([setSongIsPlaying(false), setSongIsPaused(true)]).then(() =>
        themeSong.pause()
      )
    }
  }

  const stopSong = () => {
    Promise.all([setSongIsPlaying(false), setSongIsPaused(false)]).then(() =>
      themeSong.load()
    )
  }

  themeSong.onended = function() {
    new Promise(resolve => {
      resolve(setSongIsPlaying(false))
    }).then(() => stopSong())
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
