import NotesModel from "../models/Notes.model.js"

const CreateNoteController = async(req,res) =>{
    const{Heading,Content} = req.body

    const content = await NotesModel.create({Heading,Content})
    if(content){
        return res.status(200).json({message:"Notes Created SuccessFull",content})
    }

    if(!content){
        return res.status(401).json({message:"Note Creation Faild"})
    }
}

const GetAllNotesController = async(req,res) =>{    
    const DispplayContent = await NotesModel.findOne()
    if(DispplayContent){
        return res.status(200).json({message:"Fetched All The Data",DispplayContent})
    }
}

const UpdateNotesCOntroller = async(req,res) =>{
    const noteid = req.params.id 
    const {Heading,Content} = req.body

    const noteCheck = await NotesModel.findById(noteid)
    if(!noteCheck){
        return res.status(404).json({message:"Note Not Found"})
    }

        noteCheck.Heading = Heading || noteCheck.Heading
        noteCheck.Content = Content || noteCheck.Content

    const UpdateNote = await noteCheck.save()
    return res.status(200).json({message:"Note Updated Sucessfully",UpdateNote})

}

const DeleteNotesController = async(req,res) =>{
    const noteid = req.params.id
    const note = await NotesModel.findById(noteid)
    if(!note){
        return res.status(404).json({message:"Note Not Found"})
    }
    const DeletNotes = await NotesModel.findByIdAndDelete(noteid)

    return res.status(200).json({message:"Note Deleted"},DeletNotes)
}

export {CreateNoteController,GetAllNotesController,UpdateNotesCOntroller,DeleteNotesController};