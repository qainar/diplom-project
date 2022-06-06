import { Grid, IconButton, InputBase,  Paper} from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";
import { useContext,  useState } from "react";
import { Context } from "../index";
import AccountMenu from "./AccountMenu";
import {observer} from "mobx-react-lite";
import axios from "axios";




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
        transition: '.6s',
        color: 'white'
    }
})


const Header = observer(() => {
    const {course, user} = useContext(Context)
    const userName = localStorage.getItem('userName')
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const onChange = () => {
        const url = 'http://localhost:5000/api/course/name'
        if (value.trim().length !==0 ){
            axios.get(url, {params: {name: value}}).then((resp)=>{
                course.setSearch(resp.data)
            })
        }
        navigate('/search')
    }

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
                            type='text'
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={onChange}>
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
                <Span><Link to="/my-courses" style={{ textDecoration: 'none', color: 'black', '&:hover': {color: 'white'} }}>My courses</Link></Span>
                <Span><Link to="/courses" style={{ textDecoration: 'none', color: 'black', }}>All Courses</Link></Span>
            </Cont>

        </div>
    );
})

export default Header;