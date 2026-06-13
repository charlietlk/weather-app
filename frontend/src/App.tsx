import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import type { Weather } from "../types/Weather";
import { getBackgroundImage } from "./utils/getBackgroundImage";
import getWeather from "./api/WeatherApi";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeatherData(data);
    } catch {
      setError("Weather request failed");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const backgroundImage = getBackgroundImage(weatherData?.icon ?? "");

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>Check the weather anywhere</h1>
      <h2>Enter a city name to see the latest weather updates</h2>
      <SearchBar onSearch={handleSearch} />
      {loading && !weatherData && (
        <p className="status-message loading-message">Loading...</p>
      )}

      {error && <p className="status-message error-message">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}
