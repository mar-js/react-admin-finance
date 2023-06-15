import { INITIAL_STATE } from 'constants'

export const localStorageData = () => {
  const LOCAL_DATA = localStorage.getItem('transactions')

  return LOCAL_DATA ? JSON.parse(LOCAL_DATA) : INITIAL_STATE
}
