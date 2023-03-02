import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../../../store/context/StorageContext"

const Location: React.FC = () => {
    const { newPlace } = useContext(StorageContext)

    return (
        <>
            <section className="placeName">
                <h2>{newPlace}</h2>
            </section>
        </>
    )
}

export default Location;