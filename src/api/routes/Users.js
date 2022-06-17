import { Router } from "express";
// import UsersController from "../controllers/UsersController.js";

const UsersRouter = Router();

// UsersRouter.post("/signup", UsersController.UserCreateAccount);
// UsersRouter.post("/login", UsersController.LoginUserAccount);


//delete route
//blockUser route
//unblockUser route


export default {
    path: "/users",
    router: UsersRouter,
};