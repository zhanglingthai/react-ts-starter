import * as actionTypes from "./action-types";
import { HomeAction, Home, DispatchType } from "./types";

export function addArticle(article: Home) {
  const action: HomeAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: Home) {
  const action: HomeAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: HomeAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
