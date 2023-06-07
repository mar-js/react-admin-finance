/* eslint-disable no-unused-vars */

export type TTransactionsReducerType = 'ADD_TRANSACTION'

export interface ITransactionsReducerAction {
  type: TTransactionsReducerType;
  payload: ITransaction;
}

export interface ITransactionsReducerState {
  transactions: ITransaction[];
}

export interface IGlobalStateModel {
  transactions: [] | ITransaction[];
  dispatch: React.Dispatch<ITransactionsReducerAction>;
}

export interface ITransaction {
  description: string;
  amoung: string;
}
