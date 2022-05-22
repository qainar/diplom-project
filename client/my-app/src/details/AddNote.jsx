import { styled } from '@mui/material/styles';
import * as React from 'react'
import { useState } from 'react';


const Div = styled('div')({
    backgroundColor: '#d3bdff',
    borderRadius: '10px',
    padding: '1rem',
    minHeight: '170px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    whiteSpace: 'pre-wrap',
})

const NoteFooter = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const Button = styled('button')({
    backgroundColor: '#e1e1e1',
    border: 'none',
    borderRadius: '15px',
    padding: '5px 10px 5px 10px',
    '&:hover':{
        backgroundColor: '#ededed',
        cursor: 'pointer'
    }
})

const TextArea = styled('textarea')({
    border: 'none',
    resize: 'none',
    backgroundColor: '#d3bdff',
    '&:focus':{
        outline: 'none'
    }
})


const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value)
        }

    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
        
    }

    return (
        <Div>
            <TextArea 
                rows={8} 
                cols={10} 
                placeholder='Type ur note'
                value={noteText}
                onChange={handleChange}
            >
            </TextArea>
            <NoteFooter>
                <small>{characterLimit - noteText.length} remaining</small>
                <Button onClick={handleSaveClick}>Save</Button>
            </NoteFooter>
        </Div>
    );
}

export default AddNote;