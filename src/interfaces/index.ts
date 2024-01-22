export interface IAction {
  type: string;
  payload: any;
}

export type TSide =
  | "BUY"
  | "SELL"
  | "BUY_ESTIMATED"
  | "SELL_ESTIMATED"
  | "UNKNOWN";

export interface ITrade {
  type: "trade";
  symbol_id: string;
  sequence: number;
  time_exchange: string;
  time_coinapi: string;
  uuid: string;
  price: number;
  size: number;
  taker_side: TSide;
}
