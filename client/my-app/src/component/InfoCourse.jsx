import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import { fetchOneCourse} from "../http/courseApi";
import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Similar from "./Similar";

const Title = styled('span')({
    fontSize: '30px',
    fontFamily: 'Montserrat',
    marginLeft: '20px',
})

const Span = styled('span')({
    fontSize: '18px',
    fontFamily: 'Montserrat',
    marginLeft: '20px',
    position: 'relative',
    top: '20px',
})

const Img = styled('img')({
    borderRadius: '10px'
})

const Cont = styled('div')({
    display: 'flex'
})

const InfoTitle = styled('div')({
    fontSize: '20px',
    fontFamily: 'Montserrat',
    display: 'block',
    fontWeight: 'bold',
    margin: '10px 0 10px 0'
})

const InfoDesc = styled('div')({
    fontSize: '18px',
    fontFamily: 'Montserrat',
    marginBottom: '10px'
})

const InfoCourse = () => {
    const [course, setCourse] = useState({ info: [] })
    const typeId = course.typeId
    const { id } = useParams()
    useEffect(() => {
        fetchOneCourse(id).then(data => setCourse(data))

    }, [])
    return (
        <Container sx={{ mt: 5 }}>
            <Cont>
                <div>
                    <Img width={150} height={150} src={'http://localhost:5000/' + course.img} style={{objectFit: 'contain'}}/>
                </div>

                <div style={{}}>
                    <Title>{course.name}</Title>
                    <br />
                    <Span>{course.small}</Span>
                </div>
            </Cont>

            <div style={{ marginTop: '50px' }}>
                {course.info.map((info, index) =>
                    <div key={info.id}>
                        <InfoTitle>
                            {info.title}
                        </InfoTitle>
                        <InfoDesc>
                            {info.description}
                        </InfoDesc>
                    </div>
                )}
            </div>
            <hr/>
            <div>
                <InfoTitle>
                    Similar
                </InfoTitle>

                <Similar typeId={typeId}/>
            </div>

        </Container>
    )
}

export default InfoCourse