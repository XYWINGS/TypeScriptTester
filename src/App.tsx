import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import {Routes,Route, Navigate} from "react-router-dom"
import { NewNote } from "./components/NewNote"

export type NoteData = {
  title : string
  markdown:string
  tags : Tag[]
}

export type Note = {  
  id:string
}& NoteData

export type Tag = {
  id:string
  label : string
}
 
export type RawNote = {
  id : string
}

export type RawNoteData = {
  title : string
  markdown:string
  tagIds : string[]
}


function App() {
  const [notes,setNotes] = useLocalStorage<RawNote[]>("NOTES",[])
  const [tags,setTags] = useLocalStorage<Tag[]>("TAGS",[])
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/new" element={<NewNote/>}></Route>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}></Route>
          <Route path="edit" element={<h1>Edit</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
  </Container>
  )
}

export default App
