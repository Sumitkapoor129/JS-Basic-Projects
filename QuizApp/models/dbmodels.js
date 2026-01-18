import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const Userschema=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    contact:Number,
    password:String,
    isverified:Boolean,

},{timestamps:true});

Userschema.pre("save",async function(){
    if(this.isModified=="password"){
        this.password=bcrypt.hash(this.password,10);
    }
    
    return
})

const User=mongoose.model("User",Userschema);
export default User;


