const WEATHER_INITIAL_STATE = {
    weathers: []
}

const weatherReducer = (state = WEATHER_INITIAL_STATE, action: iAction) => {
    switch (action.type) {
        case "SET_DAY_WEATHER":
            return {
                ...state,
                weathers: action.payload
            };
        default:
            return state;
    }
}

export default weatherReducer;