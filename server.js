projectData = {};

const express = require("express");

const app = express();

const bodyPraser = require("body-parser");
app.use(bodyPraser.urlencoded({ extended: false }));
app.use(bodyPraser.json());

const cors = require("cors");
const { linkSync } = require("fs");
app.use(cors());

app.use(express.static("website"));

const port = 5500;

const server = app.listen(port, listening);

function listening() {
  console.log("server is running!");
  console.log(`running on localhost:${port}`);
}
