import { FormEvent, useRef, useState } from "react";
import { Form , Stack , Col , Row, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable"
import { NoteData , Note , Tag } from "../App";

type NoteFormProps = {
    onSubmit : (data : NoteData) => void
}

export function NoteForm({onSubmit} : NoteFormProps ){
    const titleRef = useRef<HTMLInputElement>(null)
    const [selectedTags , setSelectedTags] = useState<Tag[]>([])
    const markDownRef = useRef<HTMLTextAreaElement>(null)

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        onSubmit({
            title : titleRef.current!.value,
            markdown : markDownRef.current!.value,
            tags : []
        })
    }

    return(
       <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref= {titleRef} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect 
                            isMulti 
                            value={selectedTags.map(tag => {
                                return {label:tag.label , value: tag.id}
                            })}
                            onChange={tags =>{
                                setSelectedTags(tags.map(tag=>{
                                    return {label:tag.label , id:tag.value}
                                }))
                            }}
                            />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group controlId="markdown">
                <Form.Label>Body</Form.Label>
                <Form.Control required  as="textarea" rows={15} ref={markDownRef}/>
            </Form.Group>

            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="outline-primary" >Save</Button>
                <Link to="..">
                    <Button type="button" variant="outline-secondary" >Cancel</Button>
                </Link>
            </Stack>
            
        </Stack>
       </Form>
    )
}