import React from 'react'
import classNames from 'classnames'

const Quote = ({ character, displayAuthor, quote }) => (
  <blockquote className={classNames('width-max-content', 'quote')}>
    <q>{quote}</q>
    <br />
    <br />
    <cite>{displayAuthor ? `-${character}` : '-Anonymous Character'}</cite>
  </blockquote>
)

export default Quote
