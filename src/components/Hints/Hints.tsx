import React, { useEffect, useState } from 'react'
import { useLocalStorageState } from '../utils'
import classNames from 'classnames'
import { FidgetSpinner } from 'react-loader-spinner'
import { Quote } from './components'
import ButtonGroup from './components/ButtonGroup'

interface HintsProps {
  displayHints: boolean
  setDisplayHints: (value: boolean) => void
}

const Hints = ({ displayHints, setDisplayHints }: HintsProps) => {
  const [displayAuthor, setDisplayAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [quoteData, setQuoteData] = useLocalStorageState('quoteData', null)

  const white = '#ffffff'

  const fetchData = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json().then(data => data[0])
    return data
  }

  const handleFetchQuote = () => {
    Promise.all([setIsLoading(true), setDisplayAuthor(false), fetchData()])
      .then(data => setQuoteData(data[2]))
      .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (!quoteData) handleFetchQuote()
  }, [])

  return (
    <div className="hints">
      {isLoading ? (
        <FidgetSpinner
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{ height: '620px' }}
          wrapperClass="dna-wrapper"
          ballColors={[white, white, white]}
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
          <Quote quoteData={quoteData} displayAuthor={displayAuthor} />
          <ButtonGroup
            displayAuthor={displayAuthor}
            displayHints={displayHints}
            handleFetchQuote={handleFetchQuote}
            setDisplayAuthor={setDisplayAuthor}
            setDisplayHints={setDisplayHints}
          />
        </div>
      )}
    </div>
  )
}

export default Hints
