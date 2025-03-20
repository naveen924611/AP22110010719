require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/apiRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
