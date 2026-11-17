import AppError from "../../common/error/AppError.js";

export const USER_ALREADY_EXISTS_ERROR = new AppError(
  "User already exists",
  400,
);
export const INVALID_DATA_ERROR = new AppError("Invalid Data", 400);
