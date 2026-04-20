import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    username:{type:String,unique:true,trim:true,required:true},
    password:{type:String,required:true}
})


const UserModel = mongoose.model("user",userSchema)
export default UserModel;