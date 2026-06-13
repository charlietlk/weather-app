package com.weatherapp;

import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;
import com.weatherapp.service.WeatherService;
import com.weatherapp.dto.WeatherResponse;

public class Main {
    public static void main(String[] args) {

        Javalin app = Javalin.create(config -> {
            config.bundledPlugins.enableCors(cors -> {
                cors.addRule(CorsPluginConfig.CorsRule::anyHost);
            });
        });

        WeatherService weatherService = new WeatherService();

        app.get("/weather", ctx -> {

            String city = ctx.queryParam("city");

            if (city == null || city.isEmpty()) {
                ctx.status(400).result("{\"error\": \"City parameter is required\"}");
                return;
            }

            try {
                WeatherResponse weatherData = weatherService.getWeather(city);
                ctx.json(weatherData);
            } catch (Exception e) {
                ctx.status(500).result("{\"error\": \"" + e.getMessage() + "\"}");
            }

        });

        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "7070"));
        app.start(port);
    }
}