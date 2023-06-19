import { Header } from 'UI/layouts'
import {
  Balance,
  Flow,
  Form,
  Transactions
} from 'UI/components'

export const App: React.FC = () => (
  <>
    <Header>...</Header>

    <Form />
    <Transactions />
    <Balance />
    <Flow />
  </>
)
