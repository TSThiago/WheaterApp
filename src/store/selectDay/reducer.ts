const DAY_INITIAL_VALUES = {
    days : []
}

const dayReducer = (state = DAY_INITIAL_VALUES, action: iAction) => {
    switch(action.type) {
        case "SET_SELECTED_DAY":
            return {
                ...state,
                days: action.payload
            }
        default:
            return state;
    }
}

export default dayReducer