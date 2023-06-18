import {
  Balance,
  Flow,
  Form,
  Transactions
} from 'UI/components'

export const App: React.FC = () => (
  <>
    <Form />
    <Transactions />
    <Balance />
    <Flow />
  </>
)
