import React from "react";
//import './style.css' ;
import Header from "./components/Header";
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import {makeStyles} from '@material-ui/styles'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

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
         <div className={classes.toolbar}></div>
         <main className={classes.main}> 
         <Container maxWidth="lg">
         <Box display="flex">
         <Navbar/>
         <Feed/>
         </Box>
         </Container>
         {/*<Navbar/>
         <Feed/>} */}
         </main>
        </div>

    );
}

export default Home;