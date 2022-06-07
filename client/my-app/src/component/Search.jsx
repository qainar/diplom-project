import React, {useContext} from "react";
import {Context} from "../index";
import {toJS} from "mobx";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const Flex = styled('div')({
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    marginTop: '30px',
})

const Carding = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '200px'
})
const Cont = styled('div')({
    flexGrow: 1,
    width: 'auto'
})

const LinkButton = styled(Button)({
    textDecoration: 'none',
    color: 'black',
    borderColor: 'black',
    borderRadius: '10px',
    '&:hover': {
        color: 'black',
        borderColor: 'black',
    }
})

const Search = () => {
    const { course } = useContext(Context)
    let data = toJS(course.search)
    return(
        <Cont>
            <Box sx={{ flexGrow: 1, marginTop: '20px'}}>
                <div style={{display: 'flex', margin: '0 15px'}}>Результаты поиска</div>
                <Flex>
                    {data.map((courses)=>(
                        <Card sx={{ display: 'flex', margin: '0 15px' }} key={courses.id}>
                            <Carding>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {courses.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {courses.price}
                                    </Typography>
                                </CardContent>

                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                                    <Link to={'/courses/' + courses.id} style={{ textDecoration: 'none', }}>
                                        <LinkButton variant='outlined'>
                                            Link
                                        </LinkButton>
                                    </Link>
                                </Box>
                            </Carding>
                            <CardMedia
                                component="img"
                                sx={{ width: '180px', height: '180px' , objectFit: 'contain'}}
                                image={'http://localhost:5000/' + courses.img}
                                alt="Live from space album cover"

                            />
                        </Card>
                    ))}
                </Flex>
            </Box>
        </Cont>
    )
}

export default Search;