const express = require("express");

const UserModel = require("../models/User.model");

const dashController = express.Router();

dashController.get("/:email", async (req, res) => {
  const { email } = req.params;
  // console.log(data);
  const users = await UserModel.find({ email });
  // console.log(users);
  res.send(users);
});

module.exports = dashController;
