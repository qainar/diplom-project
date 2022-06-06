import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
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



const Main = () => {
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