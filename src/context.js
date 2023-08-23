import React, { createContext } from 'react'
import { useLocalStorageState } from './components/utils'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [clock, setClock] = useLocalStorageState('clock', 0)
  const [goal, setGoal] = useLocalStorageState('goal', 0)
  const [rawList, setRawList] = useLocalStorageState('rawList', [])

  const context = {
    clock,
    setClock,
    goal,
    setGoal,
    rawList,
    setRawList
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
