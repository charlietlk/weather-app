import type { Weather } from "../../types/Weather";
import { weatherSchema } from "../validation/weatherValidation";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:7070/";

export default async function getWeather(city: string): Promise<Weather> {
  const url = `${BASE_URL}weather?city=${encodeURIComponent(city)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  const data: Weather = await response.json();

  const result = weatherSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid weather data");
  }

  return result.data;
}
