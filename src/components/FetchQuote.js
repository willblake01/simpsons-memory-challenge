import React, { useState, useEffect, Fragment } from 'react'
import LargeButton from '../Buttons/LargeButton'
import Tilt from '../ImageTilt'

const FetchQuote = () => {
  const [displayImage, setDisplayImage] = useState(true)
  const [displayQuoteAuthor, setDisplayQuoteAuthor] = useState(false)
  const [quoteData, setQuoteData] = useState({})

  const { author, image, quote } = quoteData

  const toggleImage = () => {
    displayImage === true ? setDisplayImage(false) : setDisplayImage(true)
  }

  const fetchQuote = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()
    setQuoteData(data[0])
  }

  const toggleDisplayQuoteAuthor = () => {
    setDisplayQuoteAuthor(true)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
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
          {displayQuoteAuthor ? `-${author}` : '-Anonymous Character'}
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

export default FetchQuote
