/* eslint-disable no-unused-vars */

export type TTransactionsReducerType = 'ADD_TRANSACTION' | 'DELETE_TRANSACTION'

export interface ITransactionsReducerAction {
  type: TTransactionsReducerType;
  payload: ITransaction;
}

export interface ITransactionsReducerState {
  transactions: [] | ITransaction[];
}

export interface IGlobalStateModel {
  transactions: [] | ITransaction[];
  dispatch: React.Dispatch<ITransactionsReducerAction>;
  addTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (transaction: ITransaction) => void;
  TOTAL: number;
  INCOME: number;
  EXPENSE: number;
  TOTAL_INCOME_PERCENTAGE: number;
  TOTAL_EXPENSE_PERCENTAGE: number;
  CONDITIONAL_TOTAL: boolean;
}

export interface ITransaction {
  id: string;
  description: string;
  amount: string;
}
