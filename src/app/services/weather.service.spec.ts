import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherMain, WeatherResponse } from './models';

const mockWeatherResponse: WeatherResponse = {
  coord: {
    lon: 30.5167,
    lat: 50.4333,
  },
  weather: [
    {
      id: 804,
      main: WeatherMain.Clouds,
      description: 'overcast clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 0.96,
    feels_like: 0.96,
    temp_min: 0.92,
    temp_max: 0.96,
    pressure: 1020,
    humidity: 98,
    sea_level: 1020,
    grnd_level: 1003,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
    deg: 353,
    gust: 1.34,
  },
  clouds: {
    all: 100,
  },
  dt: 1733882378,
  sys: {
    type: 2,
    id: 2003742,
    country: 'UA',
    sunrise: 1733896121,
    sunset: 1733925249,
  },
  timezone: 7200,
  id: 703448,
  name: 'Kyiv',
  cod: 200,
};

const mockForecastResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1733907600,
      main: {
        temp: 10.92,
        feels_like: 10.55,
        temp_min: 10.92,
        temp_max: 11.05,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 95,
        temp_kf: -0.13,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.87,
        deg: 159,
        gust: 4.74,
      },
      visibility: 103,
      pop: 1,
      rain: {
        '3h': 2.01,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-11 09:00:00',
    },
    {
      dt: 1733918400,
      main: {
        temp: 11.18,
        feels_like: 10.89,
        temp_min: 11.18,
        temp_max: 11.71,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 97,
        temp_kf: -0.53,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.16,
        deg: 164,
        gust: 11.9,
      },
      visibility: 382,
      pop: 1,
      rain: {
        '3h': 5.79,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-11 12:00:00',
    },
    {
      dt: 1733929200,
      main: {
        temp: 12.29,
        feels_like: 12.11,
        temp_min: 12.29,
        temp_max: 12.97,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1004,
        humidity: 97,
        temp_kf: -0.68,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.77,
        deg: 164,
        gust: 17.52,
      },
      visibility: 314,
      pop: 1,
      rain: {
        '3h': 3.57,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-11 15:00:00',
    },
    {
      dt: 1733940000,
      main: {
        temp: 15.1,
        feels_like: 15.12,
        temp_min: 15.1,
        temp_max: 15.1,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 998,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 11.54,
        deg: 175,
        gust: 22.75,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.74,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-11 18:00:00',
    },
    {
      dt: 1733950800,
      main: {
        temp: 16.41,
        feels_like: 16.38,
        temp_min: 16.41,
        temp_max: 16.41,
        pressure: 997,
        sea_level: 997,
        grnd_level: 995,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.05,
        deg: 205,
        gust: 17.54,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 12.34,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-11 21:00:00',
    },
    {
      dt: 1733961600,
      main: {
        temp: 12.86,
        feels_like: 12.66,
        temp_min: 12.86,
        temp_max: 12.86,
        pressure: 996,
        sea_level: 996,
        grnd_level: 995,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.73,
        deg: 219,
        gust: 12.51,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 5.86,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-12 00:00:00',
    },
    {
      dt: 1733972400,
      main: {
        temp: 6.37,
        feels_like: 1.51,
        temp_min: 6.37,
        temp_max: 6.37,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.59,
        deg: 280,
        gust: 14.66,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.76,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-12 03:00:00',
    },
    {
      dt: 1733983200,
      main: {
        temp: 4.71,
        feels_like: -0.44,
        temp_min: 4.71,
        temp_max: 4.71,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 8.75,
        deg: 268,
        gust: 13.11,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-12 06:00:00',
    },
    {
      dt: 1733994000,
      main: {
        temp: 2.54,
        feels_like: -3.13,
        temp_min: 2.54,
        temp_max: 2.54,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 8.3,
        deg: 261,
        gust: 14.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-12 09:00:00',
    },
    {
      dt: 1734004800,
      main: {
        temp: 1.81,
        feels_like: -3.86,
        temp_min: 1.81,
        temp_max: 1.81,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 7.7,
        deg: 248,
        gust: 18.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-12 12:00:00',
    },
    {
      dt: 1734015600,
      main: {
        temp: 2.82,
        feels_like: -2.62,
        temp_min: 2.82,
        temp_max: 2.82,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1020,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 7.89,
        deg: 251,
        gust: 15.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-12 15:00:00',
    },
    {
      dt: 1734026400,
      main: {
        temp: 4.13,
        feels_like: -1.33,
        temp_min: 4.13,
        temp_max: 4.13,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1021,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 9.19,
        deg: 255,
        gust: 13.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-12 18:00:00',
    },
    {
      dt: 1734037200,
      main: {
        temp: 1.96,
        feels_like: -3.68,
        temp_min: 1.96,
        temp_max: 1.96,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 7.72,
        deg: 283,
        gust: 15.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-12 21:00:00',
    },
    {
      dt: 1734048000,
      main: {
        temp: 1.01,
        feels_like: -4.42,
        temp_min: 1.01,
        temp_max: 1.01,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1028,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 6.55,
        deg: 279,
        gust: 13.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-13 00:00:00',
    },
    {
      dt: 1734058800,
      main: {
        temp: 0.26,
        feels_like: -4.96,
        temp_min: 0.26,
        temp_max: 0.26,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1030,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 5.68,
        deg: 279,
        gust: 11.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-13 03:00:00',
    },
    {
      dt: 1734069600,
      main: {
        temp: 0.16,
        feels_like: -4.47,
        temp_min: 0.16,
        temp_max: 0.16,
        pressure: 1033,
        sea_level: 1033,
        grnd_level: 1031,
        humidity: 42,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 4.59,
        deg: 268,
        gust: 9.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-13 06:00:00',
    },
    {
      dt: 1734080400,
      main: {
        temp: -0.05,
        feels_like: -4.68,
        temp_min: -0.05,
        temp_max: -0.05,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 1033,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 4.51,
        deg: 282,
        gust: 8.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-13 09:00:00',
    },
    {
      dt: 1734091200,
      main: {
        temp: -0.27,
        feels_like: -4.49,
        temp_min: -0.27,
        temp_max: -0.27,
        pressure: 1037,
        sea_level: 1037,
        grnd_level: 1035,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 3.82,
        deg: 295,
        gust: 7.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-13 12:00:00',
    },
    {
      dt: 1734102000,
      main: {
        temp: 0.65,
        feels_like: -3.3,
        temp_min: 0.65,
        temp_max: 0.65,
        pressure: 1038,
        sea_level: 1038,
        grnd_level: 1037,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 3.73,
        deg: 296,
        gust: 5.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-13 15:00:00',
    },
    {
      dt: 1734112800,
      main: {
        temp: 2.8,
        feels_like: -1.04,
        temp_min: 2.8,
        temp_max: 2.8,
        pressure: 1038,
        sea_level: 1038,
        grnd_level: 1036,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 4.33,
        deg: 289,
        gust: 6.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-13 18:00:00',
    },
    {
      dt: 1734123600,
      main: {
        temp: 3.42,
        feels_like: -0.23,
        temp_min: 3.42,
        temp_max: 3.42,
        pressure: 1039,
        sea_level: 1039,
        grnd_level: 1037,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 4.25,
        deg: 306,
        gust: 5.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-13 21:00:00',
    },
    {
      dt: 1734134400,
      main: {
        temp: 1.76,
        feels_like: -2.11,
        temp_min: 1.76,
        temp_max: 1.76,
        pressure: 1041,
        sea_level: 1041,
        grnd_level: 1040,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 3.99,
        deg: 358,
        gust: 4.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-14 00:00:00',
    },
    {
      dt: 1734145200,
      main: {
        temp: 0.75,
        feels_like: -2.51,
        temp_min: 0.75,
        temp_max: 0.75,
        pressure: 1043,
        sea_level: 1043,
        grnd_level: 1041,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.9,
        deg: 9,
        gust: 4.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-14 03:00:00',
    },
    {
      dt: 1734156000,
      main: {
        temp: 0.03,
        feels_like: -2.99,
        temp_min: 0.03,
        temp_max: 0.03,
        pressure: 1043,
        sea_level: 1043,
        grnd_level: 1042,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 2.5,
        deg: 12,
        gust: 3.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-14 06:00:00',
    },
    {
      dt: 1734166800,
      main: {
        temp: -0.29,
        feels_like: -3.71,
        temp_min: -0.29,
        temp_max: -0.29,
        pressure: 1044,
        sea_level: 1044,
        grnd_level: 1043,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 2.85,
        deg: 22,
        gust: 3.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-14 09:00:00',
    },
    {
      dt: 1734177600,
      main: {
        temp: -0.32,
        feels_like: -3.74,
        temp_min: -0.32,
        temp_max: -0.32,
        pressure: 1046,
        sea_level: 1046,
        grnd_level: 1044,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 2.84,
        deg: 33,
        gust: 3.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-14 12:00:00',
    },
    {
      dt: 1734188400,
      main: {
        temp: 0.8,
        feels_like: -2.15,
        temp_min: 0.8,
        temp_max: 0.8,
        pressure: 1047,
        sea_level: 1047,
        grnd_level: 1045,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.58,
        deg: 57,
        gust: 2.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-14 15:00:00',
    },
    {
      dt: 1734199200,
      main: {
        temp: 2.63,
        feels_like: 0.76,
        temp_min: 2.63,
        temp_max: 2.63,
        pressure: 1045,
        sea_level: 1045,
        grnd_level: 1043,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 1.87,
        deg: 92,
        gust: 1.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-14 18:00:00',
    },
    {
      dt: 1734210000,
      main: {
        temp: 3.03,
        feels_like: 1.88,
        temp_min: 3.03,
        temp_max: 3.03,
        pressure: 1044,
        sea_level: 1044,
        grnd_level: 1042,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 1.38,
        deg: 113,
        gust: 1.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-14 21:00:00',
    },
    {
      dt: 1734220800,
      main: {
        temp: 2.82,
        feels_like: 0.64,
        temp_min: 2.82,
        temp_max: 2.82,
        pressure: 1044,
        sea_level: 1044,
        grnd_level: 1043,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 2.17,
        deg: 106,
        gust: 3.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-15 00:00:00',
    },
    {
      dt: 1734231600,
      main: {
        temp: 2.55,
        feels_like: -0.3,
        temp_min: 2.55,
        temp_max: 2.55,
        pressure: 1043,
        sea_level: 1043,
        grnd_level: 1042,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 2.83,
        deg: 89,
        gust: 5.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-15 03:00:00',
    },
    {
      dt: 1734242400,
      main: {
        temp: 2.61,
        feels_like: 0.5,
        temp_min: 2.61,
        temp_max: 2.61,
        pressure: 1042,
        sea_level: 1042,
        grnd_level: 1040,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 2.08,
        deg: 93,
        gust: 4.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-15 06:00:00',
    },
    {
      dt: 1734253200,
      main: {
        temp: 2.89,
        feels_like: 1.19,
        temp_min: 2.89,
        temp_max: 2.89,
        pressure: 1041,
        sea_level: 1041,
        grnd_level: 1039,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.76,
        deg: 79,
        gust: 3.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-15 09:00:00',
    },
    {
      dt: 1734264000,
      main: {
        temp: 3.28,
        feels_like: 1.84,
        temp_min: 3.28,
        temp_max: 3.28,
        pressure: 1040,
        sea_level: 1040,
        grnd_level: 1038,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.61,
        deg: 84,
        gust: 2.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-15 12:00:00',
    },
    {
      dt: 1734274800,
      main: {
        temp: 5.78,
        feels_like: 5.78,
        temp_min: 5.78,
        temp_max: 5.78,
        pressure: 1040,
        sea_level: 1040,
        grnd_level: 1038,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.28,
        deg: 120,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-15 15:00:00',
    },
    {
      dt: 1734285600,
      main: {
        temp: 7.91,
        feels_like: 6.3,
        temp_min: 7.91,
        temp_max: 7.91,
        pressure: 1037,
        sea_level: 1037,
        grnd_level: 1035,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.57,
        deg: 132,
        gust: 5.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-15 18:00:00',
    },
    {
      dt: 1734296400,
      main: {
        temp: 8.05,
        feels_like: 6.38,
        temp_min: 8.05,
        temp_max: 8.05,
        pressure: 1035,
        sea_level: 1035,
        grnd_level: 1033,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.68,
        deg: 114,
        gust: 4.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-12-15 21:00:00',
    },
    {
      dt: 1734307200,
      main: {
        temp: 7.75,
        feels_like: 6.14,
        temp_min: 7.75,
        temp_max: 7.75,
        pressure: 1034,
        sea_level: 1034,
        grnd_level: 1033,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.52,
        deg: 101,
        gust: 4.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-16 00:00:00',
    },
    {
      dt: 1734318000,
      main: {
        temp: 8.29,
        feels_like: 6.24,
        temp_min: 8.29,
        temp_max: 8.29,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1031,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.37,
        deg: 120,
        gust: 6.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-16 03:00:00',
    },
    {
      dt: 1734328800,
      main: {
        temp: 8.4,
        feels_like: 6.93,
        temp_min: 8.4,
        temp_max: 8.4,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1029,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.5,
        deg: 135,
        gust: 4.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-12-16 06:00:00',
    },
  ],
  city: {
    id: 5128581,
    name: 'New York',
    coord: {
      lat: 40.7127,
      lon: -74.006,
    },
    country: 'US',
    population: 8175133,
    timezone: -18000,
    sunrise: 1733919027,
    sunset: 1733952529,
  },
};

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    Object.defineProperty(import.meta, 'env', {
      value: {
        NG_APP_API_URL: 'https://api.openweathermap.org/data/2.5',
        NG_APP_API_KEY: '63b9dfb839396d8a566cb7db85315563',
      },
      writable: true,
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch weather data', () => {
    const mockResponse = { name: 'New York' };
    service.getWeather('New York').subscribe((response) => {
      expect(response).toEqual(mockWeatherResponse);
    });

    const req = httpMock.expectOne((req) =>
      req.url.includes('weather?q=New York'),
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch forecast data', () => {
    const mockResponse = { list: [] };
    service.getForecast(40.7128, -74.006).subscribe((response) => {
      expect(response).toEqual(mockForecastResponse);
    });

    const req = httpMock.expectOne((req) =>
      req.url.includes('forecast?lat=40.7128&lon=-74.0060'),
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
