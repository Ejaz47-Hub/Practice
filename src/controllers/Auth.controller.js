import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
async function registerUserController(req,res){
     const {username,password} = req.body

    const UserExists = await UserModel.findOne({username});
    if(UserExists){
       return res.status(422).json({message:"User Already Registers"})
    }
    const hash = await bcrypt.hash(password,10)

    const CreateUser = await UserModel.create({username,password:hash})
    const token = jwt.sign({id:CreateUser._id},process.env.JWT_SECRET)
    res.cookie("token",token)


   return res.status(201).json({message:"User Registerd",CreateUser:{user:CreateUser.username},token})

}

async function loginUserController(req,res){
    const{username,password} = req.body
    

    const IsRegisterd = await UserModel.findOne({username})
    if(!IsRegisterd){
        return res.status(400).json({message:"User Not Registered"})
    }

  const result = await bcrypt.compare(password,IsRegisterd.password)
  if(!result){
    return res.status(400).json({message:"Entered Wrong Password"})
  }

  const token = jwt.sign({id:IsRegisterd._id},process.env.JWT_SECRET)
  res.cookie("token",token)

  res.status(200).json({message:"Login SuccessFully",user:{username},token})

}

export {registerUserController,loginUserController}