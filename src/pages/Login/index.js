
import React,{useState} from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch } from "react-redux";
import {login}  from '../../actions/accountActions'; 

const useStyles = makeStyles({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(/images/RLLogo.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'none'
  },
  avatar: {
    background: 'primary',
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
  },
  form: {
    margin: '2 , 4',
  }
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();


  async function handleLogin() {
    try {
      await dispatch(login(email, password));
     navigate('/')
    } catch (error) {
       
      setErrorMessage(error.response.data.message)
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid item md={8} container direction="column" justify="center" alignItems="center" className={classes.image}>
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}></Typography>
        <Typography style={{ color: 'rbg{255,255,255, 0.7}', marginTop: 30, fontSize: 15, lineHeight: '30px' }}></Typography>
      </Grid>
      <Grid item md={4}>
        <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h7">
            Acesso
          </Typography>
          <form className={classes.form}>
            <TextField variant="outlined" margin="normal" required fullWidth
              id="email" label="E-mail" name="email" autoComplete="email"
              autoFocus value={email} onChange={(event) => setEmail(event.target.value)} />
            <TextField variant="outlined" margin="normal" required fullWidth
              name="password" label="password" id="password" autoComplete="current-password"
              value={password} onChange={(event) => setPassword(event.target.value)} />
            <Button fullWidth variant="contained" color="primary" className={classes.button}
              onClick={handleLogin}>
              Entrar
            </Button>
            {
              errorMessage &&
              <FormHelperText error>
                {errorMessage}
              </FormHelperText>
            }
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
