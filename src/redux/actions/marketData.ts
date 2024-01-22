import axios from "axios";
import { IAction, ISymbol } from "../../interfaces";

export const SET_TRADES = "SET_TRADES";
export const ADD_OR_UPDATE_TRADE = "ADD_OR_UPDATE_TRADE";
export const SET_IS_LOADING_TRADES = "SET_IS_LOADING_TRADES";
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

export const setIsLoadingTrades = (trueOrFalse: boolean): IAction => ({
  type: ADD_OR_UPDATE_TRADE,
  payload: trueOrFalse,
});

export const resetCart = () => ({ type: RESET_TRADES });

export const fetTrades = (): any => (dispatch: any) => {
  dispatch(setIsLoadingTrades(true));

  axios
    .get("https://testnet.binancefuture.com/fapi/v1/exchangeInfo")
    .then((res) => {
      dispatch(setIsLoadingTrades(false));
      if (res.data.symbols) {
        dispatch(setTrades(res.data.symbols));
      }
    })
    .catch((error) => {
      dispatch(setIsLoadingTrades(false));
      console.log({ error });
    });
};
