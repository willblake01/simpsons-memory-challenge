import React, { createContext, useEffect } from 'react'
import { useLocalStorageState } from './components/utils'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [clock, setClock] = useLocalStorageState('clock', 0)
  const [goal, setGoal] = useLocalStorageState('goal', 0)
  const [rawList, setRawList] = useLocalStorageState('rawList', [])
  const [score, setScore] = useLocalStorageState('score', 0)

  useEffect(() => {
    if (rawList.length) {
      setScore(rawList.length)
    }
  }, [rawList])

  const context = {
    clock,
    setClock,
    goal,
    setGoal,
    rawList,
    setRawList,
    score
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
