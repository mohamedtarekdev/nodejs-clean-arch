import users from "..model/user.model.js";

export const create = async (data) => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  users.push(user);
  return user;
};

export const findByEmail = async (email) => {
  return users.find((user) => user.email === email);
};
