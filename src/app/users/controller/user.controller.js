import * as userService from "../service/user.service.js";

export const register = async (req, res) => {
  try {
    const user = userService.register(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = userService.login(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const refresh = async (req, res) => {
  try {
    const user = userService.refresh(req.body.refreshToken);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = userService.getMe(req.body.accessToken);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
