import { IAction, ISymbol } from "../../interfaces";

export const SET_TRADES = "SET_TRADES";
export const ADD_OR_UPDATE_TRADE = "ADD_OR_UPDATE_TRADE";
export const SET_TRADES_ERROR = "SET_TRADES_ERROR";
export const RESET_TRADES = "RESET_TRADES";

export const setTrades = (trades: ISymbol[]): IAction => ({
  type: SET_TRADES,
  payload: trades,
});

export const setTradesError = (message: string): IAction => ({
  type: SET_TRADES_ERROR,
  payload: message,
});

export const addOrUpdateTrade = (trade: ISymbol): IAction => ({
  type: ADD_OR_UPDATE_TRADE,
  payload: trade,
});

export const resetCart = () => ({ type: RESET_TRADES });
