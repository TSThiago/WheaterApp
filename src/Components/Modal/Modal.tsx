import './Modal.css'

const Modal: React.FC<iModal> = (props) => {
    return (
        <>
            <section className='backPart'>
                <div className="modal">
                    <div className='closeButton'>
                        <button onClick={props.closeFunction}>X</button>
                    </div>
                    <div className="modalUpside">
                        <div className="currentTemp">
                            <span>27°</span>
                        </div>
                        <div className="min_maxTemp">
                            <span>29°</span>
                            <span>23°</span>
                        </div>
                    </div>

                    <div className="modalBottom">
                        {props.array.map(weather => {
                            return (
                                <div className="wheater">
                                    <h5>{weather.time}</h5>
                                    <img src={weather.icon} alt="Weather Icon" />
                                    <p>{weather.temp_max.toFixed()}°</p>
                                    <p>{weather.temp_min.toFixed()}°</p>
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