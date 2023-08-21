import React, { createContext } from 'react'
import { useLocalStorageState } from './components/utils'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [clock, setClock] = useLocalStorageState('time', 480000)
  const [goal, setGoal] = useLocalStorageState('goal', 0)

  const context = { clock, setClock, goal, setGoal }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
