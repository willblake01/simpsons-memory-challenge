import React, { createContext, useState } from 'react'
import { useLocalStorageState } from './components/utils'
import themeSongMP3 from './public/audio/The_Simpsons_Theme_Song.mp3'

interface ContextType {
  clock: number
  setClock: (value: number) => void
  goal: number
  setGoal: (value: number) => void
  rawList: string[]
  setRawList: (value: string[]) => void
  revisionsRemaining: number
  setRevisionsRemaining: (value: number) => void
  songIsPlaying: boolean
  setSongIsPlaying: (value: boolean) => void
  songIsPaused: boolean
  setSongIsPaused: (value: boolean) => void
  themeSong: HTMLAudioElement
}

export const Context = createContext<ContextType | null>(null)

export const ContextProvider = ({ children }) => {
  const themeSong = new Audio(themeSongMP3)

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
    setSongIsPaused,
    themeSong
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
