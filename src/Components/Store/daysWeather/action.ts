export const setWeatherDaysAction = (weatherDays : IInfos[]) => {
    return {
        type: "SET_DAY_WEATHER",
        payload: weatherDays
    }
} 
