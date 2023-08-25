import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './public/styles/index.css'
import classNames from 'classnames'
import { ContextProvider } from './context'
import Header from './components/Header'
import { Challenge, Landing, Score } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <ContextProvider>
      <div
        className={classNames(
          'container',
          'flex-column',
          'justify-center',
          'align-center'
        )}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </div>
    </ContextProvider>
  </BrowserRouter>
)
