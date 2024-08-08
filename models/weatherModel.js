const mongoose = require("mongoose");
const { type } = require("requests");

const weatherSchema = mongoose.Schema({
  weather: {
    type: Object,
    required: true,
  },
  temparacher: {
    type: Number,
    required: true,
  },
  searchPlace: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const weatherDatas = mongoose.model("weatherDatas", weatherSchema);

module.exports = weatherDatas;
