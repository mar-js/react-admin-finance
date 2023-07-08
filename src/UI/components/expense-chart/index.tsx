import { useGlobalState } from 'contexts'
import { VictoryPie, VictoryLabel } from 'victory'

export const ExpenseChart: React.FC = () => {
  const { TOTAL_EXPENSE_PERCENTAGE, TOTAL_INCOME_PERCENTAGE } = useGlobalState()

  return (
    <div className="h-auto">
      <VictoryPie
        colorScale={ [ '#9fbb78', '#374b1c' ] }
        data={ [
          {
            x: 'Expenses',
            y: TOTAL_EXPENSE_PERCENTAGE
          },
          {
            x: 'Incomes',
            y: TOTAL_INCOME_PERCENTAGE
          }
        ] }
        animate={ { duration: 300 } }
        labels={ ({ datum }) => `${datum.y}%` }
        labelComponent={ (
          <VictoryLabel
            angle={ 45 }
            style={ { fill: '#1a1f12' } }
          />
        ) }
      />
    </div>
  )
}
