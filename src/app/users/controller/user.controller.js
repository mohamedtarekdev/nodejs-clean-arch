import * as userService from "../service/user.service.js";

export const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await userService.login(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const refresh = async (req, res) => {
  try {
    const user = await userService.refresh(req.body.refreshToken);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const token = authHeader.slice(7);

    const user = await userService.getMe(token);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).json({
      error: "Invalid or expired token",
    });
  }
};
