/* eslint-disable no-unused-vars */

export enum EnumTransactionsReducerType {
  ADD_TRANSACTION = 'ADD_TRANSACTION'
}

export interface ITransactionsReducerAction {
  type: EnumTransactionsReducerType;
  payload: ITransaction;
}

export interface ITransactionsReducerState {
  transactions: ITransaction[];
}

export interface IGlobalStateModel {
  transactions: [] | ITransaction[];
}

export interface ITransaction {
  description: string;
  amoung: string;
}
