import { INITIAL_STATE } from 'constants'

export const localStorageData = () => {
  const LOCAL_DATA = localStorage.getItem('transactions')

  const TRANSACTIONS = LOCAL_DATA ? JSON.parse(LOCAL_DATA) : INITIAL_STATE

  return { transactions: TRANSACTIONS }
}
