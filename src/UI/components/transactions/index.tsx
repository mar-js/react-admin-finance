import { useGlobalState } from 'contexts'

export const Transactions: React.FC = () => {
  const { transactions } = useGlobalState()

  return (
    <ul>
      { transactions.map(transaction => (
        <li key={ transaction.id }>
          { transaction.description } - { transaction.amount }
        </li>
      )) }
    </ul>
  )
}
