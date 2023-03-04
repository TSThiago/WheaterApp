import adaptGetPlaceInfos from "../shared/adapters/adaptGetPlaceInfos"

const getPlaceInfos = async (place: string) => {
    place.split('').join('_')
    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + place + '&appid=febfe56ed42722d4c8aed44ff8d064a3')
        .then(res => res.json())
    const adaptedResponse = adaptGetPlaceInfos(response[0])
    return adaptedResponse;
}

export default getPlaceInfos;