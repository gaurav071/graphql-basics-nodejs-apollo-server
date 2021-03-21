const jwt = require("jsonwebtoken");
const APP_SECRET = "Secret-GraphQL-Project";

const getTokenPayload = (token) => jwt.verify(token, APP_SECRET);

const getUserId = (req, authToken) => {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      if (!token) {
        throw new Error("Token not found");
      }

      const { userId } = getTokenPayload(token);
      return userId;
    } else if (authToken) {
      const token = getTokenPayload(authToken);
      return userId;
    }
  }

  throw new Error("User Not Authenticated");
};

module.exports = {
  getUserId,
  APP_SECRET,
};
