const adaptGetWeatherInfos = (weathers: any[]): IWeather[] => {
    const adaptedWeathers : IWeather[] = weathers.map(weather => {
        return {
            temp_max: weather.main.temp_max,
            temp_min: weather.main.temp_min,
            dt_txt: weather.dt_txt,
            icon: 'https://openweathermap.org/img/wn/'+weather.weather[0].icon+'.png'
        }
    })

    return adaptedWeathers;
}

export default adaptGetWeatherInfos;