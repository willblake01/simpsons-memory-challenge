import React, { useState, useEffect, Fragment } from 'react'
import { LargeButton, Tilt } from '../utils'

const FetchQuote = () => {
  const [displayHints, setDisplayHints] = useState(true)
  const [displayImage, setDisplayImage] = useState('true')
  const [displayAuthor, setdisplayAuthor] = useState(false)
  const [quoteData, setQuoteData] = useState({})

  const { character, image, quote } = quoteData

  const toggleImage = () => {
    displayImage === true ? setDisplayImage(false) : setDisplayImage(true)
  }

  const fetchQuote = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()
    setdisplayAuthor(false)
    setQuoteData(data[0])
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
          <Tilt>
            <img
              className="quote-image"
              src={image}
              alt="simpsons-memory-challenge"
              shoulddisplayimage={displayImage}
            />
          </Tilt>
          <blockquote className="quote">
            <q>{quote}</q>
            <br />
            <br />
            <cite>
              {displayAuthor ? `-${character}` : '-Anonymous Character'}
            </cite>
          </blockquote>
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
              text={displayHints ? 'Hide Hints' : 'Show Hints'}
              className="large-button"
              onClick={toggleDisplayHints}
            />
          </div>
        </Fragment>
      ) : (
        <LargeButton
          text={displayHints ? 'Hide Hints' : 'Show Hints'}
          className="large-button"
          onClick={toggleDisplayHints}
        />
      )}
    </Fragment>
  )
}

export default FetchQuote
