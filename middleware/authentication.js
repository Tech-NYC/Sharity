const jwt = require("jsonwebtoken");

const authenticate = async (request, response, next) => {
  const token = request.cookies.safeToken;

  if (!token) {
    return response.send("Authentication failed. Missing JWT Token.");
  }

  const { user_id } = await jwt.verify(token, process.env.AUTH_KEY, (err, decoded) => {
    if (err) {
      throw Error("Authentication failed.");
    }

    return decoded;
  });

  request.user_id = user_id;
  next();
};
