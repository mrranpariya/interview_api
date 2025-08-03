const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ message: "running" }));
app.use("/api", routes);

app.use(errorHandler);

module.exports = app;
