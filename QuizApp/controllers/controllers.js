import bcrypt from "bcryptjs";
import User from "../models/dbmodels.js"
import jwt from "jsonwebtoken"


export const signup=async (req,res)=>{
   try {
     const {name,email,contact,password}=req.body;
 
     const user=await User.findOne({email});
     if(user){
         return res.status(400).json({msg:"User Already Exists"})
     }
     const userr=await User.create({name,email,contact,password});
    //  await userr.save();
     res.status(201).json({msg:"User Created"})
   } catch (error) {
    res.status(400).json({msg:"error"})
   }
}

export const login=async(req,res)=>{
  try {
    const {email ,password}=req.body;
    const user=await User.findOne({email});
       if(!user){
           return res.status(400).json({msg:"User Does Not exist Exists"})
       }
       const comp=bcrypt.compare(password,user.password);
       if(!comp){
        return res.status(400).json({msg:"Invalid User"})
       }
       const token = jwt.sign({email:user.email},"sumit",{expiresIn:"24h"})
       res.cookie("token",token)
       return res.status(200);
  } catch (error) {
    return res.status(401).json({msg:ifError})
  }

}
