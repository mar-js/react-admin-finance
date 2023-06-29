import { useGlobalState } from 'contexts'

export const Flow: React.FC = () => {
  const { INCOME, EXPENSE } = useGlobalState()

  return (
    <div className="text-xl w-full flex justify-between items-center mb-2">
      <h4 className="text-inherit">Income: { INCOME }</h4>
      <h4 className="text-inherit">Expense: { EXPENSE }</h4>
    </div>
  )
}
