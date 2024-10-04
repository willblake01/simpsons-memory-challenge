import React, { Fragment } from 'react'
import classNames from 'classnames'
import { LargeButton } from '../../utils'
import SongButtons from './SongButtons'

interface ButtonGroupProps {
  displayAuthor: boolean
  displayHints: boolean
  handleFetchQuote: () => void
  pauseSong: () => void
  playSong: () => void
  setDisplayAuthor: (value: boolean) => void
  setDisplayHints: (value: boolean) => void
  stopSong: () => void
}

const ButtonGroup = ({
  displayAuthor,
  displayHints,
  handleFetchQuote,
  pauseSong,
  playSong,
  setDisplayAuthor,
  setDisplayHints,
  stopSong
}: ButtonGroupProps) => {
  const handleDisplayButtons = () => {
    if (displayHints) {
      return (
        <Fragment>
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
            stopSong={stopSong}
          />
          <LargeButton
            className="large-button"
            onClick={() => setDisplayHints(false)}
            text="Hide Hints"
          />
        </Fragment>
      )
    } else {
      return (
        <LargeButton
          text="Show Hints"
          className="large-button"
          onClick={() => setDisplayHints(true)}
        />
      )
    }
  }

  const buttonsUI = handleDisplayButtons()
  return (
    <div
      className={classNames(
        'align-center',
        'flex-row',
        'justify-center',
        'width-max-content'
      )}
    >
      {buttonsUI}
    </div>
  )
}

export default ButtonGroup
