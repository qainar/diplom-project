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
            }).finally(() => setLoading(false))
        }, [])
    if(loading){
        return <CircularProgress/>
    }
    return (

        // <div>
        //
        //     <Routes>
        //         <Route path='/' element={<Auth/>} />
        //         <Route path='/registration' element={<Auth/>} />
        //         <Route path='/main' element={<MainPage/>} />
        //         <Route path='/courses' element={ <CoursePage/> } />
        //         <Route path='/courses/:id' element={<InfoPage/>} />
        //         <Route path='/coursesType/:type' element={<TypesPage/>} />
        //         <Route path='/my-courses' element={<MyCoursePage/>} />
        //         <Route path='/admin' element={<Admin/>}/>
        //     </Routes>
        //
        //
        //
        // </div>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
  )
}
)

export default App;
