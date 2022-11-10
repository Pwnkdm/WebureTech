const express = require("express");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const UserModel = require("../models/User.model");

const userController = express.Router();

userController.post("/signup", (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("please try again");
    }
    const user = new UserModel({
      firstname,
      lastname,
      email,
      password: hash,
    });

    await user.save();
    return res.send("Sign up Succesfull");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("Please try again");
  }
  const hash = user.password;
  const userId = user._id;

  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      const token = jwt.sign({ email, userId }, "secret");
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 300000),
        // expires nearly around 5 min
        httpOnly: true,
      });
      return res.send("Login sucess");
    } else {
      return res.send("Please try again");
    }
  });
});

module.exports = userController;
