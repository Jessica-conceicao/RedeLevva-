import React from "react";
import {makeStyles} from '@material-ui/styles'

import Header from "./components/Header"
import NewPost from "../Post/New"
import Feed from "../Feed"


import { Routes, Route } from "react-router-dom";


const UseStyles= makeStyles({
    root: {
        display: 'flex' ,
        flexDirection: 'column'
    },

    main:{
        height: '100vh',
       padding: 24,   
    },
    toolbar:{
        minHeight: 64,
    },
})

function Home(){
    const classes = UseStyles();

    return(
        <div className={classes.root}>
            <Header/>
         <div className={classes.toolbar}/>
         <main className={classes.main}> 
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path= "/feed" element={<Feed/>}/>
                <Route path= "/post/new" element={<NewPost/>}/>
                <Route path="*" element={<h1>Not-Foud 404</h1>}/>
            </Routes>
         </main>
        </div>

    );
}

export default Home;