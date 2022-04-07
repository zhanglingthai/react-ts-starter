import { combineReducers } from "redux";
import homeReducer from "./module/home";
import { HomeState } from "./module/home/types";

export interface IRootReducer {
  homeReducer: HomeState;
}

const rootReducer = combineReducers<IRootReducer>({
  homeReducer,
});

export default rootReducer;
