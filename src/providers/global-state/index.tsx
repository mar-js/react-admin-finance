import { PropsWithChildren } from 'react'
import { GlobalStateModel } from 'contexts'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {

  <GlobalStateModel.Provider value={ null }>
    { children }
  </GlobalStateModel.Provider>
}
