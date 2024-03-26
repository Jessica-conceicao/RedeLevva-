import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
//import { useNavigate } from "react-router-dom";
import axios from '../../utils/axios'

const UseStyles= makeStyles({
    root: {
       //display: 'flex',
       //flexDirection: 'row',
       height: '100vh'
    },
    image:{
        backgroundImage: 'url(/images/RLLogo.png)',
       backgroundPosition: 'center',
       backgroundRepeat: ' none'

    },
    avatar:{
        background: 'primary',
        marginBottom: 8,
    },
    button: {
        marginTop: 8,
    },
    form:{
        margin:'2 , 4',
    }
   
});


function Login (){
    const classes = UseStyles ();
    //const navigate = useNavigate ();

   async function handleLogin(){
    const response =await axios.post('/api/home/login');
      console.log(response);
    };
    
    return(

        <Grid container className={classes.root}>
            <Grid item  md={8} container direction="column" justify="center" alignItems="center" className={classes.image}>
            <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px' }}>
            
            </Typography>
            <Typography style={{color: 'rbg{255,255,255, 0.7}', marginTop:30 ,fontSize: 15, lineHeight: '30px' }}>
           
            </Typography>
            </Grid>
            <Grid item md={4}>
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h7">
                        Acesso
                    </Typography>
                    <form className={classes.form}> 
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="E-mail" name="email"autoComplete="email" autoFocus/>
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="password" id="password" autoComplete="current-password" />
                        <Button fullWidth variant="contained" color="primary" className={classes.button} 
                        onClick={handleLogin}>
                            Entrar</Button>
                        <Grid container>
                            <Grid item>
                                <Link> Esqueceu sua senha? </Link>
                            </Grid>
                            <Grid item>
                                <Link> Não tem uma conta ? Registre-se </Link>
                            </Grid>
                        </Grid>
                    </form> 
                </Box>
            </Grid>
        </Grid>
       
    )
}
export default Login;