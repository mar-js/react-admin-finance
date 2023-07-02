import { VictoryPie, VictoryLabel } from 'victory'

export const ExpenseChart: React.FC = () => (
  <VictoryPie
    colorScale={ [ 'red', 'blue' ] }
    data={ [
      {
        x: 'Expenses',
        y: 35
      },
      {
        x: 'Incomes',
        y: 40
      }
    ] }
    animate={ { duration: 300 } }
    labels={ ({ datum }) => `${datum.y}%` }
    labelComponent={ (
      <VictoryLabel
        angle={ 45 }
        style={ { fill: 'white' } }
      />
    ) }
  />
)
