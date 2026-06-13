import type { Weather } from "../../types/Weather";
import "./WeatherCard.css";

export default function WeatherCard({ weatherData }: { weatherData: Weather }) {
  const condition =
    weatherData.condition.charAt(0).toUpperCase() +
    weatherData.condition.slice(1);

  const temperature = Math.round(weatherData.temperature);
  const feelsLike = Math.round(weatherData.feelsLike);
  const wind = weatherData.wind.toFixed(1);

  return (
    <div className="weather-card">
      <h2>{weatherData.city}</h2>
      <h2>{weatherData.country}</h2>
      <div className="temperature-row">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt={weatherData.condition}
        />
        <p className="weather-temperature">Temperature: {temperature}°C </p>
        <p className="weather-feelslike">Feels Like: {feelsLike}°C </p>
      </div>
      <div>
        <p className="weather-condition">{condition}</p>
      </div>
      <div className="weather-details">
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Pressure: {weatherData.pressure} hPa</p>
        <p>Wind: {wind} m/s</p>
      </div>
    </div>
  );
}
