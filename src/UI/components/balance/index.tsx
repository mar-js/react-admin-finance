import { useGlobalState } from 'contexts'

export const Balance: React.FC = () => {
  const { TOTAL } = useGlobalState()

  return (
    <h2>{ TOTAL }</h2>
  )
}
