import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import UserStore from "./store/UserStore";
import CourseStore from './store/CourseStore'

export const Context = createContext(null)

ReactDOM.render(
        <Context.Provider value={{
              user: UserStore,
              course: new CourseStore()
        }}>
            <CssBaseline />
            {/*<BrowserRouter>*/}

                <App />
            {/*</BrowserRouter>*/}

        </Context.Provider>
  ,
  document.getElementById('root')
);


reportWebVitals();
