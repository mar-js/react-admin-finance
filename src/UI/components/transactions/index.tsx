import { useGlobalState } from 'contexts'

export const Transactions: React.FC = () => {
  const { transactions, deleteTransaction } = useGlobalState()

  return (
    <ul>
      { transactions.map(transaction => (
        <li key={ transaction.id }>
          { transaction.description } - { transaction.amount }
          <button type="button" onClick={ () => deleteTransaction(transaction) }>X</button>
        </li>
      )) }
    </ul>
  )
}
