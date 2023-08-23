import React, { Fragment } from 'react'
import { LargeButton } from './../../utils'

const SongButtons = ({
  playSong,
  pauseSong,
  songIsPlaying,
  songIsPaused,
  stopSong
}) => {
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
    } else if (songIsPaused) {
      return (
        <Fragment>
          <LargeButton
            className="large-button"
            onClick={playSong}
            text={'Unpause Song'}
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
        <LargeButton
          className="large-button"
          onClick={playSong}
          text={'Theme Song'}
        />
      )
    }
  }
  const songButtons = handleSongButtons()
  return songButtons
}

export default SongButtons
