import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = "ASDFHASDJKFFHWUIOEFHDFJKASDH";
const REFRESH_TOKEN_SECRET = "XCVNASFLQQASDFJKQQRIPWUTUIOJ";

export const signAccessToken = async (user) => {
  return jwt.sign({ user }, ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
};

export const signRefreshToken = async (user) => {
  return jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

export const verifyAccessToken = async (token) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
};

export const verifyRefreshToken = async (token) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
};
