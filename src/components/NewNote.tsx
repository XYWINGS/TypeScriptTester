import { NoteData, Tag } from "../App";
import { NoteForm } from "./NoteForm";

type NewNoteProps ={
    onSubmit : (data:NoteData)=> void
    onAddTag : (tag:Tag) => void
    avaliableTags : Tag[]

}

export function NewNote({onSubmit, onAddTag, avaliableTags} : NewNoteProp){
    return (
        <div>
            <h1 className="mb-4">Add a new note</h1>
            <NoteForm 
            onSubmit={onSubmit}
            onAddTag={onAddTag}
            avaliableTags={avaliableTags}/>
        </div>
    )
} 