import React ,{useState, useRef }from "react";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {logout} from '../../../../actions/accountActions'
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router";

function Account () {
    const account = useSelector ((state) => state.account);
    const [isOpen , setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    //const navigate = useNavigate
 
    const isAuthenticated = !!account.user;

    const handleOpen =() => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        handleClose();
        dispatch(logout());
       // navigate('/');
        
    };

    return (
    <>
    <Avatar
     ref={ref}
    onClick={handleOpen} 
    alt="Remy Sharp" src={account.user && account.user.avatar} 
    />
    {
        isAuthenticated
        ?

    <Menu
    anchorEl={ref.current}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal:'center'
        }}
        open={isOpen}
        onClose={handleClose}
        getContentAnchorEl={null}
        >
            <MenuItem> Perfil </MenuItem>
            <MenuItem> Meus Favoritos </MenuItem>
            <MenuItem> Meus posts </MenuItem>
            <MenuItem> Minhas Conexões </MenuItem>
            <MenuItem onClick={handleLogout}> sair </MenuItem>

    </Menu>
    :

    
    <Menu
    anchorEl={ref.current}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal:'center'
        }}
        open={isOpen}
        onClose={handleClose}
        getContentAnchorEl={null}
        >
            <MenuItem> Registrar grátis </MenuItem>
            <MenuItem> Entrar</MenuItem>
            
    </Menu>

      }
    </>
    )
}

export default Account;
