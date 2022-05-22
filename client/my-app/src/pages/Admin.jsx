import React, { useState } from 'react';
import Header from "../component/Header";
import CreateType from "../component/modals/CreateType";
import CreateBrand from "../component/modals/CreateBrand";
import CreateCourse from "../component/modals/CreateCourse";
import { Container, Button } from "@mui/material";
import CreateNews from "../component/modals/CreateNews";



const Admin = () => {
    // const [brandVisible, setBrandVisible] = useState(false)
    // const [typeVisible, setTypeVisible] = useState(false)
    // const [courseVisible, setCourseVisible] = useState(false)
    return (
        <Container>
            <Header />
            {/* <Cont>
                <Button variant="outlined" color="success" onClick={() => setTypeVisible(true)} sx={{ marginRight: '10px' }}>Add type</Button>
                <Button variant="outlined" color="success" onClick={() => setBrandVisible(true)} sx={{ marginRight: '10px' }}>Add brand</Button>
                <Button variant="outlined" color="success" onClick={() => setCourseVisible(true)} sx={{ marginRight: '10px' }}>Add course</Button>
            </Cont>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} /> */}

            <CreateBrand />
            <CreateType />
            <CreateCourse />
            <CreateNews/>
        </Container>
    );
}

export default Admin;