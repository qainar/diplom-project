import React, { useEffect } from "react";
import NoteList from "../details/NoteList";
import { useState } from 'react'
import {nanoid} from 'nanoid'


const StickyNote = () => {
    const [ notes, setNotes ] = useState([
        {
            id: nanoid(),
            text : 'this is first note',
            date : '27/03/2022'
        },
        {
            id: nanoid(),
            text : 'this is another note',
            date : '27/03/2022'
        },
        {
            id: nanoid(),
            text : 'this is also another note',
            date : '27/03/2022'
        }
    ])


    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem('notes'))
        if(savedNotes){
            setNotes(savedNotes)
        }
    }, [])

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const addNote = (text) => {
        const date = new Date()
        const newNote = {
            id: nanoid(),
            text : text,
            date : date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note)=>note.id !== id)
        setNotes(newNotes)
    }

    return (
        <div>
            <NoteList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
        </div>
    );
}

export default StickyNote;