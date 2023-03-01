import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../../../Context/StorageContext"

const Location: React.FC = (props) => {
    const { newPlace } = useContext(StorageContext)

    return (
        <>
            <div className="placeName">
                <h2>{newPlace}</h2>
            </div>
        </>
    )
}

export default Location;