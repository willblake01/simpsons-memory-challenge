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
  return displayHints ? (
    <Fragment>
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
        <SongPlayer />
        <LargeButton
          className="large-button"
          onClick={() => setDisplayHints(false)}
          text="Hide Hints"
        />
      </div>
    </Fragment>
  ) : (
    <LargeButton
      text="Show Hints"
      className="large-button"
      onClick={() => setDisplayHints(true)}
    />
  )
}

export default ButtonGroup
