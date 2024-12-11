import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse } from '../../services/models'; // Adjust the path as per your project structure
import { CityCardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CityCardComponent],
})
export class HomeComponent {
  cities: WeatherResponse[] = [];
  loading = false;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const savedCities = this.weatherService.getSavedCities();
    savedCities.forEach((cityName) => this.addCity(cityName));
  }

  private addCity(cityName: string) {
    this.loading = true;
    this.error = null;
    this.weatherService.getWeather(cityName).subscribe({
      next: (data: WeatherResponse) => {
        this.loading = false;
        if (data) {
          this.cities.push(data);
          this.weatherService.saveCity(cityName);
        } else {
          this.error = 'City not found';
        }
      },
      error: (err: string) => {
        this.loading = false;
        this.error = err;
      },
    });
  }

  submitCity(cityName: string, event?: Event): void {
    // Reorder parameters
    event?.preventDefault();
    if (!cityName.trim()) return;

    this.addCity(cityName);
  }

  removeCity(cityName: string): void {
    this.cities = this.cities.filter((city) => city.name !== cityName);
    this.weatherService.removeCity(cityName); // Ensure removal from local storage
  }
}
