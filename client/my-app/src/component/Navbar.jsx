import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from './Main';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import MenuAppBar from './Header';
import Header from './Header';
import logo from '../source/image/icon.png'
import photo from '../source/image/photo.png'
import Evaluations from './Evaluations';
import { Link } from 'react-router-dom';
import Courses from './Courses';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Cont = styled('div')({
    display: 'flex',
    flexGrow: 1,

})

const DivCont = styled('div')({
  paddingTop: '10px',
  display: 'flex',
})
const Img = styled('img')({
    display: 'block',
    width: '64px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '64px'
})



const TabP = styled(Tab)(({theme})=>({
  fontFamily: 'Montserrat',
}))

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box
    //   sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%',}}
    // >
    <div>
        <Cont>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2} sx={{marginTop: 0}}>
                <Grid item xs={2} md={2} sx={{bgcolor: '#e9deff', height: '100vh', position: 'relative'}}>
                     <DivCont>
                       <Img src={logo} alt="logo" />
                     </DivCont>
                        
                      
                    <Tabs
                        centered
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ pt: 10}}
                        TabIndicatorProps={{style: {display:'none'}}}
                    > 
                      <TabP label="Main" {...a11yProps(0)}/>
                      <TabP label="Courses" {...a11yProps(1)} />
                      <TabP label="Schedule" {...a11yProps(2)} />
                      <TabP label="Evaluations" {...a11yProps(3)} />
                      <TabP label="Settings" {...a11yProps(4)} />
                     


                    </Tabs>
                    


                </Grid>
                <Grid item xs={10} md={10}>
                    {/* <MenuAppBar/> */}
                    <Header/>
                      <TabPanel value={value} index={0}>
                        <Main/>
                        
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Courses/>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        Schedule
                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        <Evaluations/>
                      </TabPanel>
                      <TabPanel value={value} index={4}>
                        Item Five
                      </TabPanel>
                </Grid>
            </Grid>
        </Box>
                    
        

      
    {/* // </Box> */}
    </Cont>
    
    </div>
    
  );
}

