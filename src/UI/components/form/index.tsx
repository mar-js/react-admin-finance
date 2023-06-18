import { FormEvent } from 'react'
import { useGlobalState } from 'contexts'
import { generatorId } from 'helpers'
import { ITransaction } from 'interfaces'

export const Form: React.FC = () => {
  const { addTransaction } = useGlobalState()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const TARGET = e.target as HTMLFormElement
    const DATA = Object.fromEntries(new FormData(TARGET))
    const { description, amount } = DATA as unknown as ITransaction

    addTransaction({
      id: generatorId(),
      description,
      amount
    })
  }

  return (
    <form onSubmit={ handleSubmit } className="w-full">
      <input className="bg-lime-800 px-2 text-white" type="text" name="description" />
      <input className="bg-lime-800 px-2 text-white" type="number" step="0.1" name="amount" />
      <button className="w-full bg-lime-600 text-white font-bold py-3" type="submit">Add transaction</button>
    </form>
  )
}
