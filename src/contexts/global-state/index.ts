import { createContext, useContext } from 'react'

export const GlobalStateModel = createContext({})
export const useGlobalState = () => useContext(GlobalStateModel)
