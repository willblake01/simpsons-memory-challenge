import React, { Fragment } from 'react'
import classNames from 'classnames'
import { LargeButton } from '../../utils'
import SongPlayer from '../../SongPlayer'

interface ButtonGroupProps {
  displayAuthor: boolean
  displayHints: boolean
  handleFetchQuote: () => void
  setDisplayAuthor: (value: boolean) => void
  setDisplayHints: (value: boolean) => void
}

const ButtonGroup = ({
  displayAuthor,
  displayHints,
  handleFetchQuote,
  setDisplayAuthor,
  setDisplayHints
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
          <SongPlayer />
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
