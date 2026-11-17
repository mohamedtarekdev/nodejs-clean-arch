import express from "express";
import userRouter from "./app/users/user.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
