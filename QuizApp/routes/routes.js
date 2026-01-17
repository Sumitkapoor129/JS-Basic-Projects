import express from "express"


const routes=express.Router();

routes.post("/signup",signup)
routes.get("/verify/:token",verify)
routes.post("/login",login)


export default routes;
