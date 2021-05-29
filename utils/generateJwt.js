import jwt from "jsonwebtoken";
export const generateJwt = (id, user, email) => {
  return jwt.sign({ id, user, email }, process.env.SECRET_KEY || "secret key", {
    expiresIn: "24h",
  });
};
