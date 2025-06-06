const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  history: { type: String, required: true },
  places_to_visit: { type: [String], required: true },
  famous_foods: { type: [String], required: true },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
