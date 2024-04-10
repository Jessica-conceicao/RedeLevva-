import React from "react";
//import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import WritePost from "./WritePost";
import Notifications from "./Notifications";
import Account from "./Account";



const UseStyles = makeStyles({
    AppBar:{
    boxShadow:'none',
   },
   img:{
    maxHeight: 55,
   },
   grow:{
    flexGrow: 1,
   },
   userSection:{
    display:'flex',
    alignItems:'center',
   },

  
});

function Header(){
    const classes = UseStyles();
    const user= null
    console.log(user)

    
    return(
        <AppBar position="fixed" color="inherit" className={classes.AppBar}>
               <Toolbar>
                <img src="/images/RLLogo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}/>
                <div className={classes.userSection}>
                  <WritePost/>
                     <Box ml={2}>
                     <Notifications/>
                     </Box>
                   <Box ml={2}>
                   <Account/>
                   </Box>
                </div>
               </Toolbar>
            </AppBar>
    )
}

export default Header;