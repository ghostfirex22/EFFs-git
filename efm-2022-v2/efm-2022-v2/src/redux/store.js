import { legacy_createStore } from "redux";
import achatReducer from "./reducers/achatReducer";

const store = legacy_createStore(achatReducer)
export default store