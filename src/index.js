import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context'
import Header from './components/Header'
import { Challenge, Landing } from './pages'

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <div className="container">
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
