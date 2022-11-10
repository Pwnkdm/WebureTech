const express = require("express");
const { json } = require("express");
const connection = require("./config/db");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var passport = require("passport");

const userController = require("./routes/user.routes");
const authentication = require("./middlewares/authentication");
const dashController = require("./routes/dashboard.routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/user", userController);
app.use(authentication);
app.use("/dashboard", dashController);

app.listen(process.env.PORT, async (req, res) => {
  await connection;
  console.log("connected to db");
  console.log("port is running on http://localhost:8080");
});
