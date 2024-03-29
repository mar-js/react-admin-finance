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
      <div>
        <Header>
          <Title />
        </Header>
        <Navigation>
          <Flow />
        </Navigation>
        <Form />
        <Balance />
        { CONDITIONAL_TOTAL && <ExpenseChart /> }
      </div>
      <div className="pt-[75px]">
        <Transactions />
      </div>
    </Container>
  )
}
