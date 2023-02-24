import { useEffect, useState } from "react"

interface ILocation {
    children: string
}

const Location: React.FC<ILocation> = (props) => {
    const [place, setPlace] = useState('')

    const getInfos = async () => {
        const Infos = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=São_Paulo&limit=5&appid='+ process.env.REACT_APP_ID)
            .then(res => res.json())
        setPlace(Infos[0].name)
    }

    useEffect(() => {
        getInfos()
    }, [])

    return (
        <>
            <div className="placeName">
                <h2>{place}</h2>
            </div>
        </>
    )
}

export default Location;