import { Router } from "express";
import UserController from "../controller/UserController";

const userRoute = Router();
const userController = new UserController();

userRoute.post("/createUser", userController.createUser);
userRoute.get("/getUserById/:id", userController.getUserById);
userRoute.get(
  "/getUserByCodigoUsuario/:codigoUsuario",
  userController.getUserByCodigoUsuario
);

export { userRoute };
