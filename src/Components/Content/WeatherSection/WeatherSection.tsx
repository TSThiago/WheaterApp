import { useEffect, useState, useContext } from "react"
import { setWeatherDaysAction } from "../../Store/daysWeather/action"
import store from "../../Store"
import { StorageContext } from "../../../Context/StorageContext"

const WeatherSection = () => {
    const { newPlace } = useContext(StorageContext)
    const { weatherDays } = store.getState()
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)

    const getInfos = async () => {
        const Infos = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + newPlace + '&limit=5&appid=febfe56ed42722d4c8aed44ff8d064a3')
            .then(res => res.json())
            console.log(Infos)
        setLat(Infos[0].lat)
        setLon(Infos[0].lon)
    }

    const getWeather = async () => {
        const Weather = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=febfe56ed42722d4c8aed44ff8d064a3&units=metric&lang=pt')
            .then(res => res.json())
        let index: number = 0
        let array = []
        while (index < 40) {
            let newInfos = {
                latitude: lat,
                longitude: lon,
                temp_max: Weather.list[index].main.temp_max,
                temp_min: Weather.list[index].main.temp_min,
                dt_txt: Weather.list[index].dt_txt,
                icon: "http://openweathermap.org/img/w/" + Weather.list[index].weather[0].icon + ".png"
            }
            array.push(newInfos)
            index = index + 4
        }
        store.dispatch(setWeatherDaysAction(array))
        console.log(weatherDays)
    }

    useEffect(() => {
        getInfos()
    }, [])

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <>
            <div className="weatherSection">
                <h3>Próximos Dias </h3>
                {weatherDays.weathers.map((weather: IInfos) => {
                    return (
                        <div key={weather.dt_txt} className="dayWeather">
                            <div className="day">
                                <span>{weather.dt_txt}</span>
                            </div>
                            <div className="temperature">
                                <span>{weather.temp_max.toFixed()}°</span>
                                <span>{weather.temp_min.toFixed()}°</span>
                            </div>
                            <div className="weather">
                                <img src={weather.icon} alt="Weather icon" />
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default WeatherSection;