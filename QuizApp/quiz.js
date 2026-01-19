import express from "express"
import dotenv from "dotenv"
import routes from "./routes/routes.js";
import connectdb from "./utils/db.js";
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();
const port=process.env.PORT

connectdb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(cors({
        origin:"http://10.14.6.15:5500",
        methods:['get','post','delete'],
        allowedHeaders:['Content-Type','Authorization']
    }))
app.use("/quiz",routes)


app.listen(port,()=>{
    console.log("Listining on port-: ",port);
    
})
