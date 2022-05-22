import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import CircleProgress from '../details/CircleProgress';
import {useEffect, useState, useRef} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StickyNote from './StickyNote';
import News from "./News";

const Title = styled('span')({
    fontSize: 30,
    fontFamily: 'Montserrat',
})
const Cont = styled('div')({
    display: 'flex',
    flexGrow: 1,

})

const Evaluations = styled('span')({
    fontSize: '20px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
})

const CircleContainer = styled('div')({
    paddingTop: '20px',
    
})

const Subtitle = styled('span')({
    fontSize: '12px',
    fontFamily: 'Montserrat',
    fontWeight: 'lighter',
    width: '70px',
    
})
function createData(name, value) {
    return {name, value}
}

const rows = [
    createData('Math', 'solve the problem'),
    createData('History', 'solve the problem'),
    createData('Kazakh language', 'solve the problem')
]

const Main = () => {
    const [progress, setProgress ] = useState(0)
    const [color, setColor] = useState('')
    const colorArray = ['#000000', '#ff6600', '#ffa500', '#ffe380', '#00ff00', '#f5487f']
    const randomColor = () => {
        return colorArray[Math.floor(Math.random() * colorArray.length)]
    }


    const onChange = e => {
        if (e.target.value) {
            let progress = e.target.value;
            if (e.target.value > 100) {
                progress = 100;
            }
            if (e.target.value < 0) {
                progress = 0;
            }
          setProgress(progress);
          const randomProgressColor = randomColor();
          setColor(randomProgressColor);
        } else {
          setProgress(0);
        }
      }
    
    return (
        <div style={{paddingTop: 30}}>
            
            <Title>Main Page</Title>
            <Cont>
                <Box sx={{flexGrow: 1, marginTop: '20px'}}>
                    <Grid container spacing={2} sx={{}}>
                        <Grid item xs={6} md={6} sx={{display: 'flex', marginTop: '40px'}}>
                            <Paper elevation={3} sx={{
                                height: '700px' ,
                                padding: '20px',
                                borderRadius: '20px',
                                width: '100%'
                            }}>
                                <News/>
                            </Paper>
                        </Grid>

                        <Grid item xs={6} md={6} sx={{ marginTop: '40px'}}>
                            <Paper elevation={3} sx={{
                                    height: '700px' , 
                                    padding: '20px',
                                    overflowY: 'scroll',
                                    borderRadius: '20px',
                                    '&::-webkit-scrollbar':{width: '10px', backgroundColor: '#f9f9fd', },
                                    '&::-webkit-scrollbar-thumb':{borderRadius: '10px', backgroundColor: '#352750'},
                                    '&::-webkit-scrollbar-track':{backgroundColor: '#f9f9fd', borderRadius: '10px' }
                                    }}>
                                <StickyNote/>
                            </Paper>
                                
                        </Grid>
                    </Grid>
                </Box>
                    
            </Cont>
        </div>
    );
}

export default Main;