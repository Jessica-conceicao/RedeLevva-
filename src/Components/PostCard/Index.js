import React from "react";
import { makeStyles } from '@material-ui/styles'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import  Avatar  from "@mui/material/Avatar";
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';


const useStyles = makeStyles({
    root:{
        marginBottom: 16,
    },
   subheader:{
    display: 'flex',
    alignItems: 'center',
   },
   caption:{
    marginRight: 8,
   },
   massage:{
    height:'auto',
    marginBottom: 16,
    padding:'0 24px'
   },
   image:{
    height: 300,
    width: '100%',
    maxWidth: '100%',
   },
   content:{
    padding: 0,
   },
   favorite:{
    marginLeft: 'auto',
}
    
});

function PostCard({ post }) {
     const classes = useStyles();
    return(
       <Card className={classes.root}> 
            <CardHeader
                avatar={<Avatar src={post.author.avatar}/>}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}> 
                    <Typography variant="caption"className={classes.caption}>
                        {'Escrito por'}
                        </Typography>
                    <Typography variant="subtitle2" className={classes.caption} >
                        {post.author.name}
                        </Typography>
                    <Typography variant="subtitle2" className={classes.caption}>
                        {post.date}
                        </Typography>
                    </div>
                }
                />              
                    <CardContent className={classes.content}>
                        <Typography className={classes.message} variant="body1">
                          {post.description}
                        </Typography>
                        <Typography>
                     <CardActionArea>
                      <img src={post.Image} className={classes.image} alt="img" />
                     </CardActionArea>
                         </Typography>
                    </CardContent>
            <CardActions disableSpacing>
                
                <IconButton aria-label="like">
                    <FavoriteIcon/>
                    <Typography
                    style={{cursor:'pointer'}}
                    color="textSeconday"
                    variant="body2"
                    >
                        {'10'}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon/>
                    <Typography
                   className={classes.reactions}
                    color="textSeconday"
                    variant="body2"
                    >
                        {'30'}
                    </Typography>
                    </IconButton>
                    <div className={classes.favorite}> 
                    <IconButton aria-label="favorite" >
                    <BookmarkIcon/>
                    </IconButton>
                    </div>
            </CardActions>
       </Card>
    )
}
export default PostCard;