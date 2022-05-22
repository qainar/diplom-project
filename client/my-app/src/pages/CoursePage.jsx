import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "../component/Courses";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../component/Header";

const CoursePage = () => {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>

                <Grid container>

                    <Grid item xs={1} md={1}>
                    </Grid>

                    <Grid item xs={10} md={10}>
                        <Header/>
                        <Courses/>
                    </Grid>

                </Grid>

            </Box>

        </div>
    );
}

export default CoursePage;