import { Observer } from 'rxjs';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer<WeatherData> {
  private currentPressure = 29.92;
  private lastPressure: number;
  next: (value: WeatherData) => void;
  error: (err: any) => void;
  complete: () => void;

  constructor(private weatherData: WeatherData) {
    this.weatherData.addObserver(this.update.bind(this));
  }

  update() {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display();
  }

  display() {
    console.log('Forecast: ');
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure === this.lastPressure) {
      console.log('More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}
