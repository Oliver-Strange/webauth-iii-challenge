const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // valid
    // do this
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // token is not valid
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.decodedJwt = decodedToken;
        console.log("decodedToken", req.decodedJwt);
        next();
      }
    });
  } else {
    // not valid or does not exist
    // do that
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
