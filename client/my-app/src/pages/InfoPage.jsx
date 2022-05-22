import axios from "axios";
import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../component/Header";
import InfoCourse from "../component/InfoCourse";


const InfoPage = () => {
    // const {coursesid} = useParams()
    // const [appState, setAppState] = useState([])
    //
    // useEffect(()=> {
    //     const apiUrl = 'http://localhost:5000/api/course/' + coursesid
    //     axios.get(apiUrl).then((resp)=>{
    //         const allCourses = resp.data
    //         setAppState(allCourses)
    //
    //     })
    // }, [setAppState])

  
    return (
       
       
       <div>
           <Box sx={{flexGrow: 1}}>

                <Grid container>

                    <Grid item xs={1} md={1}>
                    </Grid>

                    <Grid item xs={10} md={10}>
                        <Header/>
                        <InfoCourse/>
                    </Grid>

                </Grid>

                </Box>

           
       </div>


    );
}

export default InfoPage