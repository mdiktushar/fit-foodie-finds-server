const express = require("express");
var cors = require("cors");
const app = express();
const chefs = require("./data/chefs.json");

const port = process.env.PORT || 5000;

app.use(cors());

app.get(`/`, (req, res) => {
  res.send(chefs);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((chef) => chef.id == id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
