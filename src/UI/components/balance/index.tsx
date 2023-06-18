import { useGlobalState } from 'contexts'

export const Balance: React.FC = () => {
  const { TOTAL } = useGlobalState()

  return (
    <h2 className="text-xl">Your balance: <strong className="text-2xl">{ TOTAL }</strong></h2>
  )
}
