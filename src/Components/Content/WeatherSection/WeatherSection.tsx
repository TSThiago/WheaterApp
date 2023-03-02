import { useEffect, useState, useContext } from "react"
import { StorageContext } from "../../../store/context/StorageContext"
import getWeatherInfos from "../../../services/getWeatherInfos"
import getPlaceInfos from "../../../services/getPlaceInfos"
import Modal from "../../Modal/Modal"
import moment from "moment"


const WeatherSection = () => {
    let { weatherDays, setWeatherDays, newPlace } = useContext(StorageContext)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getPlaceInfos(newPlace)
            .then(function (placeInfos) {
                return getWeatherInfos(placeInfos.lat, placeInfos.lon)
            }).then(function (weatherInfos) {
                let weathers: IWeather[] = []
                let index: number = 0
                while (index < 40) {
                    weathers.push(weatherInfos[index])
                    index = index + 8
                }
                // weatherInfos.forEach(weather => {

                // })

                setWeatherDays(weathers)
            })
    }, [newPlace])

    return (
        <>
            <section className="weatherSection">
                <h3>Próximos Dias </h3>
                {weatherDays.map((weather: IWeather) => {
                    return (
                        <div key={weather.date} className="dayWeather">
                            <div className="day">
                                <button onClick={() => setModal(true)}>{weather.date}</button>
                                <div>
                                    {modal ? <Modal closeFunction={() => setModal(false)} array={weatherDays} /> : null}
                                </div>
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


            </section>
        </>
    )
}

export default WeatherSection;