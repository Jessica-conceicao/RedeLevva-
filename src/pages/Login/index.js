import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from '@mui/material/Typography';
import { Input } from "@mui/base";

const UseStyles= makeStyles({
    root: {
       display: 'flex',
       flexDirection: 'row',
       height: '100vh'
    },
    fetf:{
        backgroundColor:'yellow',
        flexBasis: '58%',

        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    right:{
        backgroundColor:'blue',
        flexGrow: 0 ,
        flexBasis: '42%'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        margin: '64px 32px',
        alignItems: 'center'

    }
})
function Login (){
    const classes = UseStyles ();
    return(
        <div className={classes.root}>
            <div className={classes.fetf}> 
            <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                <strong>Simplificando a forma de se conectar com o mundo LEVVA</strong>
             </Typography>
             <Typography style={{color: 'rbg{255,255,255,0.7}', marginTop:30 ,fontSize: 15, lineHeight: '30px' }}>
                <strong>Compartilhe suas atualizações diarias</strong>
             </Typography>
            </div>
            <div className={classes.right}>
                 Form 
                <form className={classes.form}>
                    <h4> Acesso </h4>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>
        </div>
    )
}
export default Login;