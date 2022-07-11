import { Router } from "express";
import UsersController from "../controllers/UsersController.js";

const UsersRouter = Router();

UsersRouter.post("/signup", UsersController.UserCreateAccount);
UsersRouter.post("/login", UsersController.LoginUserAccount);
UsersRouter.delete('/delete', UsersController.DeleteUserAccount)
UsersRouter.get('/profile', UsersController.GetUserProfile)


export default {
    path: "/users",
    router: UsersRouter,
};