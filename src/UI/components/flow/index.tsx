import { useGlobalState } from 'contexts'

export const Flow: React.FC = () => {
  const { INCOME, EXPENSE } = useGlobalState()

  return (
    <div className="text-md">
      <h4 className="text-inherit mb-2">Income: { INCOME }</h4>
      <h4 className="text-inherit mb-2">Expense: { EXPENSE }</h4>
    </div>
  )
}
