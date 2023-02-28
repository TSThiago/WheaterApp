import { useContext, useState, useEffect } from 'react';
import weatherIMG from '../../assets/weather-forecast.png'
import { StorageContext } from '../../Context/StorageContext';
import store from '../Store';
import { setWeatherDaysAction } from '../Store/daysWeather/action';

const Header = () => {
    const { newPlace, setNewPlace, lat, setLat, lon, setLon } = useContext(StorageContext)
    const [place, setPlace] = useState('')

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
    const handlePlace = (e: React.FormEvent<HTMLInputElement>) => {
        setPlace(e.currentTarget.value)
    }

    const handleNewPlace = () => {
        setNewPlace(place)
        setPlace('')
    }

    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src={weatherIMG} alt="Imagem do ícone de clima" />
                </div>
                <div className='searchBar'>
                    <input type="text" onChange={handlePlace} value={place} />
                    <button onClick={handleNewPlace}>Procurar</button>
                </div>
            </div>
        </>
    )
};

export default Header;