import { Observable, Observer } from 'rxjs';
import { WeatherData } from './WeatherData';
import { DisplayElement } from './DisplayElement';

export class CurrentConditionsDisplay implements Observer<any>, DisplayElement {
  private temperature: number;
  private humidity: number;

  constructor(private weatherData: WeatherData) {
    weatherData.addObserver(this.update.bind(this));
  }
  next: (value: any) => void;
  error: (err: any) => void;
  complete: () => void;

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  display() {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`,
    );
  }
}
