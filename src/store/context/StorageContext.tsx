import React, { useState, createContext, ReactNode } from "react";

interface iContext {
    newPlace: string;
    setNewPlace: React.Dispatch<React.SetStateAction<string>>;
    lat: number,
    setLat: React.Dispatch<React.SetStateAction<number>>;
    lon: number;
    setLon: React.Dispatch<React.SetStateAction<number>>;
    weatherDays: IWeather[];
    setWeatherDays: React.Dispatch<React.SetStateAction<IWeather[]>>
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const StorageContext = createContext<iContext>({ newPlace: '', setNewPlace: () => { }, lat: 0, setLat: () => { }, lon: 0, setLon: () => { }, weatherDays: [], setWeatherDays: () => { }, modal: false, setModal: () => { } });

export const StorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [newPlace, setNewPlace] = useState('')
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [weatherDays, setWeatherDays] = useState<IWeather[]>([])
    const [modal, setModal] = useState(false)

    return (
        <StorageContext.Provider value={{ newPlace, setNewPlace, lat, setLat, lon, setLon, weatherDays, setWeatherDays, modal, setModal }}>
            {children}
        </StorageContext.Provider>
    )
}