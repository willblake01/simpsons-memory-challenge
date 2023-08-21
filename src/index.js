import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './public/styles/index.css'
import classNames from 'classnames'
import { ContextProvider } from './context'
import Header from './components/Header'
import { Challenge, Landing } from './pages'

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <div className={classNames('container', 'flex-column', 'centered')}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/challenge" element={<Challenge />} />
        </Routes>
      </div>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
