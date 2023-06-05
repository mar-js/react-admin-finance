import { ADD_TRANSACTION } from 'store/types'

export const transactionsReducer = (state, action) => {
  if (state === ADD_TRANSACTION) return state

  return state
}
