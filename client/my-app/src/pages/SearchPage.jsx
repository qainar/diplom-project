import React, {useContext, useEffect, useState} from "react";
import {fetchCourses, fetchTypes} from "../http/courseApi";
import axios from "axios";
import Header from "../component/Header";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {toJS} from "mobx";
import {Box, Grid, IconButton} from "@mui/material";
import { styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CardMedia from "@mui/material/CardMedia";
import Search from "../component/Search";


const Card = styled('div')({
    display: 'flex',
    width: '520px',
    justifyContent: 'space-between',
    height: '180px'
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

const Carding = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '200px'
})

const Flex = styled('div')({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
})
const SearchPage = observer(() => {
    const { course } = useContext(Context)
    let data = toJS(course.search)

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>

                    <Grid  item xs={1} md={1}>
                    </Grid>

                    <Grid item xs={10} md={10}>
                        <Header/>
                        <Search/>
                    </Grid>

                </Grid>
            </Box>
        </>

    )
})
export default SearchPage