import { ENV_API_ID } from "../shared/envs";
import adaptGetWeatherInfos from "../shared/adapters/adaptGetWeatherInfos";

const getWeatherInfos = async (latitude: number, longitude: number) => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&cnt=4&appid=febfe56ed42722d4c8aed44ff8d064a3&units=metric')
        .then(res => res.json())
    console.log(response)
    const adaptedWeathers = adaptGetWeatherInfos(response.list)

    return adaptedWeathers
};

export default getWeatherInfos;