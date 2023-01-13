const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/foods", (req, res) => {
  res.send("foods");
});

app.listen(3500, () => {
  console.log("app is runnig on port 3500...");
});
