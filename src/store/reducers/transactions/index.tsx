import { ADD_TRANSACTION } from 'store/types'
import { EnumTransactionsReducer } from 'interfaces'

export const transactionsReducer = (state: EnumTransactionsReducer, action: any) => {
  if (state === ADD_TRANSACTION) return state

  return state
}
