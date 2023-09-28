const express = require("express");
const axios = require("axios");
const { token } = require("../utils");
const router = express.Router();

// Define a route to proxy requests to TMDb API
router.get("/popular", async (req, res) => {
  const { language, page } = req.query;
  try {
    // Forward the request to TMDb API
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`,
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

router.get("/now_playing", async (req, res) => {
  try {
    // Forward the request to TMDb API
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing
    ?language=en-US&page=1`,
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
