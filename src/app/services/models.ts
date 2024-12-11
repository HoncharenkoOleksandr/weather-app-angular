export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherInfo[];
  base: string;
  main: {
    temp: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number; // Optional as not all responses might include gust
  };
  clouds: {
    all: number;
  };
  dt: number; // Unix timestamp
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number; // Unix timestamp
    sunset: number; // Unix timestamp
  };
  timezone: number; // Shift in seconds from UTC
  id: number; // City ID
  name: string; // City name
  cod: number; // Internal parameter
}

export interface WeatherInfo {
  id: number; // Weather condition id
  main: WeatherMain;
  description: string; // Weather condition within the group
  icon: string; // Weather icon id
}

export enum WeatherMain {
  Ash = 'Ash',
  Clear = 'Clear',
  Clouds = 'Clouds',
  Drizzle = 'Drizzle',
  Dust = 'Dust',
  Fog = 'Fog',
  Haze = 'Haze',
  Mist = 'Mist',
  Rain = 'Rain',
  Sand = 'Sand',
  Snow = 'Snow',
  Smoke = 'Smoke',
  Squall = 'Squall',
  Tornado = 'Tornado',
  Thunderstorm = 'Thunderstorm',
}

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: City;
}

export interface Forecast {
  dt: number;
  main: MainForecast;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: SysForecast;
  dt_txt: string;
}

export interface MainForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Rain {
  '3h': number;
}

export interface SysForecast {
  pod: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
