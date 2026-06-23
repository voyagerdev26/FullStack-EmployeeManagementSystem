import {Router} from "express";
import {login,session, changePassword } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

// now we have to protect this router using middleware so that only admin can access this route
const authRouter= Router();

authRouter.post("/login",login);
//we have to protect this route /session and /change-password so create middleware, in middleware folder we have done it
authRouter.get("/session",protect, session); // so only logged in user can access the route
authRouter.post("/change-password",protect, changePassword); // so only logged in user can access the route

export default authRouter;