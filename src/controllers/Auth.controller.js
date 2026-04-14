import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
async function registerUserController(req,res){
     const {username,password} = req.body

    const UserExists = await UserModel.findOne({username});
    if(UserExists){
       return res.status(422).json({message:"User Already Registers"})
    }

    const CreateUser = await UserModel.create({username,password})
    const token = jwt.sign({id:CreateUser._id},process.env.JWT_SECRET)
    res.cookie("token",token)


   return res.status(201).json({message:"User Registerd",CreateUser:{user:CreateUser.username},token})

}
export default registerUserController