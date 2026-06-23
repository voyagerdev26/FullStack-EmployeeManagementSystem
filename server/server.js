import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import employeesRouter from "./routes/employeeRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";

import leaveRouter from "./routes/leaveRoutes.js";
import payslipRouter from "./routes/payslipsRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";

import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"


import dns from 'node:dns'
dns.setServers(['1.1.1.1', '8.8.8.8']); 

const app= express();
// if port available in environment variable so take it or else 4000
const PORT = process.env.PORT || 4000;

// middleware 
// pass all the request using cors
app.use(cors());
app.use(express.json());
app.use(multer().none())


// routes
// home route
app.get("/",(req,res)=>{
  return res.send('Server is running');
})
// created the apis for authentication and employees data
app.use("/api/auth",authRouter); 
app.use("/api/employees",employeesRouter);
app.use("/api/profile",profileRouter);
app.use("/api/attendance",attendanceRouter);
app.use("/api/leave",leaveRouter);
app.use("/api/payslips",payslipRouter);
app.use("/api/dashboard",dashboardRouter);

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));




await connectDB()

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))