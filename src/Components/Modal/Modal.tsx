import { useContext, useState } from 'react'
import { StorageContext } from '../../store/context/StorageContext'
import '../../styles/Modal.scss'
import store from '../../store'

const Modal: React.FC = () => {
    const { setModal } = useContext(StorageContext)
    const { selectedDay, weatherDays } = store.getState()
    const [minTemp, setMinTemp] = useState(1000)
    const [maxTemp, setMaxTemp] = useState(0)
    let array: IWeather[] = []

    const filterWeathers = () => {
        weatherDays.weathers.map((weather: IWeather) => {
            if (weather.date === selectedDay.selectedDay) {
                array.push(weather)
            }
        array.map((weather: IWeather) => {
            if(weather.temp_max > maxTemp){
                setMaxTemp(weather.temp_max)
            }
            if(weather.temp_min < minTemp){
                setMinTemp(weather.temp_min)
            }
        })
        })
    }

    filterWeathers()

    return (
        <>
            <section className='backPart'>
                <div className="modal">
                    <div className='closeButton'>
                        <button onClick={() => setModal(false)}>X</button>
                    </div>
                    <div className="modalUpside">
                        <div className="currentTemp">
                            <span>{array[3].temp.toFixed()}°</span>
                        </div>
                        <div className="min_maxTemp">
                            <span>{maxTemp.toFixed()}°</span>
                            <span>{minTemp.toFixed()}°</span>
                        </div>
                    </div>
                    <div className="modalBottom">
                        {array.map(day => {
                            return (
                                <div key={day.time} className="wheater">
                                    <h5>{day.time}H</h5>
                                    <img src={day.icon} alt="Weather Icon" />
                                    <p>{day.temp_max.toFixed()}°</p>
                                    <p>{day.temp_min.toFixed()}°</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal;