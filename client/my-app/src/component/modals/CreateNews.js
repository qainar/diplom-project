import {useState} from "react";
import { styled } from '@mui/material/styles';
import {createNews} from "../../http/courseApi";
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";



const Input = styled('input')({
    fontSize: '14px',
    padding: '10px 10px 10px 0',
    border: 0,
    borderBottom: '1px solid #3c2a4d',
    color: '#bbbbbb',
    width: '400px'
})

const TextArea = styled('textarea')({
    fontSize: '14px',
    resize: 'none',
    color: '#bbbbbb',
    width: '400px',
    display: 'block',
    padding: '10px 10px 10px 10px',
    marginTop: '10px',
    height: '300px'
})
const CreateNews = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [text, setText] = useState('')
    const addNews = () =>{
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('text', text)

        createNews(formData)
    }
    return(
        <div>
            <Box>
                <Typography variant='h6' component="h2">
                    Create News
                </Typography>
                <div>
                    <form>
                        <Input value={title} placeholder='title of news' onChange={e => setTitle(e.target.value)}/>
                        <Input value={description} placeholder='title of description' onChange={e => setDescription(e.target.value)}/>

                        <TextArea value={text}
                                  onChange={e => setText(e.target.value)}
                                  placeholder="Description of course">

                        </TextArea>
                    </form>
                </div>
                <div>
                    <Button variant="outlined" color="success" onClick={addNews} sx={{ marginTop: '10px' }}>
                        Create
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default CreateNews