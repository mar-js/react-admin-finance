import { ADD_TRANSACTION, DELETE_TRANSACTION } from 'store/types'
import { ITransactionsReducerState, ITransactionsReducerAction } from 'interfaces'

export const transactionsReducer = (state: ITransactionsReducerState, action: ITransactionsReducerAction) => {
  if (action.type === ADD_TRANSACTION) {
    return {
      ...state,
      transactions: [ ...state.transactions, action.payload ]
    }
  }

  if (action.type === DELETE_TRANSACTION) {
    return {
      ...state,
      transactions: [ ...state.transactions.filter(transaction => transaction.id !== action.payload.id) ]
    }
  }

  return state
}
