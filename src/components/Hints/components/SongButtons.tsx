import React, { Fragment, useContext } from 'react'
import { Context } from '../../../context'
import { LargeButton } from '../../utils'

interface SongButtonsContext {
  songIsPaused: boolean
  songIsPlaying: boolean
}

interface SongButtonsProps {
  playSong: () => void
  pauseSong: () => void
  stopSong: () => void
}

const SongButtons: React.FC<SongButtonsProps> = ({
  playSong,
  pauseSong,
  stopSong
}) => {
  const { songIsPaused, songIsPlaying }: SongButtonsContext = useContext(
    Context
  )

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
            text={'Play Song'}
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
