import { useGlobalState } from 'contexts'

export const Transactions: React.FC = () => {
  const { transactions, deleteTransaction } = useGlobalState()

  return (
    <>
      { transactions.length > 0 && (
        <div className="p-3 border-t border-t-gray-400 h-full bg-green-700">
          <h4 className="text-xl text-white mb-4">History</h4>
          <ul>
            { transactions.map(transaction => (
              <li key={ transaction.id } className="flex justify-between items-center bg-lime-700 text-white p-3 mb-2 text-xs">
                { transaction.description } ${ transaction.amount }
                <button
                  className="font-bold border rounded-full py-1 px-2 bg-white text-black text-xs ml-4"
                  type="button"
                  onClick={ () => deleteTransaction(transaction) }
                >X</button>
              </li>
            )) }
          </ul>
        </div>
      ) }
    </>
  )
}
