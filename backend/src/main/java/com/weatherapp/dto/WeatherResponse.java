package com.weatherapp.dto;

public class WeatherResponse {

    private String city;
    private String country;
    private double temperature;
    private double feelsLike;
    private int humidity;
    private double pressure;
    private double wind;
    private String condition;
    private String icon;

    public WeatherResponse() {
    }

    public WeatherResponse(
            String city,
            String country,
            double temperature,
            double feelsLike,
            int humidity,
            double pressure,
            double wind,
            String condition,
            String icon)
    {
        this.city = city;
        this.country = country;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.pressure = pressure;
        this.wind = wind;
        this.condition = condition;
        this.icon = icon;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public double getTemperature() {
        return temperature;
    }

    public double getFeelsLike() {
        return feelsLike;
    }

    public int getHumidity() {
        return humidity;
    }

    public double getPressure() {
        return pressure;
    }

    public double getWind() {
        return wind;
    }

    public String getCondition() {
        return condition;
    }

    public String getIcon() {
        return icon;
    }
}
