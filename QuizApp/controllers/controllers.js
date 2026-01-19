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
    console.log("hy");
    const {email ,password}=req.body;
    console.log("hy");
    const user=await User.findOne({email});
    console.log("hy");
       if(!user){
           return res.status(400).json({msg:"User Does Not exist Exists"})
           
       }
       const comp= password==user.password;
       console.log("hy");
       if(!comp){
        return res.status(400).json({msg:"Invalid User"})     
       }
       console.log("hy");
       const token = await jwt.sign({email:user.email},"sumit",{expiresIn:"24h"})
      
       console.log(token);
      return res.status(200).json({msg:"Success",token:token});
  } catch (error) {
    return res.status(401).json({msg:error})
  }

}
