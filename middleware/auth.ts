import jwt from "jsonwebtoken";

// Verify Token
const validateToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader == "undefined") res.sendStatus(403);

  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  try {
    const decode = jwt.verify(token, "iepiep");
    req.user = decode.user;
    next();
  } catch (err) {
    //.redirect("/login_page");
    res.sendStatus(403);
  }
};

export default validateToken;
