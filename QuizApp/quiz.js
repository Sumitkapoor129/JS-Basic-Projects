import express from "express"
import dotenv from "dotenv"
import routes from "./routes/routes.js";
import connectdb from "./utils/db.js";

dotenv.config();
const app=express();
const port=process.env.PORT

connectdb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(`${BASE_URL}`,routes)


app.listen(port,()=>{
    console.log("Listining on port-: ",port);
    
})
