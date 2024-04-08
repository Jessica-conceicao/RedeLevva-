import React from "react";
import {Route} from 'react-router-dom'
import Home from '../pages/Home/Index'

function GuestRoute({element: Component , ...rest}) {

const isAuthenticated =false;

    return(
        <Route {...rest} element={(
            isAuthenticated
            ? <Home/>
            :Component
        )} />

       
    )
}

export default GuestRoute;