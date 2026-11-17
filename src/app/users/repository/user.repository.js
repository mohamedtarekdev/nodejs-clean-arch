import users from "../model/user.js";
export const create = async (data) => {
  const user = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  users.push(user);
  console.log(users);
  return user;
};

export const findByEmail = async (email) => {
  return users.find((user) => user.email === email);
};
