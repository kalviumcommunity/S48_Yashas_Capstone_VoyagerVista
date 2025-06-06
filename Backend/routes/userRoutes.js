const express = require("express");
const { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser, 
  loginUser 
} = require("../controllers/userController");

const router = express.Router();

// GET all users (for admin purposes)
router.get("/get", getUsers);

// GET a single user by ID
router.get("/get/:id", getUserById);

// POST a new user (signup)
router.post("/create", createUser);

// PUT update a user
router.put("/update/:id", updateUser);

// DELETE a user
router.delete("/delete/:id", deleteUser);

// POST login route
router.post("/login", loginUser);

module.exports = router;
