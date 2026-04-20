import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    Heading : {type:String,required:true},
    Content : {type:String,required:true}
})

const NotesModel = mongoose.model("notes",notesSchema)
export default NotesModel;