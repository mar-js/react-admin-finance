import { PropsWithChildren, useReducer } from 'react'
import { GlobalStateModel } from 'contexts'
import { transactionsReducer } from 'store/reducers'
import { INITIAL_STATE } from 'constants'
import { ADD_TRANSACTION } from 'store/types'
import { ITransaction } from 'interfaces'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ { transactions }, dispatch ] = useReducer(transactionsReducer, INITIAL_STATE)

  const addTransaction = (transaction: ITransaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    })
  }

  const VALUE = {
    transactions,
    dispatch,
    addTransaction
  }

  return (
    <GlobalStateModel.Provider value={ VALUE }>
      { children }
    </GlobalStateModel.Provider>
  )
}
