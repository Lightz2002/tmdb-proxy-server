const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");
const genreRoutes = require("./routes/genreRoutes");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend origin (e.g., http://localhost:8080)
// const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:8080', 'https://ryan-react-movie-app.netlify.app'];

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/movies", movieRoutes);
app.use("/api/genres", genreRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} test`);
});
