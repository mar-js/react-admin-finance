import { ADD_TRANSACTION } from 'store/types'
import { ITransactionsReducerState, ITransactionsReducerAction } from 'interfaces'

export const transactionsReducer = (state: ITransactionsReducerState, action: ITransactionsReducerAction) => {
  if (action.type === ADD_TRANSACTION) {
    return {
      ...state,
      transactions: [ action.payload ]
    }
  }

  return state
}
