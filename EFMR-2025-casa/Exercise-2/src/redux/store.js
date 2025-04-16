import { legacy_createStore } from "redux";
import coursReducer from "./reducers/coursReducer";

const store = legacy_createStore(coursReducer)

export default store