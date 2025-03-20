const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/apiRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
