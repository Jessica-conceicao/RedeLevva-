import React from "react";
import { makeStyles } from "@material-ui/styles";

import PostCard from "../../Components/PostCard/Index";
import Navbar from "../Feed/Navbar"

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const UseStyles = makeStyles(() =>({
    root:{

    }
}));
const posts =[
    {
        id: 1,
        author:{
            id:1,
            name:'Paulo Henrique',
            username:'Paulohenrique22',
            avatar:'/images/Avatars/AVATAR1.jpg'
        },
        title:"Olá,tudo bem ?",
        date:"25 de Março de 2024",
        description:"Me conte ai galera, como foi o dia de vocês?",
        Image:"/images/LogoRL.png",
        },
        {
            id: 2,
            author:{
                id:1,
                name:'Luara Gabriela',
                username:'Lulugatinha2003',
                avatar:'/images/Avatars/AVATAR2.jpg',
            },
            title:"Bom dia com reflexão",
            date:"25 de Maio de 2024",
            description:"Eu não me importo com o que os outros pensam sobre o que eu faço, mas eu me importo muito com o que eu penso sobre o que eu faço. Isso é caráter.",
            Image:"/images/Posts/TESTE.webp",
            },
  
];

function Feed () {
    const classes = UseStyles();

    return(
        <Container maxWidth="lg">
        <Box display="flex">
        <Navbar/>
        <div className={classes.root}> 
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>   
                ))
            }
        </div>
        </Box>
        </Container>
    );
}

export default Feed;