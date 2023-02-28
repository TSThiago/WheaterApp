import React, { useState, createContext, ReactNode } from "react";

interface iContext {
    newPlace: string;
    setNewPlace: React.Dispatch<React.SetStateAction<string>>;
    lat: number,
    setLat: React.Dispatch<React.SetStateAction<number>>;
    lon: number;
    setLon: React.Dispatch<React.SetStateAction<number>>
}

export const StorageContext = createContext<iContext>({ newPlace: '', setNewPlace: () => { }, lat: 0, setLat: () => { }, lon: 0, setLon: () => { } });

export const StorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [newPlace, setNewPlace] = useState('')
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)

    return (
        <StorageContext.Provider value={{ newPlace, setNewPlace, lat, setLat, lon, setLon }}>
            {children}
        </StorageContext.Provider>
    )
}