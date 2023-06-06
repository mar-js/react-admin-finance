import { PropsWithChildren, useReducer } from 'react'
import { GlobalStateModel } from 'contexts'
import { transactionsReducer } from 'store/reducers'
import { INITIAL_STATE } from 'constants'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(transactionsReducer, INITIAL_STATE)

  const VALUE = { state }

  <GlobalStateModel.Provider value={ VALUE }>
    { children }
  </GlobalStateModel.Provider>
}
