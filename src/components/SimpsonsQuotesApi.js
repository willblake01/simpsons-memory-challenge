import React, { useState, useEffect } from 'react'
import LargeButton from './LargeButton'
import Tilt from './ImageTilt'

const SimpsonsQuotesApi = ({ shoulddisplayimage, toggleImage }) => {
  const [quote, setQuote] = useState(null)
  const [quoteAuthor, setQuoteAuthor] = useState(null)
  const [quoteImage, setQuoteImage] = useState(null)

  const fetchQuote = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()

    setQuote(data[0].quote)
    setQuoteAuthor(data[0].character)
    setQuoteImage(data[0].image)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const nextQuote = () => {
    fetchQuote()
  }

  return (
    <div className="landing">
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
        <cite>{`-${quoteAuthor}`}</cite>
      </blockquote>
      <LargeButton
        buttonText="Next Quote"
        buttonClass="large-button"
        onClick={() => nextQuote()}
      />
    </div>
  )
}

export default SimpsonsQuotesApi
