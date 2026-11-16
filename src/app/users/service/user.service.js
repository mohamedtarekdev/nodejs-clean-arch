import * as userRepo from "../repository/user.repository.js";
import { hashPassword } from "../utils/hash.js";
import { signAccessToken, signRefreshToken } from "../utils/jwt.js";

export const register = async (data) => {
  const user = await userRepo.findByEmail(data.email);
  if (user) throw new Error("User already exists");

  data.password = await hashPassword(data.password);

  return userRepo.create(data);
};

export const login = async (data) => {
  const user = await userRepo.findByEmail(data.email);
  if (!user) throw new Error("Invalid Data");

  const isValidPassword = await userRepo.comparePassword(
    data.password,
    user.password,
  );
  if (!isValidPassword) throw new Error("Invalid Data");

  const accessToken = await signAccessToken(user);
  const refreshToken = await signRefreshToken(user);

  user.accessToken = accessToken;
  user.refreshToken = refreshToken;
  delete user.password;

  return user;
};

export const getMe = async (token) => verifyAccessToken(token);

export const refresh = async (token) => {
  const user = verifyRefreshToken(token);

  const accessToken = signAccessToken(user);

  return accessToken;
};
