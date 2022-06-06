import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import Auth from "../pages/Auth";
import MainPage from "../pages/MainPage";
import CoursePage from "../pages/CoursePage";
import InfoPage from "../pages/InfoPage";
import TypesPage from "../pages/TypesPage";
import MyCoursePage from "../pages/MyCoursePage";
import Admin from "../pages/Admin";
import SearchPage from "../pages/SearchPage";

const AppRouter = observer(()=> {
    const {user} = useContext(Context)
    return(
        <Routes>

            <Route path='/' element={<Auth/>} />
            <Route path='/registration' element={<Auth/>} />
            <Route path='/main' element={<MainPage/>} />
            <Route path='/courses' element={ <CoursePage/> } />
            <Route path='/courses/:id' element={<InfoPage/>} />
            <Route path='/coursesType/:type' element={<TypesPage/>} />
            <Route path='/search' element={<SearchPage/>}/>
            {user.isAuth && <Route path='/my-courses' element={<MyCoursePage/>}/>}

            {user.isAuth && <Route path='/admin' element={<Admin/>}/>}
        </Routes>
    )
})

export default AppRouter;