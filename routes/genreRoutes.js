const express = require("express");
const axios = require("axios");
const { token } = require("../utils");
const router = express.Router();

// Define a route to proxy requests to TMDb API
router.get("/", async (req, res) => {
  try {
    // Forward the request to TMDb API
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list`,
      {
        headers: {
          Authorization: token,
          // You can add other query parameters as needed
        },
      }
    );

    // Send the TMDb API response to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
