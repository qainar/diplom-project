import { styled } from '@mui/material/styles';
import * as React from 'react'
import { DeleteForever } from '@mui/icons-material'

const NoteDiv = styled('div')({
    backgroundColor: '#e9deff',
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


const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <NoteDiv>
            <span>{text}</span>
            <NoteFooter>
                <small>{date}</small>
                <DeleteForever sx={{cursor: 'pointer', }}
                    fontSize='1.4em' 
                    onClick={()=> handleDeleteNote(id)}
                />
            </NoteFooter>
        </NoteDiv>
    );
}

export default Note;