const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config();
const db = require('./config/connection')

const PORT = process.env.PORT || 3002;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.once('open', () => {
  console.log('mongodb connected');
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

