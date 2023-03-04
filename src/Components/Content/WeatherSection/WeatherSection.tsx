import { useEffect, useContext } from "react"
import { StorageContext } from "../../../store/context/StorageContext"
import getWeatherInfos from "../../../services/getWeatherInfos"
import getPlaceInfos from "../../../services/getPlaceInfos"
import Modal from "../../Modal/Modal"
import { setSelectedDayAction } from "../../../store/selectedDay/action"
import { setWeatherDaysAction } from "../../../store/daysWeather/action"
import store from "../../../store"

const WeatherSection = () => {
    let { weatherDays, setWeatherDays, newPlace, modal, setModal } = useContext(StorageContext)

    useEffect(() => {
        getPlaceInfos(newPlace)
            .then(function (placeInfos) {
                return getWeatherInfos(placeInfos.lat, placeInfos.lon)
            }).then(function (weatherInfos) {
                store.dispatch(setWeatherDaysAction(weatherInfos))
                let weathers: IWeather[] = []
                let index: number = 0
                while (index < 40) {
                    weathers.push(weatherInfos[index])
                    index = index + 8
                }
                setWeatherDays(weathers)
            })
    }, [newPlace])

    const handleClickDay = (date: string) => {
        store.dispatch(setSelectedDayAction(date))
        setModal(true)
    }

    return (
        <>

            <section className="weatherSection">
                <h3>Próximos Dias </h3>
                {weatherDays.map((weather: IWeather) => {
                    return (
                        <div key={weather.date} className="dayWeather">
                            <div className="day">
                                <span onClick={() => handleClickDay(weather.date)}>{weather.date}</span>
                                <div>
                                    {modal ? <Modal /> : null}
                                </div>
                            </div>
                            <div className="temperature">
                                <span>{weather.temp_max.toFixed()}°</span>
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