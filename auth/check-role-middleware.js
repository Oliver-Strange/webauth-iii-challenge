module.exports = role => {
  return function(req, res, next) {
    // roles need to be included in payload
    console.log(req.decodedJwt.role);
    if (req.decodedJwt.role && req.decodedJwt.role.includes(role)) {
      next();
    } else {
      res.status(403).json({ message: "YOU HAVE NO POWER HERE!" });
    }
  };
};
