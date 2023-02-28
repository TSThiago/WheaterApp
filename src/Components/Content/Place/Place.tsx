import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../../../Context/StorageContext"

const Location: React.FC<ILocation> = (props) => {
    const { newPlace, setNewPlace } = useContext(StorageContext)

    const getInfos = async () => {
        const Infos = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + newPlace + '&limit=5&appid=febfe56ed42722d4c8aed44ff8d064a3')
            .then(res => res.json())
        setNewPlace(Infos[0].name)
        console.log(Infos)
    }

    useEffect(() => {
        getInfos()
    }, [])

    return (
        <>
            <div className="placeName">
                <h2>{newPlace}</h2>
            </div>
        </>
    )
}

export default Location;