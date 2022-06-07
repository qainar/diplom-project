import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import {Grid, IconButton} from "@mui/material";
import Header from "../component/Header";
import Courses from "../component/Courses";
import React, { useEffect, useState } from "react";
import { fetchCourses } from "../http/courseApi";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const LinkButton = styled(Button)({
    textDecoration: 'none',
    color: 'black',
    borderColor: 'black',
    borderRadius: '10px',
    '&:hover': {
        color: 'black',
        borderColor: 'black',
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


const TypesPage = () => {
    const { type } = useParams()
    const [courses, setCourses] = useState()
    useEffect(async () => {
        const types = await fetchCourses(type)
        setCourses(types)
        console.log(types)
    }, [])
    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container>

                        <Grid item xs={1} md={1}>
                        </Grid>

                        <Grid item xs={10} md={10}>
                            <Header />
                            <Flex>
                                {courses && courses.rows.length && courses.rows.map((course) => (
                                    <Card sx={{ display: 'flex', marginTop: '20px' }} key={course.id}>
                                        <Carding>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography component="div" variant="h5">
                                                    {course.name}
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {course.price}
                                                </Typography>
                                            </CardContent>

                                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                                                <Link to={'/courses/' + course.id} style={{ textDecoration: 'none', }}>
                                                    <LinkButton variant='outlined'>
                                                        Link
                                                    </LinkButton>
                                                </Link>
                                            </Box>


                                        </Carding>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '180px', height: '180px',objectFit: 'contain' }}
                                            image={'http://localhost:5000/' + course.img}
                                            alt="Live from space album cover"

                                        />

                                    </Card>
                                ))}
                            </Flex>

                        </Grid>

                    </Grid>

                </Box>

            </div>
        </>
    )
}

export default TypesPage