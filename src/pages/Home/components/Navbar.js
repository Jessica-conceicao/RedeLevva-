import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';


const UseStyles = makeStyles({
    root:{
        padding:16,
        width:275,
        marginRight:16,
    },
    button:{
        width:'100%',
    }
    
});

 const tags =[
    {id:1, name: 'Cachorro'},
    {id:2, name: 'Gato'},
    {id:3, name: 'BBB'},
    {id:4, name: 'Globo'},
    {id:5, name: 'Manipulação'},
    {id:6, name: 'Davi'},

 ]

function Navbar () {
    const classes =UseStyles();
    return(
        <Paper className={classes.root}>
           <Button variant="outlined" color="secondary" className={classes.button}> Registrar grátis </Button>
           <ListSubheader>{'Tags em alta'} </ListSubheader>
           {
            tags.map((item) =>(
               <ListItem dense button key ={'item-${item.id}-${item.name}'}>
               {`${item.name}`}
               </ListItem>
            ))}
        </Paper>
           
       
    );
}

export default Navbar;