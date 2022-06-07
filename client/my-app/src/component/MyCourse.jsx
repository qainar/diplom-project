import React, { useEffect, useState } from "react";
import {
    fetchBasket,
    fetchBasketCourses,
    fetchCoursesByBasketId,
    fetchdeleteCourse,
} from "../http/courseApi";
import CardMedia from "@mui/material/CardMedia";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";



const Title = styled('span')({
    fontSize: 30,
    fontFamily: 'Montserrat',
})


const Cont = styled('div')({
    flexGrow: 1,
    width: '1550px'
})

const Flex = styled('div')({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
})

const Carding = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '200px'
})

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


const MyCourse = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)
    const array = []
    useEffect(async () => {
        const userId = localStorage.getItem('userId')
        const basket = await fetchBasket(userId)

        const basketId = basket.id
        const MyCourses = await fetchMyCourses(basketId)

        const coursesId = MyCourses.map((value) => {
            return value.id
        })
        const Courses = await fetchCourses(coursesId)
        const arr = Courses.map((value, idx) => {
            return { ...value, "basketId": coursesId[idx] }
        })
        setCourses(arr)
        console.log(Courses)

    }, [])
    const fetchMyCourses = async (basketId) => {
        return await fetchBasketCourses(basketId)
    }
    const fetchCourses = async (courses) => {
        return await fetchCoursesByBasketId(courses)
    }
    const deleteCourse = async (basketId) => {
        const remove = await fetchdeleteCourse(basketId)
        setLoading(!loading)
    }

    return (
        <div style={{ paddingTop: 30 }}>
            <Title>My courses</Title>

            <Cont>
                <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
                    <Flex>
                        {courses && courses.length !== 0 && courses.map((data) => (
                            <Card sx={{ display: 'flex', margin: '0 15px' }} key={data.id}>
                                <Carding>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {data.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {data.price}
                                        </Typography>
                                    </CardContent>

                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                                        <Link to={'/courses/' + data.id} style={{ textDecoration: 'none', }}>
                                            <LinkButton variant='outlined'>
                                                Link
                                            </LinkButton>
                                        </Link>
                                        <IconButton>
                                           <DeleteIcon onClick={() => deleteCourse(data.basketId)} />
                                        </IconButton>
                                    </Box>


                                </Carding>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '180px', height: '180px', objectFit: 'contain' }}
                                    image={'http://localhost:5000/' + data.img}
                                    alt="Live from space album cover"
                                />

                            </Card>

                        ))}
                    </Flex>
                </Box>
            </Cont>

        </div>
    )
}

export default MyCourse