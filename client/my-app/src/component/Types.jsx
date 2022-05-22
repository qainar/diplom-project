import React, { useEffect, useState } from "react";
import { fetchTypes } from "../http/courseApi";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

const Cont = styled('div')({
  display: 'flex',
})

const Span = styled('div')({
  border: '1px solid #95adbe',
  borderRadius: '8px',
  fontSize: '20px',
  fontFamily: 'Montserrat',
  margin: '15px 20px 0 0',
  padding: '10px',
  '&:hover': {
    background: '#503a65',
    transition: '.6s'
  }
})

const MainCont = styled('div')({
  height: '100px',

})


const Types = () => {
  const [types, setTypes] = useState([])
  useEffect(async () => {
    const data = await fetchTypes()
    setTypes(data)
  }, [])
  console.log(types)
  return (
    <MainCont>
      <Cont>

        {types.length !== 0 && types.map((type, idx) => (
          <Span>
            <Link to={`/coursesType/${type.id}`} key={idx} style={{ textDecoration: 'none', color: 'black', }}>
              {type.name}
            </Link>
          </Span>
        ))}

      </Cont>
    </MainCont>
  )
}

export default Types