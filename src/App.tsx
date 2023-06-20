import { Header, Navigation } from 'UI/layouts'
import {
  Balance,
  Flow,
  Form,
  Title,
  Transactions
} from 'UI/components'

export const App: React.FC = () => (
  <>
    <Header>
      <Title />
    </Header>
    <Navigation>...</Navigation>
    <Form />
    <Transactions />
    <Balance />
    <Flow />
  </>
)
