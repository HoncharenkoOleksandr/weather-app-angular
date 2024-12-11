import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityCardComponent } from './card.component';
import { WeatherService } from '../../services/weather.service';
import { of } from 'rxjs';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getForecast',
    ]);

    await TestBed.configureTestingModule({
      imports: [CityCardComponent], // Standalone component
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents();

    weatherService = TestBed.inject(
      WeatherService,
    ) as jasmine.SpyObj<WeatherService>;
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;

    component.city = {
      coord: { lat: 40.7128, lon: -74.006 },
      weather: [
        { main: 'Rain', description: 'light rain', id: 1, icon: '10d' },
      ],
      main: { temp: 20 },
      name: 'New York',
    } as any;

    weatherService.getForecast.and.returnValue(of({ list: [] } as any));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle forecast visibility', () => {
    expect(component.forecastVisible).toBeFalse();
    component.toggleForecast();
    expect(component.forecastVisible).toBeTrue();
  });

  it('should load the forecast on init', () => {
    expect(weatherService.getForecast).toHaveBeenCalledWith(40.7128, -74.006);
  });

  it('should format dates correctly', () => {
    const formattedDate = component.formatDate('2024-12-11 09:00:00');
    expect(formattedDate).toContain('Wed');
  });
});
