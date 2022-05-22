import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Redirect} from "@reach/router";
import {COURSE_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";
import MainPage from "../pages/MainPage";
import CoursePage from "../pages/CoursePage";
import InfoPage from "../pages/InfoPage";
import TypesPage from "../pages/TypesPage";
import MyCoursePage from "../pages/MyCoursePage";
import Admin from "../pages/Admin";

const AppRouter = observer(()=> {
    const {user} = useContext(Context)
    return(
        <Routes>
            {/*{user.isAuth && authRoutes.map(({path,element})=>*/}
            {/*    <Route key={path} path={path} element={element} exact/>*/}
            {/*)}*/}
            {/*{publicRoutes.map(({path, element})=>*/}
            {/*    <Route key={path} path={path} element={element} exact/>*/}
            {/*)}*/}
            {/*/!*<Redirect to={COURSE_ROUTE}/>*!/*/}

            <Route path='/' element={<Auth/>} />
            <Route path='/registration' element={<Auth/>} />
            <Route path='/main' element={<MainPage/>} />
            <Route path='/courses' element={ <CoursePage/> } />
            <Route path='/courses/:id' element={<InfoPage/>} />
            <Route path='/coursesType/:type' element={<TypesPage/>} />
            {user.isAuth && <Route path='/my-courses' element={<MyCoursePage/>}/>}

            {user.isAuth && <Route path='/admin' element={<Admin/>}/>}
        </Routes>
    )
})

export default AppRouter;