import moment from 'moment'

const adaptGetWeatherInfos = (weathers: any[]): IWeather[] => {
    const adaptedWeathers : IWeather[] = weathers.map(weather => {
        return {
            temp_max: weather.main.temp_max,
            temp_min: weather.main.temp_min,
            date: moment(weather.dt_txt, ).format("DD MM YYYY"),
            time: moment(weather.dt_txt, ).format("hh"),
            icon: 'https://openweathermap.org/img/wn/'+weather.weather[0].icon+'.png'
        }
    })
    console.log(adaptedWeathers)
    return adaptedWeathers;
}

export default adaptGetWeatherInfos;