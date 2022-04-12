import jwt from "jsonwebtoken";
export const generateJwt = (id: number, user: string, email: string) => {
  //@ts-ignore
  return jwt.sign({ id, user, email }, process.env.SECRET_KEY || "secret key", {
    expiresIn: "24h",
  });
};
