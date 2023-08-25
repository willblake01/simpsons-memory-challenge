import React from 'react'
import classNames from 'classnames'
import { LargeButton } from './../../utils'
import SongButtons from './SongButtons'

const ButtonGroup = ({
  displayAuthor,
  handleFetchQuote,
  pauseSong,
  playSong,
  setDisplayAuthor,
  setDisplayHints,
  songIsPaused,
  songIsPlaying,
  stopSong
}) => {
  return (
    <div
      className={classNames(
        'align-center',
        'flex-row',
        'justify-center',
        'width-max-content'
      )}
    >
      <LargeButton
        className="large-button"
        onClick={handleFetchQuote}
        text="Next Quote"
      />
      <LargeButton
        className="large-button"
        onClick={() => setDisplayAuthor(!displayAuthor)}
        text={displayAuthor ? 'Hide Author' : 'Show Author'}
      />
      <SongButtons
        playSong={playSong}
        pauseSong={pauseSong}
        songIsPlaying={songIsPlaying}
        songIsPaused={songIsPaused}
        stopSong={stopSong}
      />
      <LargeButton
        className="large-button"
        onClick={() => setDisplayHints(false)}
        text="Hide Hints"
      />
    </div>
  )
}

export default ButtonGroup
