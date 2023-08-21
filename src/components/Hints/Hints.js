import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { FidgetSpinner } from 'react-loader-spinner'
import { Image, Quote } from './components'
import audio from '../../public/audio/The_Simpsons_Theme_Song.mp3'
import ButtonGroup from './components/ButtonGroup'

const start = () => {
  new Audio(audio).play()
}

const Hints = ({ setDisplayHints }) => {
  const [displayAuthor, setdisplayAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [quoteData, setQuoteData] = useState({})

  const { character, image, quote } = quoteData

  const fetchQuote = async () => {
    setIsLoading(true)
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json()
    setdisplayAuthor(false)
    setQuoteData(data[0])

    setIsLoading(false)
  }

  const toggleDisplayAuthor = () => {
    displayAuthor ? setdisplayAuthor(false) : setdisplayAuthor(true)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="fetch-quote">
      {isLoading ? (
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
        <div
          className={classNames(
            'flex-column',
            'justify-center',
            'align-center'
          )}
        >
          <Image image={image} />
          <Quote
            character={character}
            displayAuthor={displayAuthor}
            quote={quote}
          />
          <ButtonGroup
            displayAuthor={displayAuthor}
            fetchQuote={fetchQuote}
            setDisplayHints={setDisplayHints}
            start={start}
            toggleDisplayAuthor={toggleDisplayAuthor}
          />
        </div>
      )}
    </div>
  )
}

export default Hints
