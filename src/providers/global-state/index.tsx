import { PropsWithChildren, useReducer } from 'react'
import { GlobalStateModel } from 'contexts'
import { transactionsReducer } from 'store/reducers'
import { INITIAL_STATE } from 'constants'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from 'store/types'
import { ITransaction } from 'interfaces'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ { transactions }, dispatch ] = useReducer(transactionsReducer, INITIAL_STATE)

  const addTransaction = (transaction: ITransaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    })
  }

  const deleteTransaction = (transaction: ITransaction) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: transaction
    })
  }

  const MOUNTS = transactions.map(transaction => Number(transaction.amount)) || 0

  const TOTAL = MOUNTS.reduce((acc, item) => acc += item, 0) || 0

  const INCOME = MOUNTS.filter(mount => mount > 0).reduce((acc, item) => acc += item) || 0

  const VALUE = {
    transactions,
    dispatch,
    addTransaction,
    deleteTransaction,
    TOTAL,
    INCOME
  }

  return (
    <GlobalStateModel.Provider value={ VALUE }>
      { children }
    </GlobalStateModel.Provider>
  )
}
