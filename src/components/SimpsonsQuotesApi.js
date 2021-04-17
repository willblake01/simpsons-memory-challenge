import React, { useState, useEffect } from 'react'
import LargeButton from './LargeButton'

const SimpsonsQuotesApi = () => {
  const [quote, setQuote] = useState(null)
  const [nextQuoteButtonText] = useState('Next Quote')

  const fetchQuote = () => {
    window
      .fetch('https://simpsons-quotes-api.herokuapp.com/quotes?')
      .then(async response => {
        const data = await response.json()
        setQuote(null)
        setQuote(data[0].quote)
      })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  const nextQuote = () => {
    fetchQuote()
  }

  return (
    <div className="landing">
      <blockquote className="quote">
        <q>{quote}</q>
        <br />
        <br />
        <cite>-Anonymous Simpsons Character</cite>
      </blockquote>
      <LargeButton
        buttonText={nextQuoteButtonText}
        onClickEvent={() => nextQuote()}
      />
    </div>
  )
}

export default SimpsonsQuotesApi
