import React, { Fragment } from 'react'
import classNames from 'classnames'
import { LargeButton } from './../../utils'

const ButtonGroup = ({
  displayAuthor,
  handleFetchQuote,
  setDisplayAuthor,
  setDisplayHints,
  playSong,
  stopSong,
  pauseSong,
  songIsPlaying,
  songIsPaused
}) => {
  const handleSongButtons = () => {
    if (songIsPlaying) {
      return (
        <Fragment>
          <LargeButton
            text={'Pause Song'}
            className="large-button"
            onClick={pauseSong}
          />
          <LargeButton
            text={'Stop Song'}
            className="large-button"
            onClick={stopSong}
          />
        </Fragment>
      )
    } else if (songIsPaused) {
      return (
        <Fragment>
          <LargeButton
            text={'Unpause Song'}
            className="large-button"
            onClick={playSong}
          />
          <LargeButton
            text={'Stop Song'}
            className="large-button"
            onClick={stopSong}
          />
        </Fragment>
      )
    } else {
      return (
        <LargeButton
          text={'Theme Song'}
          className="large-button"
          onClick={playSong}
        />
      )
    }
  }

  return (
    <div
      className={classNames(
        'flex-row',
        'justify-center',
        'align-center',
        'width-max-content'
      )}
    >
      <LargeButton
        text="Next Quote"
        className="large-button"
        onClick={handleFetchQuote}
      />
      <LargeButton
        text={displayAuthor ? 'Hide Author' : 'Show Author'}
        className="large-button"
        onClick={() => setDisplayAuthor(!displayAuthor)}
      />
      {handleSongButtons()}
      <LargeButton
        text="Hide Hints"
        className="large-button"
        onClick={() => setDisplayHints(false)}
      />
    </div>
  )
}

export default ButtonGroup
