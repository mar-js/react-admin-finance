import { FormEvent } from 'react'
import { useGlobalState } from 'contexts'
import { ADD_TRANSACTION } from 'store/types'
import { ITransaction } from 'interfaces'

export const Form: React.FC = () => {
  const { dispatch } = useGlobalState()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const { description, amount } = DATA as unknown as ITransaction

    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        description,
        amount
      }
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" name="description" />
      <input type="number" step="0.1" name="amount" />
      <button type="submit">Add transaction</button>
    </form>
  )
}
