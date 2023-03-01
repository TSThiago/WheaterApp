import { combineReducers, createStore } from "redux";
import weatherReducer from "./daysWeather/reducer";

const reducers = combineReducers({
    weatherDays: weatherReducer,
})

const store = createStore(reducers)

export default store;