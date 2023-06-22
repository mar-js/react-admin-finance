import {
  Container,
  Header,
  Navigation
} from 'UI/layouts'
import {
  Balance,
  Flow,
  Form,
  Title,
  Transactions
} from 'UI/components'

export const App: React.FC = () => (
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
  </Container>
)
