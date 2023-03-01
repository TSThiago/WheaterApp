interface iPlace {
    name: string;
    lat: number;
    lon: number;
}
interface IWeather {
    temp_max: number;
    temp_min: number;
    dt_txt: string;
    icon: string;
}

interface iAction {
    type: string,
    payload: any
}

