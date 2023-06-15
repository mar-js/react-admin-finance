import { PropsWithChildren, useReducer } from 'react'
import { GlobalStateModel } from 'contexts'
import { transactionsReducer } from 'store/reducers'
import { INITIAL_STATE } from 'constants'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from 'store/types'
import { localStorageData } from 'helpers'
import { ITransaction } from 'interfaces'

export const GlobalStateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ { transactions }, dispatch ] = useReducer(transactionsReducer, INITIAL_STATE, localStorageData)

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

  const handlerReduce = (acc: number, item: number) => acc += item

  const MOUNTS = transactions.map(transaction => Number(transaction.amount)) || 0

  const TOTAL = MOUNTS.reduce(handlerReduce, 0) || 0

  const INCOME = MOUNTS.filter(mount => mount > 0).reduce(handlerReduce, 0) || 0

  const EXPENSE = MOUNTS.filter(mount => mount < 0).reduce(handlerReduce, 0) || 0

  const VALUE = {
    transactions,
    dispatch,
    addTransaction,
    deleteTransaction,
    TOTAL,
    INCOME,
    EXPENSE
  }

  return (
    <GlobalStateModel.Provider value={ VALUE }>
      { children }
    </GlobalStateModel.Provider>
  )
}
