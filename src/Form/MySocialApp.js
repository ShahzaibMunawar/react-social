import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const MySocialApp = () => {
  return (

  <div>
         <QueryClientProvider client={queryClient}>
    <AppUiDesign />
    </QueryClientProvider>
        
  </div>
  );
}

function AppUiDesign(){
  const [expanded, setExpanded] = useState(false);
  const [expandedID, setExpandedID] = useState(-1);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpandClick = id => {
    // setExpandedCard(prevExpandedCard =>
    //   prevExpandedCard === id ? null : id
    // );
  };

  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message

const loadComments = (postID) => {
  setExpandedID(expandedID === postID ? -1 : postID);
  setExpanded(!expanded);
  // setExpandedCard(prevExpandedCard =>
  //   prevExpandedCard === postID ? null : postID
  // );
console.log(postID);
}

  return(
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>

 {data.map((post,index) => (
  <Grid item xs={2} sm={4} md={4}>
  <Card  key={index}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small" onClick={() => loadComments(post.id)}           
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show more" key={post.id}>Comments</Button>
      </CardActions>
      
      <Collapse in={expanded === index} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
 ))}

</Grid>
</Box>
  );
}

export default MySocialApp;