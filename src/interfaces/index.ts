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

export interface ISymbol {
  symbol: string;
  pair: string;
  contractType: string;
  deliveryDate: number;
  onboardDate: number;
  status: "TRADING";
  maintMarginPercent: string;
  requiredMarginPercent: string;
  baseAsset: string;
  quoteAsset: string;
  marginAsset: string;
  pricePrecision: number;
  quantityPrecision: number;
  baseAssetPrecision: number;
  quotePrecision: number;
  underlyingType: string;
  triggerProtect: string;
  liquidationFee: string;
  marketTakeBound: string;
  maxMoveOrderLimit: number;
  filters: any[];
  orderTypes: string[];
  timeInForce: string[];
}
