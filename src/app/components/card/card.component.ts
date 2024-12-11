import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse, ForecastResponse } from '../../services/models';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CityCardComponent implements OnInit {
  @Input() city: WeatherResponse | undefined;
  @Output() remove = new EventEmitter<void>();
  forecast: ForecastResponse | null = null;
  forecastVisible = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    if (this.city && !this.forecast) {
      console.log(this.city.coord.lat, this.city.coord.lon);
      this.weatherService
        .getForecast(this.city.coord.lat, this.city.coord.lon)
        .subscribe((forecast) => {
          this.forecast = forecast;
        });
    }
  }

  toggleForecast(): void {
    this.forecastVisible = !this.forecastVisible;
  }

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString('en-US', options); // Adjust locale as needed
  }
}
