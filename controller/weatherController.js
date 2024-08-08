var requests = require("requests");
const weatherDatas = require("../models/weatherModel");
const axios = require("axios");
require("dotenv").config();

const FETCH_WEATHER_DATA = async (req, res) => {
  try {
    const { placeName } = req.body;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${process.env.weatherApiKey}`
    );

    const data = response.data;

    // Extract the necessary information
    const newWeatherData = {
      weather: data.weather[0], // Assuming you're interested in the first weather condition
      temparacher: data.main.temp,
      searchPlace: placeName,
    };

    // Save to MongoDB
    const savedWeatherData = await weatherDatas.create(newWeatherData);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

module.exports = { FETCH_WEATHER_DATA };
