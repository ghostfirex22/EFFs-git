import { legacy_createStore } from "redux";
import livreReducer from "./reducers/livreReducer";

const store = legacy_createStore(livreReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;

