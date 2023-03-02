export const setWeatherDaysAction = (weatherDays : IWeather[]) => {
    return {
        type: "SET_DAY_WEATHER",
        payload: weatherDays
    }
} 
