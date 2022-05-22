import React, { useContext, useEffect, useState } from "react";
import MyCourse from "../component/MyCourse";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../component/Header";


const MyCoursePage = () => {

    return (
        <>

            <Box sx={{ flexGrow: 1 }}>

                <Grid container>

                    <Grid item xs={1} md={1}>
                    </Grid>

                    <Grid item xs={10} md={10}>
                        <Header />
                        <MyCourse />
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default MyCoursePage