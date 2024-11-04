const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

mongoose.connect(
  "mongodb+srv://gtx:gt1436@cluster0.qatmt.mongodb.net/shopverse?retryWrites=true&w=majority&appName=Cluster0"
);

// all routes available --> UserRoutes
const UserRoutes = require("./routes/user.routes.js");
app.use("/api/user", UserRoutes);

app.listen(5000, () => {
  console.log("Server started at PORT: 5000");
});

// users-->model,routes and controller
