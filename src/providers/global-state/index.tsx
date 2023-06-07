import { PropsWithChildren, useReducer } from 'react'
import { GlobalStateModel } from 'contexts'
import { transactionsReducer } from 'store/reducers'
import { INITIAL_STATE } from 'constants'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ { transactions }, dispatch ] = useReducer(transactionsReducer, INITIAL_STATE)

  const VALUE = { transactions }

  return (<GlobalStateModel.Provider value={ VALUE }>
    { children }
  </GlobalStateModel.Provider>)
}
