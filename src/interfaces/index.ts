/* eslint-disable no-unused-vars */

export enum EnumTransactionsReducerState {
  ADD_TRANSACTION = 'ADD_TRANSACTION'
}

export interface ITransactionsReducerAction {
  type: EnumTransactionsReducerState;
  payload: IFormAddTransaction;
}

export interface IGlobalStateModel {
  transactions: []
}

export interface IFormAddTransaction {
  id: number;
  title: string;
  description: string;
}
