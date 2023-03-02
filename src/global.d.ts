interface iPlace {
    name: string;
    lat: number;
    lon: number;
}
interface IWeather {
    temp_max: number;
    temp_min: number;
    date: string;
    time: string;
    icon: string;
}

interface iAction {
    type: string,
    payload: any
}

interface iModal {
    array: IWeather[],
    closeFunction: () => void
}