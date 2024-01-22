import { IAction, ITrade } from "../../interfaces";
import {
  ADD_OR_UPDATE_TRADE,
  RESET_TRADES,
  SET_TRADES,
  SET_TRADES_ERROR,
} from "../actions/marketData";

interface IMarketDataReducer {
  trades: ITrade[];
  errorMessage: string;
}

const initialState: IMarketDataReducer = {
  trades: [],
  errorMessage: "",
};

const marketDataReducer = (
  state = initialState,
  action: IAction
): IMarketDataReducer => {
  switch (action.type) {
    case SET_TRADES:
      return { ...state, trades: action.payload };
    case ADD_OR_UPDATE_TRADE: {
      const payload: ITrade = action.payload;
      const index = state.trades.findIndex(
        (item) => item.symbol_id === payload.symbol_id
      );
      if (index >= 0) {
        let newTrades = state.trades;
        newTrades[index] = payload;
        return { ...state, trades: newTrades };
      } else {
        return { ...state, trades: [...state.trades, { ...payload }] };
      }
    }
    case SET_TRADES_ERROR:
      return { ...state, errorMessage: action.payload };
    case RESET_TRADES:
      return initialState;
    default:
      return state;
  }
};

export default marketDataReducer;
