const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.send("please login again.");
  }
  const user_token = req.cookies.jwt;

  jwt.verify(user_token, "secret", function (err, decoded) {
    if (err) {
      return res.send("Please login again.");
    }
    req.body.email = decoded.email;
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = authentication;
