import { legacy_createStore } from "redux";
import flightReducer from "./FlightBook/flightReducer";

const store = legacy_createStore(flightReducer);

export default store;
