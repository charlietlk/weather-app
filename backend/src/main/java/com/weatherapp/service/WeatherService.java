package com.weatherapp.service;

import com.weatherapp.client.WeatherClient;
import com.weatherapp.dto.WeatherResponse;
import org.json.JSONArray;
import org.json.JSONObject;

public class WeatherService {

    private final WeatherClient weatherClient = new WeatherClient();

    public WeatherResponse getWeather(String city) {

        String rawJson = weatherClient.getWeatherJson(city);

        JSONObject root = new JSONObject(rawJson);

        String cityName = root.getString("name");

        JSONObject sysObject = root.getJSONObject("sys");
        String country = sysObject.getString("country");

        JSONObject mainObject = root.getJSONObject("main");
        double temp = mainObject.getDouble("temp");
        double feelsLike = mainObject.getDouble("feels_like");
        int humidity = mainObject.getInt("humidity");
        double pressure = mainObject.getDouble("pressure");

        JSONObject wind = root.getJSONObject("wind");
        double windSpeed = wind.getDouble("speed");

        JSONArray weatherArray = root.getJSONArray("weather");
        JSONObject firstWeatherElement = weatherArray.getJSONObject(0);

        String condition = firstWeatherElement.getString("description");
        String icon = firstWeatherElement.getString("icon");

        WeatherResponse response = new WeatherResponse(
                cityName,
                country,
                temp,
                feelsLike,
                humidity,
                pressure,
                windSpeed,
                condition,
                icon
        );

        return response;
    }
}