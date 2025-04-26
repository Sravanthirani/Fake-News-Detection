// server.js
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/fact-check", async (req, res) => {
  const { query } = req.body;

  try {
    const response = await axios.get(
      `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${process.env.GOOGLE_API_KEY}`
    );

    console.log("Response from Google:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error calling Google Fact Check API:", error.message);
    res.status(500).json({ error: "Failed to fetch from Google API" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
