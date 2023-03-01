import { useEffect, useState, useContext } from "react"
import { StorageContext } from "../../../context/StorageContext"
import getWeatherInfos from "../../../services/getWeatherInfos"
import getPlaceInfos from "../../../services/getPlaceInfos"

const WeatherSection = () => {
    let { weatherDays, setWeatherDays, newPlace } = useContext(StorageContext)

    useEffect(() => {
        getPlaceInfos(newPlace)
            .then(function (placeInfos) {
                return getWeatherInfos(placeInfos.lat, placeInfos.lon)
            }).then(function (weatherInfos) {
                let weathers: IWeather[] = []
                let index: number = 0
                while (index < 40) {
                    weathers.push(weatherInfos[index])
                    index = index + 4
                }
                setWeatherDays(weathers)
            })
    }, [newPlace])

    return (
        <>
            <section className="weatherSection">
                <h3>Próximos Dias </h3>
                {weatherDays.map((weather: IWeather) => {
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
                <button >Modal</button>
            </section>
        </>
    )
}

export default WeatherSection;