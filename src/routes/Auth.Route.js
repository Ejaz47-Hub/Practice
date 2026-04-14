import{ registerUserController,loginUserController }from "../controllers/Auth.controller.js";
import express from "express"

const Router = express.Router()

Router.post("/register",registerUserController)
Router.post("/login",loginUserController)
export default Router