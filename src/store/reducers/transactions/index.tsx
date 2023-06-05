import { ADD_TRANSACTION } from 'store/types'
import { IGlobalStateModel, TTransactionsReducer } from 'interfaces'

export const transactionsReducer = (state: TTransactionsReducer, action: IGlobalStateModel) => {
  if (state === ADD_TRANSACTION) return state

  return state
}
