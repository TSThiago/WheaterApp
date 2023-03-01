const adaptGetPlaceInfos = (place: any): iPlace => {
    return {
        name: place.name,
        lat: place.lat,
        lon: place.lon
    }
}

export default adaptGetPlaceInfos;