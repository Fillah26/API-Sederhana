const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
const { readdirSync } = require("fs");

readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

const group = require("./routes/group.js");

app.get("/", (req, res) => {
  res.send("Desain Front-End");
});

app.get("/group", group);

app.listen(port, () => {
  console.log(`Ready in port: ${port}`);
});
