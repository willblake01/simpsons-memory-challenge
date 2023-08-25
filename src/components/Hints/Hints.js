import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Context } from '../../context'
import { useLocalStorageState } from './../../components/utils'
import classNames from 'classnames'
import { FidgetSpinner } from 'react-loader-spinner'
import { Image, Quote } from './components'
import ButtonGroup from './components/ButtonGroup'

const Hints = ({ pauseSong, playSong, setDisplayHints, stopSong }) => {
  const { songIsPaused, songIsPlaying } = useContext(Context)

  const [displayAuthor, setDisplayAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [quoteData, setQuoteData] = useLocalStorageState('quoteData', null)

  const { character, image, quote } = { ...quoteData }

  const fetchData = async () => {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    const data = await response.json().then(data => data[0])
    return data
  }

  const handleFetchQuote = () => {
    setIsLoading(true)
    const setData = async () => {
      await fetchData().then(data => {
        // Hide next author until user clicks "Show Author" button.
        setDisplayAuthor(false)
        setQuoteData(data)
      })
    }
    setData().then(() => setIsLoading(false))
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
          {quoteData ? (
            <Fragment>
              <Image image={image} />
              <Quote
                character={character}
                displayAuthor={displayAuthor}
                quote={quote}
              />
            </Fragment>
          ) : null}
          <ButtonGroup
            displayAuthor={displayAuthor}
            handleFetchQuote={handleFetchQuote}
            pauseSong={pauseSong}
            playSong={playSong}
            setDisplayAuthor={setDisplayAuthor}
            setDisplayHints={setDisplayHints}
            songIsPaused={songIsPaused}
            songIsPlaying={songIsPlaying}
            stopSong={stopSong}
          />
        </div>
      )}
    </div>
  )
}

export default Hints
