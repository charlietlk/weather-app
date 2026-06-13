package com.weatherapp.client;

import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import io.github.cdimascio.dotenv.Dotenv;

public class WeatherClient {

    private static final Dotenv dotenv = Dotenv.load();

    private final String apiKey = dotenv.get("OPENWEATHER_API_KEY");

    public String getWeatherJson(String city) {

        try {

            String encodedCity = URLEncoder.encode(city, StandardCharsets.UTF_8);

            String url = String.format(
                    "https://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&units=metric"
                    , encodedCity
                    , apiKey
            );

            URI uri = new URI(url);

            HttpClient client = HttpClient.newHttpClient();

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(uri)
                    .GET()
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            return response.body();

        }

catch (Exception e) {
            e.printStackTrace();
            return "{\"error\": \"Couldnt get data\"}";
}

    }
}