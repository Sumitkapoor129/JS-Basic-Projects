import express from "express"
import { signup,login,verify } from "../controllers/controllers.js";

const routes=express.Router();

routes.post("/signup",signup)
routes.post("/verify/",verify)
routes.post("/login",login)


export default routes;
