import React,{useContext, useState, useEffect} from "react";
import MainPage from "./pages/MainPage";
import CoursePage from "./pages/CoursePage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import Auth from "./pages/Auth";
import {check} from './http/userAPI'
import {observer} from 'mobx-react-lite'
import {Context} from "./index";
import CircularProgress from '@mui/material/CircularProgress';
import Admin from "./pages/Admin";
import TypesPage from "./pages/TypesPage";
import MyCoursePage from "./pages/MyCoursePage";
import AppRouter from "./component/AppRouter";






const App = observer(() =>  {
    const {user} =useContext(Context)
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
                console.log(data)
                if (data.role === 'ADMIN'){
                    user.setAdmin(true)
                }else user.setAdmin(false)
            }).finally(() => setLoading(false))
        }, [])
    if(loading){
        return <CircularProgress/>
    }
    return (

        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
  )
}
)

export default App;
