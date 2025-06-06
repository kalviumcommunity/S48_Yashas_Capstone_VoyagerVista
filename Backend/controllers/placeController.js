const Place = require("../models/Place");

// Get all places
const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ message: "Error fetching places" });
  }
};

// Get a single place by ID
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json(place);
  } catch (error) {
    console.error("Error fetching place:", error);
    res.status(500).json({ message: "Error fetching place" });
  }
};

// Create a new place
const createPlace = async (req, res) => {
  try {
    const { name, history, places_to_visit, famous_foods } = req.body;
    const newPlace = await Place.create({ name, history, places_to_visit, famous_foods });
    res.status(201).json({ message: "Place created successfully", place: newPlace });
  } catch (error) {
    console.error("Error creating place:", error);
    res.status(500).json({ message: "Error creating place" });
  }
};

// Update an existing place
const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPlace) return res.status(404).json({ message: "Place not found" });
    res.json({ message: "Place updated successfully", place: updatedPlace });
  } catch (error) {
    console.error("Error updating place:", error);
    res.status(500).json({ message: "Error updating place" });
  }
};

// Delete a place
const deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) return res.status(404).json({ message: "Place not found" });
    res.json({ message: "Place deleted successfully", place: deletedPlace });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).json({ message: "Error deleting place" });
  }
};

module.exports = {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace
};
