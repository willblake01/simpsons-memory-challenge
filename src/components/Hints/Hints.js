import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useLocalStorageState } from './../../components/utils'
import { FidgetSpinner } from 'react-loader-spinner'
import { Image, Quote } from './components'
import audio from '../../public/audio/The_Simpsons_Theme_Song.mp3'
import ButtonGroup from './components/ButtonGroup'

const start = () => {
  new Audio(audio).play()
}

const Hints = ({ setDisplayHints }) => {
  const [displayAuthor, setDisplayAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [quoteData, setQuoteData] = useLocalStorageState('quoteData', {})

  const { character, image, quote } = quoteData

  const fetchData = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json().then(data => data[0])
    return data
  }

  const fetchQuote = () => {
    setIsLoading(true)
    const setData = async () => {
      setDisplayAuthor(false)
      const data = await fetchData()
      setQuoteData(data)
    }
    setData().then(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="hints">
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
            'hints',
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
            setDisplayAuthor={setDisplayAuthor}
          />
        </div>
      )}
    </div>
  )
}

export default Hints
