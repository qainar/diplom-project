import { styled } from '@mui/material/styles';
import * as React from 'react'
import AddNote from './AddNote';
import Note from './Note';

const NoteListDiv = styled('div')({
    display : 'grid',
    gridGap: '1rem',
    gridTemplateRows: 'repeat(auto-fill, minmax(200px, 1fr))'
})

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <NoteListDiv>
            <AddNote handleAddNote={handleAddNote}/>
            {notes.map((note)=> (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    key ={note.id}
                />
            ))}
        </NoteListDiv>
    );
}

export default NoteList;