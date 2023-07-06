import { useGlobalState } from 'contexts'
import {
  Container,
  Header,
  Navigation
} from 'UI/layouts'
import {
  Balance,
  ExpenseChart,
  Flow,
  Form,
  Title,
  Transactions
} from 'UI/components'

export const App: React.FC = () => {
  const { CONDITIONAL_TOTAL } = useGlobalState()

  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Navigation>
        <Flow />
      </Navigation>
      <Form />
      <Transactions />
      <Balance />
      { CONDITIONAL_TOTAL && <ExpenseChart /> }
    </Container>
  )
}
