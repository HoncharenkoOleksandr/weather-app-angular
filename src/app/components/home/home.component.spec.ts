import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { WeatherService } from '../../services/weather.service';
import { of, throwError } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
      'getWeather',
      'getSavedCities',
      'saveCity',
      'removeCity',
    ]);

    await TestBed.configureTestingModule({
      imports: [HomeComponent], 
      providers: [{ provide: WeatherService, useValue: weatherServiceSpy }],
    }).compileComponents();

    weatherService = TestBed.inject(
      WeatherService,
    ) as jasmine.SpyObj<WeatherService>;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    // Mock methods
    weatherService.getSavedCities.and.returnValue(['New York']);
    weatherService.getWeather.and.returnValue(
      of({
        name: 'New York',
        coord: { lat: 40.7128, lon: -74.006 },
        main: { temp: 25 },
        weather: [{ main: 'Clouds', description: 'few clouds', icon: '02d' }],
      } as any), 
    );

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load saved cities on init', () => {
    component.ngOnInit();
    expect(weatherService.getSavedCities).toHaveBeenCalled();
    expect(weatherService.getWeather).toHaveBeenCalledWith('New York');
    expect(component.cities.length).toBe(1);
  });

  it('should add a new city', () => {
    component.submitCity('London');
    expect(weatherService.getWeather).toHaveBeenCalledWith('London');
    expect(weatherService.saveCity).toHaveBeenCalledWith('London');
  });

  it('should remove a city', () => {
    console.log(component.cities);
    component.cities = [{ name: 'New York' } as any];
    console.log(component);

    component.removeCity('New York');
    console.log(component.cities);

    expect(component.cities.length).toBe(0);
    expect(weatherService.removeCity).toHaveBeenCalledWith('New York');
  });

  it('should handle errors gracefully when adding a city', () => {
    weatherService.getWeather.and.returnValue(
      throwError(() => 'City not found'),
    );
    component.submitCity('InvalidCity');
    expect(component.error).toBe('City not found');
  });
});
