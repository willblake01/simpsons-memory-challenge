import React, { createContext, useState } from 'react'
import { useLocalStorageState } from './components/utils'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [goal, setGoal] = useLocalStorageState('goal', 0)

  return (
    <Context.Provider value={{ goal, setGoal }}>{children}</Context.Provider>
  )
}
