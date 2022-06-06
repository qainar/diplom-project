import React, { useState } from 'react'
import { Button, Typography } from "@mui/material";
import { createBrand } from "../../http/courseApi";
import { styled } from '@mui/material/styles';



const Input = styled('input')({
    fontSize: '14px',
    padding: '10px 10px 10px 0',
    border: 0,
    borderBottom: '1px solid #3c2a4d',
    color: '#bbbbbb',
    width: '400px'
})


const CreateBrand = ({ }) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({ name: value }).then(data => {
            setValue('')
        })
    }
    return (

        <div>
            <Typography variant='h6' component="h2">
                Create Brand
            </Typography>
            <div>
                <form>
                    <Input value={value} placeholder='Name of Brand' onChange={e => setValue(e.target.value)} />
                </form>
            </div>
            <div>
                <Button variant="outlined" color="success" onClick={addBrand} sx={{ marginTop: '10px' }} >
                    Create
                </Button>

            </div>
        </div>


    )
}

export default CreateBrand