import React, { Fragment, useEffect, useState } from 'react'
import { useLocalStorageState } from './../../components/utils'
import classNames from 'classnames'
import audio from '../../public/audio/The_Simpsons_Theme_Song.mp3'
import { FidgetSpinner } from 'react-loader-spinner'
import { Image, Quote } from './components'
import ButtonGroup from './components/ButtonGroup'

const themeSong = new Audio(audio)

const Hints = ({ setDisplayHints }) => {
  const [displayAuthor, setDisplayAuthor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [quoteData, setQuoteData] = useLocalStorageState('quoteData', null)
  const [songIsPlaying, setSongIsPlaying] = useState(false)
  const [songIsPaused, setSongIsPaused] = useState(false)

  const { character, image, quote } = { ...quoteData }

  const playSong = () => {
    if (!songIsPlaying) {
      Promise.all([setSongIsPlaying(true), setSongIsPaused(false)]).then(() =>
        themeSong.play()
      )
    }
  }

  const stopSong = () => {
    Promise.all([setSongIsPlaying(false), setSongIsPaused(false)]).then(() =>
      themeSong.load()
    )
  }

  const pauseSong = () => {
    if (songIsPlaying) {
      Promise.all([setSongIsPlaying(false), setSongIsPaused(true)]).then(() =>
        themeSong.pause()
      )
    }
  }

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
            'hints',
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
            setDisplayAuthor={setDisplayAuthor}
            handleFetchQuote={handleFetchQuote}
            setDisplayHints={setDisplayHints}
            songIsPlaying={songIsPlaying}
            songIsPaused={songIsPaused}
            playSong={playSong}
            stopSong={stopSong}
            pauseSong={pauseSong}
          />
        </div>
      )}
    </div>
  )
}

export default Hints
