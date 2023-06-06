import { Observer, Subject } from 'rxjs';

export class WeatherData {
  private temperature: number;
  private humidity: number;
  private pressure: number;
  private subject: Subject<void>;

  constructor() {
    this.subject = new Subject<void>();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getPressure() {
    return this.pressure;
  }

  addObserver(observer: Observer<void>) {
    this.subject.subscribe(observer);
  }

  private notifyObservers() {
    this.subject.next();
  }
}
