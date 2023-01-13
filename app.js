const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/login", auth);

app.use("/api/people", people);

app.listen(3500, () => {
  console.log("app is running on port 3500");
});
