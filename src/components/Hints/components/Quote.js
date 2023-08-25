import React from 'react'
import classNames from 'classnames'
import { Image } from '.'

const Quote = ({ character, displayAuthor, image, quote, quoteData }) => {
  const handleDisplayQuote = () => {
    if (quoteData) {
      return (
        <div
          className={classNames(
            'flex-column',
            'justify-center',
            'align-center'
          )}
        >
          <Image image={image} />
          <blockquote className={classNames('width-max-content', 'quote')}>
            <q>{quote}</q>
            <br />
            <br />
            <cite>
              {displayAuthor ? `-${character}` : '-Anonymous Character'}
            </cite>
          </blockquote>
        </div>
      )
    }
  }

  const quoteUI = handleDisplayQuote()
  return quoteUI
}

export default Quote
