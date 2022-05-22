import {
    ADMIN_ROUTE,
    COURSE_ROUTE,
    COURSETYPES,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MyCOURSES,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import MyCoursePage from "./pages/MyCoursePage";
import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import CoursePage from "./pages/CoursePage";
import InfoPage from "./pages/InfoPage";
import TypesPage from "./pages/TypesPage";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        element: Admin
    },
    {
        path: MyCOURSES,
        element: MyCoursePage
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        element: Auth
    },
    {
        path: MAIN_ROUTE,
        element: MainPage
    },
    {
        path: COURSE_ROUTE,
        element: CoursePage,
    },
    {
        path: COURSE_ROUTE + '/:id',
        element: InfoPage
    },
    {
        path: COURSETYPES + '/:id',
        element: TypesPage
    }
]