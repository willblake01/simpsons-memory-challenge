import React, { useState, useEffect, Fragment } from 'react'
import LargeButton from './LargeButton'
import Tilt from './ImageTilt'

const SimpsonsQuotesApi = ({ shoulddisplayimage, toggleImage }) => {
  const [quote, setQuote] = useState(null)
  const [quoteAuthor, setQuoteAuthor] = useState(null)
  const [quoteImage, setQuoteImage] = useState(null)
  const [displayQuoteAuthor, setDisplayQuoteAuthor] = useState(false)

  const fetchQuote = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()

    setQuote(data[0].quote)
    setQuoteAuthor(data[0].character)
    setQuoteImage(data[0].image)
  }

  const toggleDisplayQuoteAuthor = () => {
    setDisplayQuoteAuthor(true)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  useEffect(() => {
    setDisplayQuoteAuthor(false)
  }, [quoteAuthor])

  return (
    <Fragment>
      <Tilt>
        <img
          className="quote-image"
          src={quoteImage}
          alt="simpsons-memory-challenge"
          shoulddisplayimage={shoulddisplayimage}
        />
      </Tilt>
      <blockquote className="quote">
        <q>{quote}</q>
        <br />
        <br />
        <cite>
          {displayQuoteAuthor ? `-${quoteAuthor}` : '-Anonymous Character'}
        </cite>
      </blockquote>
      <div className="flex-row">
        <LargeButton
          text="Next Quote"
          className="large-button"
          onClick={fetchQuote}
        />
        <LargeButton
          text="Show Author"
          className="large-button"
          onClick={toggleDisplayQuoteAuthor}
        />
      </div>
    </Fragment>
  )
}

export default SimpsonsQuotesApi
