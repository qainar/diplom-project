import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from "../component/Header";
import {Container} from "@mui/material";
import CreateBrand from "../component/modals/CreateBrand";
import CreateType from "../component/modals/CreateType";
import CreateCourse from "../component/modals/CreateCourse";
import CreateNews from "../component/modals/CreateNews";

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

const Admin = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container>
            <Header/>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh', marginTop: '30px' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Create Brand" {...a11yProps(0)} />
                    <Tab label="Create Type" {...a11yProps(1)} />
                    <Tab label="Create Course" {...a11yProps(2)} />
                    <Tab label="Create News" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CreateBrand/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CreateType/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <CreateCourse/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <CreateNews/>
                </TabPanel>
            </Box>
        </Container>
    );
}

export default Admin;