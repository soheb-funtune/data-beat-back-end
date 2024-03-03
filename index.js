const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const userRoutes = require("./routes/user");
const postsData = require("./routes/postsData");

const Connection = require("./database/connection-db");

const isAuthenticated = require("./middleware/auth-middleware");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
// app.use(bodyParser.json());
Connection();

app.use("/user", userRoutes);
app.use("/api", postsData);

app.listen(4000, () => {
  console.log("Serever is Listening on Post 4000");
});
