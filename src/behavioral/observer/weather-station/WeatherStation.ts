import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { ForecastDisplay } from "./ForecastDisplay";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { WeatherData } from "./WeatherData";

const main = () => {
  const weatherData = new WeatherData();

  const currentConditions = new CurrentConditionsDisplay(weatherData);
  const statisticsDisplay = new StatisticsDisplay(weatherData);
  const forecastDisplay = new ForecastDisplay(weatherData);

  weatherData.setMeasurements(80, 65, 30.4);
  weatherData.setMeasurements(82, 70, 29.2);
  weatherData.setMeasurements(78, 90, 29.2);
};

main();