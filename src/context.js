import React, { createContext, useState } from 'react'
import { useLocalStorageState } from './components/utils'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [clock, setClock] = useLocalStorageState('clock', null)
  const [goal, setGoal] = useLocalStorageState('goal', null)
  const [rawList, setRawList] = useLocalStorageState('rawList', [])
  const [revisionsRemaining, setRevisionsRemaining] = useLocalStorageState(
    'revisionsRemaining',
    null
  )
  const [songIsPlaying, setSongIsPlaying] = useState(false)
  const [songIsPaused, setSongIsPaused] = useState(false)

  const context = {
    clock,
    setClock,
    goal,
    setGoal,
    rawList,
    setRawList,
    revisionsRemaining,
    setRevisionsRemaining,
    songIsPlaying,
    setSongIsPlaying,
    songIsPaused,
    setSongIsPaused
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
