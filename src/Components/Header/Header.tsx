import { useContext, useState, useEffect } from 'react';
import weatherIMG from '../../assets/weather-forecast.png'
import { StorageContext } from '../../store/context/StorageContext';

const Header = () => {
    const { setNewPlace, setWeatherDays } = useContext(StorageContext)
    const [place, setPlace] = useState('')

    const handlePlace = (e: React.FormEvent<HTMLInputElement>) => {
        setPlace(e.currentTarget.value)
    }

    const handleNewPlace = () => {
        setWeatherDays([])
        setNewPlace(place)
        setPlace('')
    }

    return (
        <>
            <header>
                <div className="icon">
                    <img src={weatherIMG} alt="Imagem do ícone de clima" />
                </div>
                <div className='searchBar'>
                    <input type="text" onChange={handlePlace} value={place} />
                    <button onClick={handleNewPlace}>Procurar</button>
                </div>
            </header>
        </>
    )
};

export default Header;