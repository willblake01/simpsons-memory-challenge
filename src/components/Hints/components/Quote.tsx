import React from 'react'
import classNames from 'classnames'
import { Image } from '.'

interface QuoteProps {
  displayAuthor: boolean
  quoteData: {
    character: string
    image: string
    quote: string
  }
}

const Quote = ({ displayAuthor, quoteData }: QuoteProps) => {
  const { character, image, quote } = quoteData || {}

  {
    return quoteData ? (
      <div
        className={classNames('flex-column', 'justify-center', 'align-center')}
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
    ) : null
  }
}

export default Quote
