import weatherIMG from '../../assets/weather-forecast.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src={weatherIMG} alt="Imagem do ícone de clima" />
                </div>
                <div className='searchBar'>
                    <input type="text" />
                    <button>Procurar</button>
                </div>
            </div>
        </>
    )
};

export default Header;