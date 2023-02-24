import { useEffect, useState } from "react"
interface IInfos {
    temp_max: number;
    temp_min: number;
    dt_txt: string;
    icon: string;
}

const WeatherSection = () => {
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [infos, setInfos] = useState<IInfos[] | []>([])

    const getInfos = async () => {
        const Infos = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=São_Paulo&limit=5&appid=' + process.env.REACT_APP_ID)
            .then(res => res.json())
        setLat(Infos[0].lat)
        setLon(Infos[0].lon)
    }

    const getWeather = async () => {
        const Weather = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + process.env.REACT_APP_ID + '&units=metric&lang=pt')
            .then(res => res.json())
        let index: number = 3
        let array = []
        while (index < 40) {
            let newInfos = {
                temp_max: Weather.list[index].main.temp_max,
                temp_min: Weather.list[index].main.temp_min,
                dt_txt: Weather.list[index].dt_txt,
                icon: "http://openweathermap.org/img/w/" + Weather.list[index].weather[0].icon + ".png"
            }
            array.push(newInfos)
            index = index + 8
        }
        setInfos(array)
    }

    useEffect(() => {
        getInfos()
    }, [])

    useEffect(() => {
        getWeather()
    }, [getInfos()])

    return (
        <>
            <div className="weatherSection">
                <h3>Próximos Dias </h3>
                {infos.map(weather => {
                    return (
                        <div className="dayWeather">
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