import express from "express"
import { signup,login } from "../controllers/controllers.js";

const routes=express.Router();

routes.post("/signup",signup)
// routes.get("/verify/:token",verify)
routes.post("/login",login)


export default routes;
