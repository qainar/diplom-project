import React, { useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import {fetchCourses} from "../http/courseApi";
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";



const Sticky = styled('div')({
    position: "sticky",
    top: 0
})

const LinkButton = styled('button')({
    textDecoration: 'none',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid',
    borderColor: 'black',
    borderRadius: '10px',
    padding: '10px',
    width: '65px',
    '&:hover': {
        background: '#503a65',
        transition: '.6s',
        color: 'white'
    }
})

const Flex = styled('div')({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
})

const Carding = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '150px'
})

const Similar = ({typeId}) => {
    const [ course, setCourse] = useState()
    const navigate = useNavigate()
    useEffect(async ()=> {
        const types = await fetchCourses(typeId)
        setCourse(types)
    }, [])
    const click = (id) => {
        navigate(`/courses/${id}`)
        window.location.reload()
    }
    return(
        <Sticky>
            <Flex>
                {course && course.rows.length && course.rows.map((cour)=> (
                    <Card sx={{ display: 'flex', margin: '0 15px' }} key={cour.id}>
                        <Carding>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {cour.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {cour.price}
                                </Typography>
                            </CardContent>

                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                                {/*<Link to={'/courses/' + cour.id} style={{ textDecoration: 'none', }}>*/}
                                {/*    <LinkButton variant='outlined' onClick={()=>click(cour.id)}>*/}
                                {/*        Link*/}
                                {/*    </LinkButton>*/}
                                {/*</Link>*/}
                                <LinkButton onClick={()=>click(cour.id)}>
                                    Link
                                </LinkButton>
                            </Box>


                        </Carding>
                        <CardMedia
                            component="img"
                            sx={{ width: '180px', height: '180px', objectFit: 'contain' }}
                            image={'http://localhost:5000/' + cour.img}
                            alt="Live from space album cover"

                        />

                    </Card>
                ))}
            </Flex>
        </Sticky>
    )
}

export default Similar