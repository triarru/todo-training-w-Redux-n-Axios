import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // goi ham bat dong bo
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

