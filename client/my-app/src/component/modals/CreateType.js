import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import { Box, Button, Typography } from "@mui/material";
import { createType } from "../../http/courseApi";
import { styled } from '@mui/material/styles';



const Input = styled('input')({
    fontSize: '14px',
    padding: '10px 10px 10px 0',
    border: 0,
    borderBottom: '1px solid #3c2a4d',
    color: '#bbbbbb',
    width: '400px'
})

const CreateType = () => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createType({ name: value }).then(data => {
            setValue('')
        })
    }
    return (
        // <Modal
        //     open={show}
        //     onClose={onHide}

        // >
        <Box sx={{ marginTop: '20px' }}>
            <Typography variant='h6' component="h2">
                Create type
            </Typography>
            <div>
                <form>
                    <Input value={value} placeholder='Name of type' onChange={e => setValue(e.target.value)} />
                </form>
            </div>
            <div>
                <Button variant="outlined" color="success" onClick={addBrand} sx={{ marginTop: '10px' }} >
                    Create
                </Button>

            </div>
        </Box>
        // </Modal>
    )
}

export default CreateType