import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherResponse, ForecastResponse } from './models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = import.meta.env['NG_APP_API_URL'];
  private apiKey = import.meta.env['NG_APP_API_KEY'];
  private storageKey = 'savedCities';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http
      .get<WeatherResponse>(
        `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`,
      )
      .pipe(catchError(this.handleError));
  }

  getForecast(lat: number, lon: number): Observable<ForecastResponse> {
    return this.http
      .get<ForecastResponse>(
        `${this.baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`,
      )
      .pipe(catchError(this.handleError));
  }

  saveCity(city: string): void {
    console.log(city);
    const cities = this.getSavedCities();
    console.log(cities);

    if (!cities.includes(city)) {
      cities.push(city);
      localStorage.setItem(this.storageKey, JSON.stringify(cities));
    }
  }

  getSavedCities(): string[] {
    const cities = localStorage.getItem(this.storageKey);
    console.log(cities);
    return cities ? JSON.parse(cities) : [];
  }

  removeCity(city: string): void {
    let cities = this.getSavedCities();
    cities = cities.filter((c) => c !== city);
    localStorage.setItem(this.storageKey, JSON.stringify(cities));
    localStorage.removeItem(`forecast_${city}`);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
