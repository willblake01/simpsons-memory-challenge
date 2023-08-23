import React from 'react'
import classNames from 'classnames'
import { LargeButton } from './../../utils'

const ButtonGroup = ({
  displayAuthor,
  handleFetchQuote,
  setDisplayAuthor,
  setDisplayHints,
  start
}) => (
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
    <LargeButton text={'Theme Song'} className="large-button" onClick={start} />
    <LargeButton
      text="Hide Hints"
      className="large-button"
      onClick={() => setDisplayHints(false)}
    />
  </div>
)

export default ButtonGroup
