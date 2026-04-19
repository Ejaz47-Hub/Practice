import{ registerUserController,loginUserController, logoutUserController }from "../controllers/Auth.controller.js";
import express from "express"
import middleWare from "../middlewares/Auth.Middleware.js";
import { CreateNoteController, DeleteNotesController, GetAllNotesController, UpdateNotesCOntroller } from "../controllers/Notes.controller.js";

const Router = express.Router()

Router.post("/register",registerUserController)
Router.post("/login",loginUserController)
Router.post("/logout",logoutUserController)
Router.post("/notes",middleWare,CreateNoteController)
Router.get("/notes",GetAllNotesController)
Router.put("/notes/:id",UpdateNotesCOntroller)
Router.delete("/notes/:id",DeleteNotesController)
export default Router