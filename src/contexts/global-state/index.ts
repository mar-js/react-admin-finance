import { createContext, useContext } from 'react'
import { IGlobalStateModel } from 'interfaces'

export const GlobalStateModel = createContext({} as IGlobalStateModel)
export const useGlobalState = (): IGlobalStateModel => useContext(GlobalStateModel)
