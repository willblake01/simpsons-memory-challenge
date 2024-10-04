import React, { Fragment, useContext, useRef } from 'react'
import { Context } from '../context'
import { LargeButton } from './utils'

interface SongContext {
  songIsPaused: boolean
  setSongIsPaused: (value: boolean) => void
  songIsPlaying: boolean
  setSongIsPlaying: (value: boolean) => void
  themeSong: HTMLAudioElement
}

const SongPlayer = () => {
  const {
    songIsPaused,
    setSongIsPaused,
    songIsPlaying,
    setSongIsPlaying,
    themeSong
  }: SongContext = useContext(Context)

  const themeSongRef = useRef(themeSong)

  const playSong = () => {
    if (!songIsPlaying) {
      Promise.all([setSongIsPaused(false), setSongIsPlaying(true)]).then(() =>
        themeSongRef.current?.play()
      )
    }
  }

  const pauseSong = () => {
    if (songIsPlaying) {
      Promise.all([setSongIsPaused(true), setSongIsPlaying(false)]).then(() =>
        themeSongRef.current?.pause()
      )
    }
  }

  const stopSong = () => {
    Promise.all([setSongIsPaused(false), setSongIsPlaying(false)]).then(() =>
      themeSongRef.current?.load()
    )
  }

  const handleSongButtons = () => {
    if (songIsPlaying) {
      return (
        <Fragment>
          <LargeButton
            className="large-button"
            onClick={pauseSong}
            text={'Pause Song'}
          />
          <LargeButton
            className="large-button"
            onClick={stopSong}
            text={'Stop Song'}
          />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <LargeButton
            className="large-button"
            onClick={playSong}
            text={songIsPaused ? 'Play Song' : 'Theme Song'}
          />
          {songIsPaused ? (
            <LargeButton
              className="large-button"
              onClick={stopSong}
              text={'Stop Song'}
            />
          ) : null}
        </Fragment>
      )
    }
  }
  const songButtons = handleSongButtons()
  return songButtons
}

export default SongPlayer
