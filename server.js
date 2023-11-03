require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});