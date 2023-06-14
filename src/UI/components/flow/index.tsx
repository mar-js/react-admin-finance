import { useGlobalState } from 'contexts'

export const Flow: React.FC = () => {
  const { INCOME, EXPENSE } = useGlobalState()

  return (
    <div>
      <h4>Income: { INCOME }</h4>
      <h4>Expense: { EXPENSE }</h4>
    </div>
  )
}
