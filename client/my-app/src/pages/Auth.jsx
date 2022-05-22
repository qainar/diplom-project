import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
// import { Link, useLocation, NavLink } from "react-router-dom";
import {COURSE_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { login, registration, logout } from "../http/userAPI";
import { styled } from '@mui/material/styles';
import {NavLink, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Container = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexFlow: 'row nowrap'
})

const LeftSide = styled('div')({
    background: '#3c2a4d',
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '100px'
})

const RightSidde = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0 100px'
})

const HrNah = styled('hr')({
    border: 0,
    height: '20px',
    backgroundColor: 'white',
    width: '75px',
    margin: 0
})

const Title = styled('span')({
    fontWeight: 'bold',
    color: 'white',
    fontSize: '40px'
})

const Group = styled('div')({
    position: 'relative',
    marginBottom: '20px'
})

const InputTitle = styled('h4')({
    textTransform: 'uppercase',
    fontSize: '18px',
    color: '#3c2a4d'
})

const Input = styled('input')({
    fontSize: '14px',
    padding: '10px 10px 10px 0',
    border: 0,
    borderBottom: '1px solid #3c2a4d',
    color: '#bbbbbb',
    width: '400px'
})

const Button1 = styled('button')({
    padding: '10px 20px',
    textAlign: 'center',
    background: '#95adbe',
    fontSize: '18px',
    border: 0,
    color: 'white',
})

const Opto = styled('div')({
    marginTop: '10px',
    marginLeft: '10px',
    fontSize: '14px'
})

const Flex = styled('div')({
    display: 'flex'
})

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')



    // const click = async () => {
    //
    //     try {
    //         let data;
    //         if (isLogin) {
    //             data = await login(email, password)
    //         }
    //         else {
    //             data = await registration(email, name, password)
    //         }
    //         user.setUser(user)
    //         user.setIsAuth(true)
    //         navigate('/courses')
    //         localStorage.setItem('userId', data.id)
    //         localStorage.setItem('userName', data.name)
    //
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    // }

    async function click (){
        let data;
        try {
            if (isLogin){
                data = await login(email, password)
            }
            else{
                data = await registration(email, name, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate('/main')
            localStorage.setItem('userId', data.id)
            localStorage.setItem('userName', data.name)
        }catch (e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container>
            <LeftSide>
                <Title>{isLogin ? 'Auth' : 'Registration'}</Title>
                <HrNah />
            </LeftSide>
            <RightSidde>
                <div>
                    <form>
                        <Group>
                            <InputTitle>Email</InputTitle>
                            <Input placeholder='Your email' value={email} onChange={e => setEmail(e.target.value)} />
                        </Group>

                        {isLogin ? '' :
                            <Group>
                                <InputTitle>First name</InputTitle>
                                <Input placeholder='Your name' value={name} onChange={e => setName(e.target.value)} />
                            </Group>

                        }
                        <Group>
                            <InputTitle>Password</InputTitle>
                            <Input placeholder='Your password' value={password} onChange={e => setPassword(e.target.value)} type='password' />
                        </Group>

                        <Flex>
                            {isLogin ?
                                <Opto>
                                    No account? Create! <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: 'none', fontSize: '14px', color: '#95adbe' }}>Registration</NavLink>
                                </Opto> :
                                <Opto>
                                    Have account? Sign In <NavLink to={LOGIN_ROUTE} style={{ textDecoration: 'none', fontSize: '14px', color: '#95adbe' }}>Login</NavLink>
                                </Opto>
                            }
                        </Flex>

                    </form>
                    <Button1 onClick={click}>
                        {isLogin ? 'Login' : 'Registration'}
                    </Button1>
                </div>

            </RightSidde>


        </Container>

    )

})

export default Auth;