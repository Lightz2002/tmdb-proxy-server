const express = require('express');
const axios = require('axios');
const cors = require('cors');

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGNiNjRhODUwMjkyYjYxM2MwMDE2OTQ3ODk5ODljNCIsInN1YiI6IjYwOWNkY2ViMGYwZGE1MDAyOTg4MWI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSocquK4bPcFXPyDmub8ily_QwWB1F0ws5xXqXn-isw';


const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend origin (e.g., http://localhost:8080)
// const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:8080', 'https://ryan-react-movie-app.netlify.app'];


const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

// Define a route to proxy requests to TMDb API
app.get('/api/movies', async (req, res) => {
  try {
    // Forward the request to TMDb API
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGNiNjRhODUwMjkyYjYxM2MwMDE2OTQ3ODk5ODljNCIsInN1YiI6IjYwOWNkY2ViMGYwZGE1MDAyOTg4MWI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSocquK4bPcFXPyDmub8ily_QwWB1F0ws5xXqXn-isw',
        // You can add other query parameters as needed
      },
    });

    // Send the TMDb API response to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
