import { Avatar, Box, Grid, IconButton, InputBase, MenuItem, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import photo from '../source/image/Avatar.png'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { fetchOneUser } from "../http/courseApi";
import { Context } from "../index";
import {LOGIN_ROUTE} from "../utils/consts";
import Button from "@mui/material/Button";
import { Menu } from "@mui/icons-material";
import AccountMenu from "./AccountMenu";
import {observer} from "mobx-react-lite";


const UserName = styled('span')({
    fontSize: 30,
    fontFamily: 'Montserrat'
})

const Subtitle = styled('span')({
    fontSize: 12,
    fontFamily: 'Montserrat'
})

const Cont = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})

const Span = styled('div')({
    border: '1px solid #95adbe',
    borderRadius: '8px',
    fontSize: '20px',
    fontFamily: 'Montserrat',
    margin: '0 20px',
    padding: '10px',
    '&:hover': {
        background: '#503a65',
        transition: '.6s'
    }
})


const Header = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        try {
            localStorage.removeItem('token')
            user.setUser()
            user.setIsAuth(false)
            navigate(LOGIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    const userName = localStorage.getItem('userName')
    console.log(userName)
    return (
        <div style={{ paddingTop: 20 }}>
            <Grid container
                direction='row'
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item xs={4} md={4}>
                    <UserName>Hello! {userName}</UserName><br />
                    <Subtitle>-Nur-sultan the capital of Kazakhstan</Subtitle>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',
                            borderRadius: 30, boxShadow: '4px 4px 24px -7px #000000',

                        }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>


                    </Paper>
                </Grid>
                <Grid item xs={4} md={4} sx={{}}>
                    <div style={{ width: 56, height: 56, display: 'flex', float: 'right', mr: 10 }}>
                        <AccountMenu />
                    </div>

                </Grid>

            </Grid>
            <br />
            <Cont>
                <Span><Link to="/main" style={{ textDecoration: 'none', color: 'black', }}>Main</Link></Span>
                <Span><Link to="/my-courses" style={{ textDecoration: 'none', color: 'black', }}>My courses</Link></Span>
                <Span><Link to="/courses" style={{ textDecoration: 'none', color: 'black', }}>All Courses</Link></Span>
            </Cont>

        </div>
    );
})

export default Header;