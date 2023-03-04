import moment from 'moment'

const adaptGetWeatherInfos = (weathers: any[]): IWeather[] => {
    const adaptedWeathers : IWeather[] = weathers.map(weather => {
        return {
            temp: weather.main.temp,
            temp_max: weather.main.temp_max,
            temp_min: weather.main.temp_min,
            date: moment(weather.dt_txt).format("DD/MM/YYYY"),
            time: weather.dt_txt.substring(11, 13),
            icon: 'https://openweathermap.org/img/wn/'+weather.weather[0].icon+'.png'
        }
    })
    console.log(adaptedWeathers)
    return adaptedWeathers;
}

export default adaptGetWeatherInfos;