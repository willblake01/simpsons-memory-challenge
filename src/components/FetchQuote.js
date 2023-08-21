import React, { useState, useEffect, Fragment } from 'react'
import classNames from 'classnames'
import { LargeButton, Tilt } from './utils'
import { FidgetSpinner } from 'react-loader-spinner'
import audio from '../public/audio/The_Simpsons_Theme_Song.mp3'

const start = () => {
  new Audio(audio).play()
}

const FetchQuote = () => {
  const [displayAuthor, setdisplayAuthor] = useState(false)
  const [displayHints, setDisplayHints] = useState(true)
  const [loading, setLoading] = useState(false)
  const [quoteData, setQuoteData] = useState({})

  const { character, image, quote } = quoteData

  const fetchQuote = async () => {
    setLoading(true)
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()
    setdisplayAuthor(false)
    setQuoteData(data[0])

    setLoading(false)
  }

  const toggleDisplayAuthor = () => {
    displayAuthor ? setdisplayAuthor(false) : setdisplayAuthor(true)
  }

  const toggleDisplayHints = () => {
    displayHints ? setDisplayHints(false) : setDisplayHints(true)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <Fragment>
      {displayHints ? (
        <Fragment>
          {loading ? (
            <FidgetSpinner
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{ height: '522px' }}
              wrapperClass="dna-wrapper"
              ballColors={['#ffffff', '#ffffff', '#ffffff']}
              backgroundColor="orange"
            />
          ) : (
            <Fragment>
              <Tilt>
                <img className="quote-image" src={image} alt="character" />
              </Tilt>
              <blockquote className="quote">
                <q>{quote}</q>
                <br />
                <br />
                <cite>
                  {displayAuthor ? `-${character}` : '-Anonymous Character'}
                </cite>
              </blockquote>
            </Fragment>
          )}
          <div className="flex-row">
            <LargeButton
              text="Next Quote"
              className="large-button"
              onClick={fetchQuote}
            />
            <LargeButton
              text={displayAuthor ? 'Hide Author' : 'Show Author'}
              className="large-button"
              onClick={toggleDisplayAuthor}
            />
            <LargeButton
              text={'Theme Song'}
              className="large-button"
              onClick={start}
            />
            <LargeButton
              text="Hide Hints"
              className="large-button"
              onClick={toggleDisplayHints}
            />
          </div>
        </Fragment>
      ) : (
        <LargeButton
          text="Show Hints"
          className="large-button"
          onClick={toggleDisplayHints}
        />
      )}
    </Fragment>
  )
}

export default FetchQuote
