import {Router} from "express";
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from "../controllers/employeeController.js";
import { protect, protectAdmin } from "../middleware/auth.js";

// now we have to protect this router using middleware so that only admin can access this route
const employeesRouter= Router();
// so only logged in user and he is an admin can access these routes
employeesRouter.get("/",protect, protectAdmin, getEmployees);
employeesRouter.post("/", protect, protectAdmin, createEmployee);
employeesRouter.put("/:id", protect, protectAdmin, updateEmployee);
employeesRouter.delete("/:id", protect, protectAdmin, deleteEmployee);

export default employeesRouter;