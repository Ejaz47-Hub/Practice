import registerUserController from "../controllers/Auth.controller.js";
import express from "express"

const Router = express.Router()

Router.post("/register",registerUserController)
export default Router