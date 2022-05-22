import React, { useContext, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { Button, InputLabel, MenuItem, FormControl, Select, Box, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { createCourse, fetchBrands, fetchCourses, fetchTypes } from "../../http/courseApi";
import { styled } from '@mui/material/styles';



const Input = styled('input')({
    fontSize: '14px',
    padding: '10px 10px 10px 0',
    border: 0,
    borderBottom: '1px solid #3c2a4d',
    color: '#bbbbbb',
    width: '400px',
    display: 'block'
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

const CreateCourse = observer(() => {
    const { course } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])
    const [small, setSmall] = useState('')
    const [lol, setLol] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchBrands().then(data => course.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', infoImg: '' ,number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const selectLol = e => {
        setLol(e.target.files[0])
    }
    const addCourse = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('small', small)
        formData.append('img', file)
        formData.append('brandId', course.selectedBrand.id)
        formData.append('typeId', course.selectedType.id)
        formData.append('info', JSON.stringify(info))

        createCourse(formData)
    }

    return (
        <Box sx={{ marginTop: '20px' }}>
            <Typography variant='h6' component="h2">
                Create Course
            </Typography>
            <div>
                <form>
                    <FormControl sx={{ width: '150px' }}>
                        <InputLabel>{course.selectedType.name || 'Choose type'}</InputLabel>
                        <Select>
                            {course.types.map(type =>
                                <MenuItem
                                    onClick={() => course.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: '150px', marginLeft: '20px' }}>
                        <InputLabel id="demo-simple-select-label">{course.selectedBrand.name || 'Choose brand'}</InputLabel>
                        <Select>
                            {course.brands.map(brand =>
                                <MenuItem
                                    onClick={() => course.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <Input value={name} onChange={e => setName(e.target.value)} placeholder={'Name of course'} />
                    <Input value={price} onChange={e => setPrice(Number(e.target.value))} placeholder={'Price of course'} type='number' />
                    <Input value={small} onChange={e => setSmall(e.target.value)} placeholder={'Small of course'} />
                    <Input type='file' onChange={selectFile} />
                    <hr />


                    {info.map(i =>
                        <div key={i.number}>

                            <Input
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder='Title of course'
                            />

                            <Input
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Description of course"
                            />
                            <Input type='file' onChange={selectLol} />
                            {/* <TextArea value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Description of course">

                            </TextArea> */}




                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => removeInfo(i.number)}
                                sx={{ marginTop: '10px' }}
                            >
                                Delete
                            </Button>

                        </div>
                    )}
                    <Button variant="outlined" color='success' onClick={addInfo}>Add a new course</Button>
                </form>
            </div>
            <div>
                <Button variant="outlined" color="success" onClick={addCourse} sx={{ marginTop: '10px' }} >
                    Create
                </Button>
            </div>
        </Box>
    )
})

export default CreateCourse