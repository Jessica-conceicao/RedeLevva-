import React from "react";
//import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from "@mui/material";
import SvgIcon from '@mui/material/SvgIcon';
import {Bell} from 'react-feather'


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
   button:{
    marginRight: 10,
   },
   bell:{
    marginRight:10,
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
                    <Button variant="contained" disableElevation className={classes.button}> 
                    Novo post
                     </Button>
                     <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                     </SvgIcon>
                     <Account/>
                </div>
               </Toolbar>
            </AppBar>
    )
}

export default Header;