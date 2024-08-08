const express = require("express");
const { FETCH_WEATHER_DATA } = require("../controller/weatherController");

const router = express.Router();

router.post("/weather-api", FETCH_WEATHER_DATA);

module.exports = router;
