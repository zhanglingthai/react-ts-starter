import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./middlewares/logger";
import reducer from "./reducer";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(
  middlewareEnhancer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducer, composedEnhancers);

export default store;
