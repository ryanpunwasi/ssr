import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer.js";

import createStore from "./helpers/createStore.js";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  // Init and load data into store

  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening");
});
