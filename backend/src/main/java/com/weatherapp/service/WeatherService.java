package com.weatherapp.service;

import com.weatherapp.adapter.OpenWeatherAdapter;
import com.weatherapp.dto.WeatherResponse;

public class WeatherService {

    private final OpenWeatherAdapter openWeatherAdapter = new OpenWeatherAdapter();

    public WeatherResponse getWeather(String city) {
        return openWeatherAdapter.getWeather(city);
    }
}