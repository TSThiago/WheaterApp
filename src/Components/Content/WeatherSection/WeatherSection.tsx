import { useEffect, useState, useContext } from "react"
import { StorageContext } from "../../../Context/StorageContext"
import getWeatherInfos from "../../../services/getWeatherInfos"
import getPlaceInfos from "../../../services/getPlaceInfos"

const WeatherSection = () => {
    let { weatherDays, setWeatherDays, newPlace } = useContext(StorageContext)

    useEffect(() => {
        getPlaceInfos(newPlace)
            .then(function (placeInfos) {
                return getWeatherInfos(placeInfos.lat, placeInfos.lon)
            }).then(function (weatherInfos) {
                setWeatherDays(weatherInfos)
            })
    }, [newPlace])

    return (
        <>
            <div className="weatherSection">
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

            </div>
        </>
    )
}

export default WeatherSection;