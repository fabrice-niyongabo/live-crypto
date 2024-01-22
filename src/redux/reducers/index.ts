import { combineReducers } from "redux";
import marketDataReducer from "./marketData";
const rootReducer = combineReducers({
  marketDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
