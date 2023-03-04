import { combineReducers, createStore } from "redux";
import weatherReducer from "./daysWeather/reducer";
import selectedDayReducer from "./selectedDay/reducer"

const reducers = combineReducers({
    weatherDays: weatherReducer,
    selectedDay: selectedDayReducer
})

const store = createStore(reducers)

export default store;