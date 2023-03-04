const DAY_INITIAL_VALUES = {
    selectedDay : ''
}

const dayReducer = (state = DAY_INITIAL_VALUES, action: iAction) => {
    switch(action.type) {
        case "SET_SELECTED_DAY":
            return {
                ...state,
                selectedDay: action.payload
            }
        default:
            return state;
    }
}

export default dayReducer