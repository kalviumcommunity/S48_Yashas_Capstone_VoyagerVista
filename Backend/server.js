const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const placeRoutes = require("./routes/placeRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes for user operations
app.use("/api/users", userRoutes);
// API routes for place operations
app.use("/api/places", placeRoutes);

// Simple home route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
