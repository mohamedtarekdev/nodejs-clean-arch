import * as userRepo from "../repository/user.repository.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import {
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/jwt.js";

export const register = async (data) => {
  const existingUser = await userRepo.findByEmail(data.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await userRepo.create({
    ...data,
    password: hashedPassword,
  });

  const { password, ...safeUser } = user;

  return safeUser;
};

export const login = async (data) => {
  const user = await userRepo.findByEmail(data.email);

  if (!user) throw new Error("Invalid Data");

  const isValidPassword = await comparePassword(data.password, user.password);
  if (!isValidPassword) throw new Error("Invalid Data");

  const accessToken = await signAccessToken(user);
  const refreshToken = await signRefreshToken(user);

  const { password, ...safeUser } = user;

  safeUser.accessToken = accessToken;
  safeUser.refreshToken = refreshToken;

  return safeUser;
};

export const getMe = async (token) => await verifyAccessToken(token);

export const refresh = async (token) => {
  const user = await verifyRefreshToken(token);

  const accessToken = await signAccessToken(user);

  return { accessToken };
};
