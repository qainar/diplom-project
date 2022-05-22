import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Context } from "../index";
import Types from "./Types";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Stack } from "@mui/material";
import { addCard } from "../http/courseApi";


const Title = styled('span')({
    fontSize: 30,
    fontFamily: 'Montserrat',
})

const Cont = styled('div')({
    flexGrow: 1,
    width: '1550px'
})

const DivContainer = styled('div')({
    display: 'flex',
    width: '100%',
    padding: '20px',
    marginBottom: '10px',
    justifyContent: 'space-between',
    border: '1px solid black',
    borderRadius: '10px',
    position: 'relative',

})

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '20px'
}));

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




const Courses = (props) => {

    const [appState, setAppState] = useState([])
    let [basketId, setBasketId] = useState()
    const { courses } = useContext(Context)
    const { user } = useContext(Context)
    useEffect(() => {
        const apiUrl = 'http://localhost:5000/api/course'
        axios.get(apiUrl).then((resp) => {
            const allCourses = resp.data.rows
            setAppState(allCourses)

        })

        const userId = localStorage.getItem('userId')
        const apiUrli = 'http://localhost:5000/api/basket/' + userId
        axios.get(apiUrli).then((resp) => {
            setBasketId(resp.data.id)
            console.log(resp.data.id)
        }
        )
    }, [])


    const handleChange = async (id) => {
        const res = await addCard(id, basketId)
        console.log(id, basketId)
        console.log(res)
    }

    return (

        <div style={{ paddingTop: 30 }}>
            <Title>Courses Page</Title>
            <Types />
            <Cont>


                <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {appState.length >= 0 ?
                            appState.map((course) =>
                                <Grid item xs={2} sm={4} md={4} key={course.id}>
                                    <Card sx={{ display: 'flex', }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
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
                                                <IconButton>
                                                    <AddIcon onClick={() => { handleChange(course.id) }} />
                                                </IconButton>
                                            </Box>


                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 'auto', height: '180px' }}
                                            image={'http://localhost:5000/' + course.img}
                                            alt="Live from space album cover"

                                        />

                                    </Card>

                                </Grid>
                            ) : <p>No more</p>
                        }</Grid>
                </Box>






            </Cont>

        </div>
    );
}

export default Courses;