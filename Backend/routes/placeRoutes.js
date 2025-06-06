const express = require("express");
const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace
} = require("../controllers/placeController");

const router = express.Router();

// GET all places
router.get("/get", getPlaces);

// GET a single place by ID
router.get("/get/:id", getPlaceById);

// POST a new place
router.post("/create", createPlace);

// PUT update a place
router.put("/update/:id", updatePlace);

// DELETE a place
router.delete("/delete/:id", deletePlace);

module.exports = router;
