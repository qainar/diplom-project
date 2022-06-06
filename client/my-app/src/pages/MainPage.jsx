import React, {useContext} from "react";
import Main from '../component/Main'
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Header from "../component/Header";
import {Context} from "../index";



function MainPage() {
  const {user} = useContext(Context)
  console.log(user.isAuth)
  return (

    <div>
      <Box sx={{flexGrow: 1}}>

        <Grid container>

          <Grid item xs={1} md={1}>
          </Grid>

          <Grid item xs={10} md={10}>
            <Header/>
            <Main/>

          </Grid>
        
        </Grid>

      </Box>
      
      

    </div>

  )
}

export default MainPage;
