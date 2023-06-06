import { Observer } from 'rxjs';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer<WeatherData> {
  private maxTemp = 0.0;
  private minTemp = 200;
  private tempSum = 0.0;
  private numReadings = 0;

  constructor(private weatherData: WeatherData) {
    this.weatherData.addObserver(this.update.bind(this));
  }
  next: (value: WeatherData) => void;
  error: (err: any) => void;
  complete: () => void;

  update() {
    const temp = this.weatherData.getTemperature();
    this.tempSum += temp;
    this.numReadings++;

    if (temp > this.maxTemp) {
      this.maxTemp = temp;
    }

    if (temp < this.minTemp) {
      this.minTemp = temp;
    }

    this.display();
  }

  display() {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`,
    );
  }
}
