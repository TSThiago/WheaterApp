import { useContext, useEffect, useState } from "react"
import { StorageContext } from "../../../context/StorageContext"

const Location: React.FC = (props) => {
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